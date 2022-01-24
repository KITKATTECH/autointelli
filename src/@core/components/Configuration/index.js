import { useContext, useState } from 'react'
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
import { Row, Col, Card, CardHeader, CardTitle, CardBody, Media, Breadcrumb, BreadcrumbItem, Button, FormGroup, Label} from 'reactstrap'
import OrdersReceived from '@src/views/ui-elements/cards/statistics/OrdersReceived'
import CardCongratulations from '@src/views/ui-elements/cards/advance/CardCongratulations'
import SubscribersGained from '@src/views/ui-elements/cards/statistics/SubscribersGained'
import StatsHorizontal from '@components/widgets/stats/StatsHorizontal'
import '@styles/react/libs/charts/apex-charts.scss'
import ProgressList from './ProgressList'
import { DiLinux, DiDatabase, DiWindows } from "react-icons/di"
import { AiOutlineCluster } from "react-icons/ai"
import Flatpickr from 'react-flatpickr'
import BoxCard from './Card'

const Admin = () => {
  const { colors } = useContext(ThemeColors)
  const [picker, setPicker] = useState(new Date())
  const context = useContext(ThemeColors)
 
  return (
    <div id='dashboard-analytics'>
                   
 <Row className='match-height mb-2'> 
        {/* Stats With Icons Horizontal */}
        <Col lg='12' sm='6'>
         <h2 className='content-header-title1 float-left mb-0'>Configuration wizards - Select a Wizard </h2>
        </Col>
       
        {/* Stats With Icons Horizontal */}
      </Row>
      
      <Row className='match-height mb-2'> 
        {/* Stats With Icons Horizontal */}
        <Col lg='12' sm='12'>
          <ProgressList name={'Api'} value={80} status={ 'UP'}/>
        </Col>
       
        {/* Stats With Icons Horizontal */}
      </Row>
     
<Row className='match-height'> 
        {/* Stats With Icons Horizontal */}
        <Col lg='3' sm='6'>
          <BoxCard icon={<DiLinux  size={21} />} color='primary' statTitle='Monitor a Remote Linux Server' stats='Linux Server' />
        </Col>
        <Col lg='3' sm='6'>
          <BoxCard icon={<DiWindows  size={21} />} color='primary' statTitle='Monitor a Remote Windows Server' stats='Windows Server' />
        </Col>
        <Col lg='3' sm='6'>
          <BoxCard icon={<DiDatabase  size={21} />} color='primary' statTitle='Monitor a MySQL DATABASE' stats='MySQL DATABASE' />
        </Col>
        <Col lg='3' sm='6'>
          <BoxCard icon={<AiOutlineCluster  size={21} />} color='primary' statTitle='Monitor a Specific Website url'  stats='Website URL' />
        </Col>
        {/* Stats With Icons Horizontal */}
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

export default Admin
