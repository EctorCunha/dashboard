import { Box, Typography } from '@mui/material';
import ApexCharts from 'react-apexcharts';

export function NavigTypes() {
  const data = {
    options: {
      legend: {
        show: false,
      },
      fill: {
        colors: 'black',
      },
      tooltip: {
        enabled: true,
        z: {
          formatter: undefined,
          title: 'Quantidade de Carga:',
        },
      },
      xaxis: {
        title: {
          text: 'Qtd em toneladas'
        }
      },
      yaxis: {
        title: {
          text: 'Ano'
        }
      },
      chart: {
        type: 'bar',
      },
      plotOptions: {
        bar: {
          horizontal: true,
        },
      },
      subtitle: {
        text: 'ANTAQ',
        align: 'left',
        margin: 10,
        offsetX: 0,
        offsetY: 0,
        floating: false,
        style: {
          fontSize: '12px',
          fontWeight: 'normal',
          fontFamily: undefined,
          color: '#9699a2',
        },
      },
    },
    series: [
      {
        name: 'Peso de carga',
        data: [
          {
            x: '2019',
            y: 1115776616.34436,
            z: 315282703,
          },
          {
            x: '2020',
            y: 1167047779.39717,
            z: 619144076,
          },
          {
            x: '2021',
            y: 712231070.206902,
            z: 458801126,
          },
          {
            x: '2022',
            y: 696114684.693998,
            z: 434532182,
          },
        ],
      },
    ],
  };

  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        gap: '5rem',
        marginTop: '5rem',
      }}
    >
      <Typography variant="h6" sx={{ marginBottom: '-3rem' }}>
        Somatório de Peso (Toneladas) de Carga Transportada por Ano
      </Typography>
      <ApexCharts type="bar" options={data.options} series={data.series} width={600} height={300} />
    </Box>
  );
}
