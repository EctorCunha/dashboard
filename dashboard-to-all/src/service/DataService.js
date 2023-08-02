import axios from 'axios'
import createCandle from './Candle'

export async function getCandles(symbol = 'BTCUSDT', interval = '1m'){
    const response = await axios.get(`http://localhost:3333/candles?symbol=${symbol.toUpperCase()}&interval=${interval}`)
    const candles = response.data.map(k=> createCandle(k[0], k[1], k[2], k[3], k[4]))
    return candles;
}