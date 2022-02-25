import { useContext } from 'react'
import { Activity, Clock, DownloadCloud, FilePlus, FileText, List, Sunset, UserCheck, UserMinus, UserPlus, Users } from 'react-feather'
import { kFormatter } from '@utils'
import { Link } from 'react-router-dom'
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
import { Row, Col, Card, CardHeader, CardTitle, CardBody, Media, Breadcrumb, BreadcrumbItem, Button, FormGroup} from 'reactstrap'
import OrdersReceived from '@src/views/ui-elements/cards/statistics/OrdersReceived'
import CardCongratulations from '@src/views/ui-elements/cards/advance/CardCongratulations'
import SubscribersGained from '@src/views/ui-elements/cards/statistics/SubscribersGained'
import StatsHorizontal from '@components/widgets/stats/StatsHorizontal'
import '@styles/react/libs/charts/apex-charts.scss'
import SettingsForm from './ValidationSchema'
import './index.css'
const UsersList = () => {
  const { colors } = useContext(ThemeColors)

  const context = useContext(ThemeColors)
 
  return (
    <div id='dashboard-analytics '>
      
      <Row as Card className='match-height mb-2'> 
      <h2 className='content-header-title1 float-left mb-2'>Configuration Wizard : Server Monitor </h2> 
</Row>
<Card>
<CardHeader>
        <CardTitle tag='h5'>Setup Agent</CardTitle>
      </CardHeader>
      <CardBody>
{/* <Row>
<h5 className='content-header-title1 float-left mb-1'>Setup Agent </h5> 

</Row> */}
{/* <div className='divider divider-primary float-left'>
        <div className='divider-text'></div>
      </div> */}
      {/* <hr /> */}
      <Row className='ml-4'>
<h5><i>The agent should be installed before you continue running this device.</i></h5>
<ul><li><Link>Download the latest version Agent</Link> for the system you would like to monitor.</li>
<li><Link>Follow the installtion instruction (PDF Version)</Link> and configure the token for the agent</li></ul>
</Row>
</CardBody>
</Card>
      <Row as Card className='match-height mb-2'> 
         <Col lg='8' sm='0'>
    <SettingsForm/>
    <Col lg='2' sm='0'>

</Col>
      </Col>   <Col lg='2' sm='0'>
 
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

export default UsersList
