import { useEffect, useState } from 'react'
import axios from 'axios'
import classnames from 'classnames'
import {
  Row,
  Col,
  Card,
  CardHeader,
  CardTitle,
  CardBody,
  CardText,
  UncontrolledDropdown,
  DropdownMenu,
  DropdownItem,
  DropdownToggle
} from 'reactstrap'
import Chart from 'react-apexcharts'
import * as Icon from 'react-feather'
import CardSubtitle from 'reactstrap/lib/CardSubtitle'
import ChartjsLineChart from './ChartjsLineChart'

const SessionByDevice = props => {
  const [data, setData] = useState(null)

  useEffect(() => {
    axios.get('/card/card-analytics/sessions-device').then(res => setData(res.data))
  }, [])

  const options = {
     plotOptions: {
              pie: {
                startAngle: -140,
                endAngle: 140,
                offsetY: 10
              }
            },
      chart: {
        toolbar: {
          show: false
        }
      },
      labels: ['', 'Mobile'],
      dataLabels: {
        enabled: false
      },
      legend: { show: false },
    //  comparedResult: [2, -3, 8],
      stroke: { width: 0 },
      colors: [props.warning, props.primary]
    },
    series = props.range

  const renderChartInfo = () => {
    return data.chart_info.map((item, index) => {
      const IconTag = Icon[item.icon]
      return (
        <div
          key={index}
          className={classnames('d-flex justify-content-between', {
            'mb-1': index !== data.chart_info.length - 1
          })}
        >
          <div className='d-flex align-items-center'>
            <IconTag
              size={17}
              className={classnames({
                [item.iconColor]: item.iconColor
              })}
            />
            <span className='font-weight-bold ml-75 mr-25'>{item.name}</span>
            <span>- {item.usage}%</span>
          </div>
          <div>
            <span>{item.upDown}%</span>
            {item.upDown > 0 ? (
              <Icon.ArrowUp size={14} className='ml-25 text-success' />
            ) : (
              <Icon.ArrowDown size={14} className='ml-25 text-danger' />
            )}
          </div>
        </div>
      )
    })
  }

  return data !== null ? (
    <Card>
      <CardHeader className='align-items-end float- justify-content- '>
        <CardTitle tag='h4'>{ props.name}</CardTitle>            
      </CardHeader>

       {/* <CardSubtitle tag='h6'  className='ml-2'>in {props.type}</CardSubtitle> */}
      <CardBody>
        <Row>
          <Col lg='12' sm='12' >
            {props.service.map((item, index) => <div className={index % 2 === 0 ? 'p- bg-success mye2 rounded ' : 'bg-danger mye2 rounded' } style={{marginTop:'6px', padding:'15px 15px 15px 15px'}}>
      {/* <CardTitle tag='h4'className='ml-10 mt-2 d-flex align-items-center justify-content-center' style={{color:'white', fontWeight:600}}>Service : {'item'}</CardTitle>      */}
      <CardSubtitle tag='h6'  className='ml-10 mtw-1 d-flex align-items-center justify-content-center' style={{color:'white', marginTop:'5px'}}>{props.units} : {item}</CardSubtitle> 
         
        </div>
        
           )}
        </Col>
      
            </Row>
        {/* {renderChartInfo()} */}
        
         
      </CardBody>
    </Card>
  ) : null
}
export default SessionByDevice
