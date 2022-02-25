import { Line } from 'react-chartjs-2'
import { Card, CardHeader, CardTitle, CardBody, CardSubtitle } from 'reactstrap'

const ChartjsLineChartModel = ({
  tooltipShadow,
  gridLineColor,
  labelColor,
  warningColorShade,
  lineChartDanger,
  lineChartPrimary,
  lineData
}) => {
  const datafinal = []
  let datalabel = []
  console.log(lineData)
   /* eslint-disable operator-linebreak, implicit-arrow-linebreak */
   const now = new Date()
   const daysOfYear = []
 //let count = 0
   
  const data2 = lineData !== undefined && lineData.length && lineData.map((i, index) => {
  //   for (let d = new Date(i.time[0]); d <= now; d.setMinutes(d.getMinutes() + 1)) {
  //     if (count <= 5) {
  //       daysOfYear.push(new Date(d).toLocaleTimeString('en-US'))
  //       count++
  //     }
  // }
  console.log(daysOfYear)
   
      datalabel = i.x_axis
      datafinal.push({
        data: i.data,
        label: i.label,
        borderColor: index === 0 ? lineChartPrimary : index === 1 ? lineChartDanger : index === 2 ? warningColorShade : lineChartPrimary,
        lineTension: 0.5,
        pointStyle: 'circle',
        backgroundColor: index === 0 ? lineChartPrimary : index === 1 ? lineChartDanger : index === 2 ? warningColorShade : lineChartPrimary,
        fill: false,
        pointRadius: 1,
        pointHoverRadius: 5,
        pointHoverBorderWidth: 5,
        pointBorderColor: 'transparent',
        pointHoverBorderColor: '#fff',
        pointHoverBackgroundColor: index === 0 ? lineChartPrimary : index === 1 ? lineChartDanger : index === 2 ? warningColorShade : lineChartPrimary,
        pointShadowOffsetX: 1,
        pointShadowOffsetY: 1,
        pointShadowBlur: 5,
        pointShadowColor: tooltipShadow
      })
    
  })
  console.log(datafinal)
  const options = {
      responsive: true,
      maintainAspectRatio: false,
      backgroundColor: false,
      legend: {
        position: 'top',
        labels: {
          usePointStyle: true,
          padding: 25,
          boxWidth: 10
        }
      },
      hover: {
        mode: 'label'
      },
      tooltips: {
        // Updated default tooltip UI
        shadowOffsetX: 1,
        shadowOffsetY: 1,
        shadowBlur: 8,
        shadowColor: tooltipShadow,
        backgroundColor: '#fff',
        titleFontColor: '#000',
        bodyFontColor: '#000'
      },
      layout: {
        padding: {
          top: -15,
          bottom: -25,
          left: -15
        }
      },
      scales: {
        xAxes: [
          {
            display: true,
            scaleLabel: {
              display: true
            },
            gridLines: {
              display: true,
              color: gridLineColor,
              zeroLineColor: gridLineColor
            },
            ticks: {
              fontColor: labelColor
            }
          }
        ],
        yAxes: [
          {
            display: true,
            scaleLabel: {
              display: true
            },
            ticks: {
              stepSize: 20,
              min: 0,
              max: 100,
              fontColor: labelColor
            },
            gridLines: {
              display: true,
              color: gridLineColor,
              zeroLineColor: gridLineColor
            }
          }
        ]
      },
      legend: {
        position: 'top',
        align: 'start',
        labels: {
          usePointStyle: true,
          padding: 25,
          boxWidth: 9
        }
      }
    },
    data = {
     
      labels: datalabel,
      datasets: datafinal
      // datasets: [
      //   {
      //       data: [100, 100, 100, 150],
      //     label: 'Process 1',
      //     borderColor: lineChartDanger,
      //     lineTension: 0.5,
      //     pointStyle: 'circle',
      //     backgroundColor: lineChartDanger,
      //     fill: false,
      //     pointRadius: 1,
      //     pointHoverRadius: 5,
      //     pointHoverBorderWidth: 5,
      //     pointBorderColor: 'transparent',
      //     pointHoverBorderColor: '#fff',
      //     pointHoverBackgroundColor: lineChartDanger,
      //     pointShadowOffsetX: 1,
      //     pointShadowOffsetY: 1,
      //     pointShadowBlur: 5,
      //     pointShadowColor: tooltipShadow
      //   },
      //   {
      //     data: [200, 200, 200, 200],
      //     label:'Process 2',
      //     borderColor: lineChartPrimary,
      //     lineTension: 0.5,
      //     pointStyle: 'circle',
      //     backgroundColor: lineChartPrimary,
      //     fill: false,
      //     pointRadius: 1,
      //     pointHoverRadius: 5,
      //     pointHoverBorderWidth: 5,
      //     pointBorderColor: 'transparent',
      //     pointHoverBorderColor: '#fff',
      //     pointHoverBackgroundColor: lineChartPrimary,
      //     pointShadowOffsetX: 1,
      //     pointShadowOffsetY: 1,
      //     pointShadowBlur: 5,
      //     pointShadowColor: tooltipShadow
      //   },
      //   {
      //       data: [300, 200, 100, 200],
      //     label: 'Process 3',
      //     borderColor: warningColorShade,
      //     lineTension: 0.5,
      //     pointStyle: 'circle',
      //     backgroundColor: warningColorShade,
      //     fill: false,
      //     pointRadius: 1,
      //     pointHoverRadius: 5,
      //     pointHoverBorderWidth: 5,
      //     pointBorderColor: 'transparent',
      //     pointHoverBorderColor: '#fff',
      //     pointHoverBackgroundColor: warningColorShade,
      //     pointShadowOffsetX: 1,
      //     pointShadowOffsetY: 1,
      //     pointShadowBlur: 5,
      //     pointShadowColor: tooltipShadow
      //   }
      // ]
    }

  //** To add spacing between legends and chart
  const plugins = [
    {
      beforeInit(chart) {
        chart.legend.afterFit = function () {
          this.height += 20
        }
      }
    }
  ]

  return (
    <Card>
      {/* <CardHeader className='d-flex justify-content-between align-items-sm-center align-items-start flex-sm-row flex-column'>
        <div>
          <CardTitle className='mb-75' tag='h4'>
            Statistics
          </CardTitle>
          <CardSubtitle>Commercial networks and enterprises</CardSubtitle>
        </div>
      </CardHeader> */}
      <CardBody style={{padding:'1.5rem', height:'350px'}}>
        <div style={{ height: '300px', width:'100%' }}>
          <Line data={data} options={options} height={450}  plugins={plugins} />
        </div>
      </CardBody>
    </Card>
  )
}

export default ChartjsLineChartModel
