import { useContext } from 'react'
import { List, UserCheck, Users } from 'react-feather'
import { kFormatter } from '@utils'
import Avatar from '@components/avatar'
import Timeline from '@components/timeline'
import AvatarGroup from '@components/avatar-group'
import jsonImg from '@src/assets/images/icons/json.png'
import InvoiceList from '@src/views/apps/invoice/list'
import ceo from '@src/assets/images/portrait/small/avatar-s-9.jpg'
import { ThemeColors } from '@src/utility/context/ThemeColors'
import Sales from '@src/views/ui-elements/cards/analytics/Sales'
import AvgSessions from '@src/views/ui-elements/cards/analytics/AvgSessions'
import CardAppDesign from '@src/views/ui-elements/cards/advance/CardAppDesign'
import SupportTracker from '@src/views/ui-elements/cards/analytics/SupportTracker'
import { Row, Col, Card, CardHeader, CardTitle, CardBody, Media } from 'reactstrap'
import OrdersReceived from '@src/views/ui-elements/cards/statistics/OrdersReceived'
import CardCongratulations from '@src/views/ui-elements/cards/advance/CardCongratulations'
import SubscribersGained from '@src/views/ui-elements/cards/statistics/SubscribersGained'
import StatsHorizontal from '@components/widgets/stats/StatsHorizontal'
import '@styles/react/libs/charts/apex-charts.scss'
//import Sales2 from '../../ui-elements/cards/analytics/Sales2'
//import ProductOrders from '../../ui-elements/cards/analytics/ProductOrders'
//import SessionByDevice from '../../ui-elements/cards/analytics/SessionByDevice'
//import ChartjsLineChart from '../../charts/chart-js/ChartjsLineChart'
import Progress from 'reactstrap/lib/Progress'
import './index.css'
//import ProductOrders from '../../../views/ui-elements/cards/analytics/ProductOrders'
import SessionByDevice from './components/SessionByDevice'

import ChartjsLineChart from './components/ChartjsLineChart'
import ProductOrders from './components/ProductOrders'

