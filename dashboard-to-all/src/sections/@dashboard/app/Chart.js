import ApexCharts from "react-apexcharts";

/**
 * 
 * @param {data} props 
 * @returns 
 */
export function Chart(props) {
    
    const options = {
      xaxis: {
        type: "datetime",
        labels: {
          datetimeUTC: false
        },
      },
      yaxis: {
        tooltip: {
          enabled: true,
        },
      },
    };
  
    const series = [{
        // eslint-disable-next-line react/prop-types
        data: props.data
      }];
  

  return (
    <ApexCharts
      options={options}
      series={series}
      type="candlestick"
      width={600}
      height={350}
    />
  );
}