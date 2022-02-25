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
console.log(props)
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
      labels: ['Used', 'Free'],
      dataLabels: {
        enabled: false
      },
      legend: { show: false },
    //  comparedResult: [2, -3, 8],
      stroke: { width: 0 },
      colors: [props.warning, props.primary]
    },
    series = props.range
console.log(series)
console.log(props)
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
      {/* <CardHeader className='align-items-end float-right justify-content-end '>
        <CardTitle tag='h4'>{ props.name}</CardTitle>            
      </CardHeader> */}
      <CardSubtitle tag='h6' className='d-flex justify-content-center align-items-center mt-1 '>{ props.name}</CardSubtitle>

       {/* <CardSubtitle tag='h6'  className='ml-2'>in {props.type}</CardSubtitle> */}
      <CardBody>
        <Row>
          {/* <Col lg='5' sm='12'>

        <Chart className='my-1' options={options} series={series !== undefined ? [series[1], series[0]] : [0, 0]} type='donut' height={200} />
        <CardSubtitle tag='h2' className='d-flex justify-content-center align-items-center -mt-2x'>{series !== undefined ? series[1] : 0}</CardSubtitle>
        <CardSubtitle tag='h4' className='d-flex justify-content-center align-items-center mt-1'>{props.units}{props.type}</CardSubtitle>
        
        </Col> */}
        <Col lg='12' sm='0'>
        <ChartjsLineChart 
         warningColorShade='#ffa500'
            lineChartDanger='#ff4961'
            lineChartPrimary='#666ee8'
              labelColor="#b4b7bd"
              tooltipShadow={"rgba(0, 0, 0, 0.25)"}
              lineData={props !== undefined && props.lineData !== undefined && props.lineData.length ? props.lineData : []}
              gridLineColor="rgba(200, 200, 200, 0.2)" />
             </Col>
            </Row>
        {/* {renderChartInfo()} */}
        
         
      </CardBody>
    </Card>
  ) : null
}
export default SessionByDevice
