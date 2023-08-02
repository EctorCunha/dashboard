import { Box, Typography } from '@mui/material';
import ApexCharts from 'react-apexcharts';

export function TranspLoads() {
  const data = {
    options: {
      tooltip: {
        enabled: true,
        z: {
            formatter: undefined,
            title: 'Peso de Carga:'
        },
    },
      chart: {
        type: 'bar'
      },
      dataLabels: {
        enabled: true,
      },
      xaxis: {
        title: {
          text: 'ano'
        }
      },
      yaxis: {
        title: {
          text: 'Qtd'
        }
      },
      subtitle: {
        text: 'ANTAQ',
        align: 'left',
        margin: 10,
        offsetX: 0,
        offsetY: 0,
        floating: false,
        style: {
          fontSize:  '12px',
          fontWeight:  'normal',
          fontFamily:  undefined,
          color:  '#9699a2'
        },
    }
    },
    series: [{
      name: 'Quantidade de carga',
      data: [
        {
        x: '2019',
        y: 315282703,
        z: 1115776616.34436
      }, {
        x: '2020',
        y: 619144076,
        z: 1167047779.39717
      }, {
        x: '2021',
        y: 458801126,
        z: 712231070.206902
      }, {
        x: '2022',
        y: 434532182,
        z: 696114684.693998
      }
    ],
    }]
  };

  return (
    <Box sx={{display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center", gap: "5rem", marginTop: "5rem"}}>
      <Typography variant='h6' sx={{marginBottom: "-3rem"}}>Somatório de Quantidade de Carga Transportada por Ano</Typography>
      <ApexCharts type="bar" options={data.options} series={data.series} width={600} height={300} />
    </Box>
  );
}
