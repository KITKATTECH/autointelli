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

  return data !== null ? (
    <Card>
      <CardHeader>
        <CardTitle tag='h4'>Server DK-8529</CardTitle>     
      </CardHeader>
        <CardSubtitle tag='h6'  className='ml-2'>Room 271</CardSubtitle>
      <CardBody>
        {/* <Chart options={options} series={series} type='radialBar' height={325} /> */}
        <div className='d-flex justify-content-between mb-1'>
          <div className='d-flex align-items-center'>
            <Circle size={15} className='text-primary' />
            <span className='font-weight-bold ml-75'>Operating System</span>
          </div>
          <span>{'windows'}</span>
        </div>
        <div className='d-flex justify-content-between mb-1'>
          <div className='d-flex align-items-center'>
            <Circle size={15} className='text-warning' />
            <span className='font-weight-bold ml-75'>Region</span>
          </div>
          <span>{'India'}</span>
        </div>
        <div className='d-flex justify-content-between mb-1'>
          <div className='d-flex align-items-center'>
            <Circle size={15} className='text-danger' />
            <span className='font-weight-bold ml-75'>Launch</span>
          </div>
          <span>{'2021-1-21'}</span>
        </div>
             <div className='d-flex justify-content-between mb-1'>
          <div className='d-flex align-items-center'>
            <Circle size={15} className='text-primary' />
            <span className='font-weight-bold ml-75'>Last Start</span>
          </div>
          <span>{'2021-1-21'}</span>
        </div>
             <div className='d-flex justify-content-between mb-1'>
          <div className='d-flex align-items-center'>
            <Circle size={15} className='text-warning' />
            <span className='font-weight-bold ml-75'>Owner</span>
          </div>
          <span>{'owener name here'}</span>
        </div>
             <div className='d-flex justify-content-between mb-1'>
          <div className='d-flex align-items-center'>
            <Circle size={15} className='text-primary' />
            <span className='font-weight-bold ml-75'>Public IP</span>
          </div>
          <span>{'192.198.1.1'}</span>
        </div>
             <div className='d-flex justify-content-between mb-1'>
          <div className='d-flex align-items-center'>
            <Circle size={15} className='text-danger' />
            <span className='font-weight-bold ml-75'>Availabilty</span>
          </div>
          <span>{'Public'}</span>
        </div>
      </CardBody>
    </Card>
  ) : null
}
export default ProductOrders
