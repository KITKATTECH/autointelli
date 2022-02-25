import { useEffect, useState } from 'react'
import axios from 'axios'
import {
  Card,
  CardHeader,
  CardTitle,
  CardBody,
  CardSubtitle,
  UncontrolledDropdown,
  DropdownMenu,
  DropdownItem,
  DropdownToggle
} from 'reactstrap'
import Chart from 'react-apexcharts'
import { Circle } from 'react-feather'

const ProductOrders = props => {
  const [data, setData] = useState(null)
//console.log(props)
  useEffect(() => {
    axios.get('/card/card-analytics/product-orders').then(res => setData(res.data))
  }, [])

  const options = {
      labels: ['Finished', 'Pending', 'Rejected'],
      plotOptions: {
        radialBar: {
          size: 150,
          hollow: {
            size: '20%'
          },
          track: {
            strokeWidth: '100%',
            margin: 15
          },
          dataLabels: {
            value: {
              fontSize: '1rem',
              colors: '#5e5873',
              fontWeight: '500',
              offsetY: 5
            },
            total: {
              show: true,
              label: 'Total',
              fontSize: '1.286rem',
              colors: '#5e5873',
              fontWeight: '500',

              formatter() {
                // By default this function returns the average of all series. The below is just an example to show the use of custom formatter function
                return 42459
              }
            }
          }
        }
      },
      colors: [props.primary, props.warning, props.danger],
      stroke: {
        lineCap: 'round'
      },
      chart: {
        height: 355,
        dropShadow: {
          enabled: true,
          blur: 3,
          left: 1,
          top: 1,
          opacity: 0.1
        }
      }
    },
    series = [70, 52, 26]
console.log(props)
  return data !== null ? (
    <Card>
      <CardHeader className='ml-10 d-flex align-items-center justify-content-center'>
        <CardTitle tag='h5' style={{fontSize:13}}>System Information</CardTitle>     
      </CardHeader>
        <CardSubtitle tag='p'  className='ml-10 d-flex align-items-center justify-content-center' style={{fontSize:10}}>{props.sysinfo.cpuinfo}</CardSubtitle>
      <CardBody>
        {/* <Chart options={options} series={series} type='radialBar' height={325} /> */}
        <div className='d-flex justify-content-between mb-1'>
          <div className='d-flex align-items-center'>
            <Circle size={10} className='text-primary' />
            <span className='font-weight-bold ml-75' style={{fontSize:10}}>Computer Name</span>
          </div>
          <span style={{fontSize:10}}>{props.sysinfo.Hostname}</span>
        </div>
        <div className='d-flex justify-content-between mb-1'>
          <div className='d-flex align-items-center'>
            <Circle size={10} className='text-warning' />
            <span className='font-weight-bold ml-75'style={{fontSize:10}}>System</span>
          </div>
          <span style={{fontSize:10}}>{props.sysinfo.System}</span>
        </div>
        <div className='d-flex justify-content-between mb-1'>
          <div className='d-flex align-items-center'>
            <Circle size={10} className='text-danger' />
            <span className='font-weight-bold ml-75' style={{fontSize:10}}>Architecture</span>
          </div>
          <span style={{fontSize:10}}>{props.sysinfo.Architecture}</span>
        </div>
             <div className='d-flex justify-content-between mb-1'>
          <div className='d-flex align-items-center'>
            <Circle size={10} className='text-primary' />
            <span className='font-weight-bold ml-75' style={{fontSize:10}}>Processor Count</span>
          </div>
          <span style={{fontSize:10}}>{props.sysinfo.CPU_Count}</span>
       </div>
       <div className='d-flex justify-content-between mb-1'>
          <div className='d-flex align-items-center'>
            <Circle size={10} className='text-primary' />
            <span className='font-weight-bold ml-75' style={{fontSize:10}}>{props.cpu.length && props.cpu[1][0].Title }</span>
          </div>
          <span style={{fontSize:10}}>{props.cpu.length && props.cpu[1][0].data[0] }</span>
       </div>
       <div className='d-flex justify-content-between mb-1'>
          <div className='d-flex align-items-center'>
            <Circle size={10} className='text-primary' />
            <span className='font-weight-bold ml-75' style={{fontSize:10}}>{props.mem.length && props.mem[1][0].Title }</span>
          </div>
          <span style={{fontSize:10}}>{props.mem.length && props.mem[1][0].data[0] }</span>
       </div>
      
       <div className='d-flex justify-content-between mb-1'>
          <div className='d-flex align-items-center'>
            <Circle size={10} className='text-primary' />
            <span className='font-weight-bold ml-75' style={{fontSize:10}}>Sytem Uptime </span>
          </div>
          <span style={{fontSize:10}}>{props.time}</span>
       </div>
      </CardBody>
    </Card>
  ) : null
}
export default ProductOrders
