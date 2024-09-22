import React from 'react'
import Chart from 'react-apexcharts';

export default function MyBarChart() {
    const series = [{
        name: "Income",
        data: [25, 17,39,66, 41, 89, 66, 41, 89] 
      }];
    
      const options = {
        chart: {
          type: 'bar',
          height: 350
        },
        plotOptions: {
          bar: {
            horizontal: false,
            columnWidth: '50%',
          }
        },
        dataLabels: {
          enabled: false
        },
        xaxis: {
          categories: ['Jan','Jan','Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul'],
        },
        title: {
          text: 'Income/Expense Report',
          align: 'left' 
        },
        fill: {
          colors: ['#798afd','#ff8afd','#8afd00','#798afd','#798afd','#ff8afd','#8afd00','#798afd','#8afd00']
        }
      };
    
    
      return (
        <div id="chart1" style={{border:"3px solid #84C1FF", borderRadius: '16px'}}>
         <Chart 
            options={options}
            series={series}
            type="bar"
            height={380} 
            width={590}
          />
        </div>
      );
    }
