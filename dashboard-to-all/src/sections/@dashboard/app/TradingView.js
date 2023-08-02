/* eslint-disable react/jsx-no-bind */
import { useEffect, useState } from 'react';
import useWebSocket from 'react-use-websocket';
import { Box, FormControl, InputLabel, MenuItem, Select, Typography } from '@mui/material';
import { Chart } from './Chart';
import { getCandles } from '../../../service/DataService';
import createCandle from '../../../service/Candle';

export default function TradingView() {
  const [data, setData] = useState([]);
  const [symbol, setSymbol] = useState('BTCUSDT');
  const [interval, setInterval] = useState('1m');

  const { lastJsonMessage } = useWebSocket(
    `wss://stream.binance.com:9443/ws/${symbol.toLowerCase()}@kline_${interval}`,
    {
      onOpen: () => console.log('conectado com a binance'),
      onError: (error) => console.error(error),
      shouldReconnect: () => true,
      reconnectInterval: 3000,
      onMessage: () => {
        if (lastJsonMessage) {
          const candle = lastJsonMessage.k;
          const newCandle = createCandle(candle.t, candle.o, candle.h, candle.l, candle.c);
          const newData = [...data];

          if (candle.x === false) {
            newData[newData.length - 1] = newCandle;
          } else {
            newData.splice(0, 1);
            newData.push(newCandle);
          }

          setData(newData);
        }
      },
    }
  );

  function onSymbolChange(event) {
    setSymbol(event.target.value);
  }

  function onIntervalChange(event) {
    setInterval(event.target.value);
  }

  useEffect(() => {
    getCandles(symbol, interval)
      .then((data) => setData(data))
      .catch((err) => alert(err.response ? err.response.data : err.message));
  }, [symbol, interval, lastJsonMessage]);

  return (
    <Box>
      <Typography variant='h6' >Gráfico Cripto ao vivo - Binance</Typography>
      <FormControl sx={{ m: 1, minWidth: 120 }} size="small">
      <InputLabel id="demo-select-small-label1">Par de moeda</InputLabel>
      <Select sx={{width: "10rem"}} onChange={onSymbolChange} value={'symbol'} label="Symbol">
        <MenuItem value={'BTCUSDT'}>BTCUSDT</MenuItem>
        <MenuItem value={'ETHUSDT'}>ETHUSDT</MenuItem>
        <MenuItem value={'BNBUSDT'}>BNBUSDT</MenuItem>
        <MenuItem value={'ADAUSDT'}>ADAUSDT</MenuItem>
        <MenuItem value={'DOGEUSDT'}>DOGEUSDT</MenuItem>
      </Select>
      </FormControl>

      <FormControl sx={{ m: 1, minWidth: 120 }} size="small">
      <InputLabel id="demo-select-small-label">Intervalo</InputLabel>
      <Select sx={{width: "10rem"}} onChange={onIntervalChange} value={'interval'} label="Interval">
        <MenuItem value={'1m'}>1m</MenuItem>
        <MenuItem value={'1s'}>1s</MenuItem>
        <MenuItem value={'1h'}>1h</MenuItem>
        <MenuItem value={'1d'}>1d</MenuItem>
        <MenuItem value={'1w'}>1w</MenuItem>
      </Select>
      </FormControl>
      <Box>
        <Chart data={data} />
      </Box>
    </Box>
  );
}
