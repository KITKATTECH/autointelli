import Chart from 'react-apexcharts'
import { Card, CardHeader, CardTitle, CardBody } from 'reactstrap'

const ApexRadialbar = () => {
  const donutColors = {
    series1: '#ffe700',
    series2: '#00d4bd',
    series3: '#826bf8',
    series4: '#2b9bf4',
    series5: '#FFA1A1'
  }

  const options = {
    colors: [donutColors.series1, donutColors.series2, donutColors.series4],
    plotOptions: {
      radialBar: {
       //  inverseOrder: true,
           startAngle: 180,
           endAngle: 900,
          // offsetX: 40,
          // offsetY: 0,
        size: 250,
        hollow: {
          size: '35%'
        },
        track: {
          margin: 15,
          // startAngle: 0,
          // endAngle: 270,
            strokeWidth: '97%'
        //  show:false
        },
        dataLabels: {
          name: {
            fontSize: '2rem',
            fontFamily: 'Montserrat'
          },
          value: {
            fontSize: '1rem',
            fontFamily: 'Montserrat'
          },
          total: {
            show: true,
            fontSize: '1rem',
            label: 'Commentsw',
            formatter(w) {
              return '80%'
            }
          }
        }
      }
    },
    grid: {
      padding: {
        top: -35,
        bottom: -30
      }
    },
    // track: {
    //    startAngle: 200
    // // endAngle:45,
    // },
    // offsetX:10,
    // offsetY:10,
    // startAngle: 20,
    // endAngle:45,
    //inverseOrder:false,
    //imageOffsetX:60,
    legend: {
      show: false,
      position: 'bottom'
    },
    stroke: {
      lineCap: 'round'
    },
    labels: ['Comments2']
  }

  return (
    <Card>
      <CardHeader className='d-flex flex-sm-row flex-column justify-content-md-between align-items-start justify-content-start'>
        <CardTitle tag='h4'>Statistics</CardTitle>
      </CardHeader>
      <CardBody>
        <Chart options={options} series={[100]} type='radialBar' height={350} />
      </CardBody>
    </Card>
  )
}

export default ApexRadialbar
