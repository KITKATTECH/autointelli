import { useEffect, useState } from 'react'
import axios from 'axios'
import {
  Toast, ToastBody, ToastHeader,
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
      <CardHeader className='ml-10 mt-10 d-flex align-items-center justify-content-center'>
        <CardTitle tag='h4' ></CardTitle>     
      </CardHeader>
      <CardBody>
      {/* <CardSubtitle tag='h6'  className='ml-10 d-flex align-items-center justify-content-center'>14 Days</CardSubtitle> */}
      <div className='p-3 bg-success mye2 rounded mt-10' style={{marginTop:'75px'}}>
      <CardTitle tag='h4'className='ml-10 d-flex align-items-center justify-content-center' style={{color:'white', fontWeight:600}}>System Uptime</CardTitle>     
      <CardSubtitle tag='h6'  className='ml-10 d-flex align-items-center justify-content-center' style={{color:'white'}}>{props.time}</CardSubtitle>
          {/* <Toast>
            <ToastHeader >System Uptime</ToastHeader>
            <ToastBody>14 Days</ToastBody>
          </Toast> */}
        </div>
      </CardBody>
    </Card>
  ) : null
}
export default ProductOrders
