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
/* eslint-disable operator-linebreak, implicit-arrow-linebreak */
const SessionByDevice = props => {
  const [data, setData] = useState(null)

  useEffect(() => {
    axios.get('/card/card-analytics/sessions-device').then(res => setData(res.data))
  }, [])

  const options = {
     plotOptions: {
              // pie: {
              //   startAngle: -140,
              //   endAngle: 140,
              //   offsetY: 10
              // }
            },
      chart: {
        toolbar: {
          show: false
        }
      },
      labels: ['free', 'useage'],
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
console.log(props)
  return data !== null ? (
    <Card>
      <CardHeader className='align-items-end float-right justify-content-end '>
        {/* <CardTitle tag='h4'>{ props.name}</CardTitle>             */}
      </CardHeader>

       {/* <CardSubtitle tag='h6'  className='ml-2'>in {props.type}</CardSubtitle> */}
      <CardBody className="mt-1">
      <Row>
   {/* /* eslint-disable operator-linebreak, implicit-arrow-linebreak */ }

        {props.data !== undefined && props.data.map(i =>     
          <Col lg='4' sm='12'>
          <CardSubtitle tag='h6' className='d-flex justify-content-center align-items-center mt-1 '>{i[0].Title}</CardSubtitle>

        <Chart className='my-1' options={options} series={i[0].data} type='pie' height={150} width={200} />
        {/* <CardSubtitle tag='h2' className='d-flex justify-content-center align-items-center -mt-2x'>{series[1]}</CardSubtitle> */}
        
        </Col>
)}
        {/* <Col lg='6' sm='0'>
        <CardSubtitle tag='h5' className='d-flex justify-content-center align-items-center mt-1'>Disk Usage : D</CardSubtitle>

        <Chart className='my-1' options={options} series={series} type='pie' height={200} />
        {/* <CardSubtitle tag='h2' className='d-flex justify-content-center align-items-center -mt-2x'>{series[1]}</CardSubtitle> *
             </Col> */}
            </Row>
        {/* {renderChartInfo()} */}
        
         
      </CardBody>
    </Card>
  ) : null
}
export default SessionByDevice