const Hostdetails = () => {
  const { colors } = useContext(ThemeColors)

  const context = useContext(ThemeColors)
  const avatarGroupArr = [
      {
        title: 'Billy Hopkins',
        img: require('@src/assets/images/portrait/small/avatar-s-9.jpg').default,
        placement: 'bottom',
        imgHeight: 33,
        imgWidth: 33
      },
      {
        title: 'Amy Carson',
        img: require('@src/assets/images/portrait/small/avatar-s-6.jpg').default,
        placement: 'bottom',
        imgHeight: 33,
        imgWidth: 33
      },
      {
        title: 'Brandon Miles',
        img: require('@src/assets/images/portrait/small/avatar-s-8.jpg').default,
        placement: 'bottom',
        imgHeight: 33,
        imgWidth: 33
      },
      {
        title: 'Daisy Weber',
        img: require('@src/assets/images/portrait/small/avatar-s-7.jpg').default,
        placement: 'bottom',
        imgHeight: 33,
        imgWidth: 33
      },
      {
        title: 'Jenny Looper',
        img: require('@src/assets/images/portrait/small/avatar-s-20.jpg').default,
        placement: 'bottom',
        imgHeight: 33,
        imgWidth: 33
      }
    ],
    data = [
      {
        title: '12 Invoices have been paid',
        content: 'Invoices have been paid to the company.',
        meta: '',
        metaClassName: 'mr-1',
        customContent: (
          <Media>
            <img className='mr-1' src={jsonImg} alt='data.json' height='23' />
            <Media className='mb-0' body>
              data.json
            </Media>
          </Media>
        )
      },
      {
        title: 'Client Meeting',
        content: 'Project meeting with john @10:15am.',
        meta: '',
        metaClassName: 'mr-1',
        color: 'warning',
        customContent: (
          <Media className='align-items-center'>
            <Avatar img={ceo} />
            <Media className='ml-50' body>
              <h6 className='mb-0'>John Doe (Client)</h6>
              <span>CEO of Infibeam</span>
            </Media>
          </Media>
        )
      },
      {
        title: 'Create a new project for client',
        content: 'Add files to new design folder',
        color: 'info',
        meta: '',
        metaClassName: 'mr-1',
        customContent: <AvatarGroup data={avatarGroupArr} />
      },
      {
        title: 'Create a new project for client',
        content: 'Add files to new design folder',
        color: 'danger',
        meta: '',
        metaClassName: 'mr-1'
      }
    ]

  return (
    <div id='dashboard-analytics'>
  <Row className='match-height'> 
      <Col lg='4' sm='12'>
    <ProductOrders primary={context.colors.primary.main}
                warning={context.colors.warning.main}
                danger={context.colors.danger.main}/>
        </Col>
        
        <Col lg='4' sm='12'>
        <SessionByDevice primary={'#868282'}
            warning={'#EF97C6'}
            danger={context.colors.danger.main}
            name={'CPU'}
            type={'Mhz'}
            range={[60, 40]}
            units={'1300'}          
          />  
        
        </Col>
          <Col lg='4' sm='12'>
         <ChartjsLineChart 
         warningColorShade='#ffe80'
            lineChartDanger='#ff4961'
            lineChartPrimary='#666ee8'
            labelColor="#b4b7bd"
            tooltipShadow={"rgba(0, 0, 0, 0.25)"}
            gridLineColor="rgba(200, 200, 200, 0.2)" />
        
        </Col>
      </Row>

      <Row className='match-height'> 
  
        <Col lg='4' sm='12'>
           <SessionByDevice primary={'#868282'}
            warning={'#FBF424'}
            danger={context.colors.danger.main}
            name={'Hard Disk Drive'}
            type={'%'}
            range={[50, 50]}
            units={'100'}          
          />        
        </Col>
        <Col lg='4' sm='12'>
           <SessionByDevice primary={'#868282'}
            warning={'#28c76f66'}
            danger={context.colors.danger.main}
            name={'NetWork'}
            type={'Mbit'}
            range={[35, 65]}
            units={'300'}          
          />
         </Col>
         <Col lg='4' sm='12'>
           <SessionByDevice primary={'#868282'}
            warning={'#7ED0F3'}
            danger={context.colors.danger.main}
            name={'Ram'}
            type={'MB'}
            range={[80, 20]}
            units={'3200'}
          />
        </Col>
      </Row>
      {/* <Row className='match-height'>
        <Col lg='6' sm='12'>
          {/* <CardCongratulations /> *
        </Col>
        <Col lg='3' sm='6'>
          <SubscribersGained kFormatter={kFormatter} />
        </Col>
        <Col lg='3' sm='6'>
          <OrdersReceived kFormatter={kFormatter} warning={colors.warning.main} />
        </Col>
      </Rokw>
       */}
       {/* <Row className='match-height'>
        <Col xs='12'>
          <InvoiceList />
        </Col>
      </Row> */}
      {/* <Row className='match-height'>
        <Col lg='4' xs='12'>
        <ProductOrders primary={context.colors.primary.main}
                warning={context.colors.warning.main}
                danger={context.colors.danger.main}/>
        </Col>
        <Col lg='8' xs='12'>
        <Card>
      
        <Row as Card className='match-height p-20' style={{padding: '40px 0px 0px 60px'}}>
        
          <Col className='p-44 mb-2' md='6' sm='12'>
           
            <p className='mb-50'>Employee: {data.goal}</p>
            <Progress className='avg-session-progress mt-25' value='50' />
          {/* </Col>
          <Col className='mb-2' md='6' sm='12'> *
            <p className='mb-70'>Employee: {kFormatter(data.users)}</p>
            <Progress className='avg-session-progress progress-bar-warning mt-25' value='60' />
          {/* </Col>
          <Col md='6' sm='12'> 
            <p className='mb-70'>Employee: {data.retention}%</p>
            <Progress className='avg-session-progress progress-bar-danger mt-25' value='70' />
          {/* </Col>
          <Col md='6' sm='12'> 
            <p className='mb-70'>Employee: {data.duration}yr</p>
            <Progress className='avg-session-progress progress-bar-success mt-25' value='80' />

            <p className='mb-70'>Employee: {data.goal}</p>
            <Progress className='avg-session-progress mt-25' value='50' />
          {/* </Col>
          <Col className='mb-2' md='6' sm='12'>
            <p className='mb-70'>Employee: {kFormatter(data.users)}</p>
            <Progress className='avg-session-progress progress-bar-warning mt-25' value='60' />
          {/* </Col>
          <Col md='6' sm='12'>
            <p className='mb-70'>Employee: {data.retention}%</p>
            <Progress className='avg-session-progress progress-bar-danger mt-25' value='70' />
          {/* </Col>
          <Col md='6' sm='12'>
            <p className='mb-70'>Employee: {data.duration}yr</p>
            <Progress className='avg-session-progress progress-bar-success mt-25' value='80' />
            
          </Col>
         
        </Row>
        </Card>
        </Col>
      </Row> */}
      {/* <Row className='match-height'>
        <Col lg='4' xs='12'>
          <Card className='card-user-timeline'>
            <CardHeader>
              <div className='d-flex align-items-center'>
                <List className='user-timeline-title-icon' />
                <CardTitle tag='h4'>User Timeline</CardTitle>
              </div>
            </CardHeader>
            <CardBody>
              <Timeline className='ml-50 mb-0' data={data} />
            </CardBody>
          </Card>
        </Col>
        {/* <Col lg='4' md='6' xs='12'>
          <Sales primary={colors.primary.main} info={colors.info.main} />
        </Col>
        <Col lg='4' md='6' xs='12'>
          <CardAppDesign />
        </Col> *
      </Row> */}
      
    </div>
  )
}

export default Hostdetails
