import { Box, Typography } from '@mui/material';
import ApexCharts from 'react-apexcharts';

export function TypeNav() {
  const data = {
    options: {
      chart: {
        type: 'donut',
      },
      plotOptions: {
        pie: {
            donut: {
            labels: {
              show: true,
              name: "Total",
              value: 22379046,
            },
          },
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
          fontSize:  '12px',
          fontWeight:  'normal',
          fontFamily:  undefined,
          color:  '#9699a2'
        },
    },
      dataLabels: {
        enabled: true,
      },
      labels: ['Longo Curso', 'Cabotagem', 'Interior', 'Não Indentificado', 'Apoio Portuário', 'Apoio Marítimo'],
    },
    series: [15734335, 4096090, 1964321, 496439, 47883, 39978],
    chartOptions: {
      labels: ['Longo Curso', 'Cabotagem', 'Interior', 'Não Indentificado', 'Apoio Portuário', 'Apoio Marítimo'],
    },
  };

  return (
    <Box sx={{display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center", gap: "5rem"}}>
      <Typography variant='h6'>Tipos de navegação</Typography>
      <ApexCharts type="donut" options={data.options} series={data.series} width={400} height={300} />
    </Box>
  );
}
