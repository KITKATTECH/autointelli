import { useContext } from 'react'
import { Activity, DownloadCloud, FilePlus, FileText, List, Sunset, UserCheck, UserMinus, UserPlus, Users } from 'react-feather'
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
import { Row, Col, Card, CardHeader, CardTitle, CardBody, Media, Breadcrumb, BreadcrumbItem, Button } from 'reactstrap'
import OrdersReceived from '@src/views/ui-elements/cards/statistics/OrdersReceived'
import CardCongratulations from '@src/views/ui-elements/cards/advance/CardCongratulations'
import SubscribersGained from '@src/views/ui-elements/cards/statistics/SubscribersGained'
import StatsHorizontal from '@components/widgets/stats/StatsHorizontal'
import '@styles/react/libs/charts/apex-charts.scss'
import DataTableAdvSearch from './TableAdvSearch'

const UsersList = () => {
  const { colors } = useContext(ThemeColors)

  const context = useContext(ThemeColors)
 
  return (
    <div id='dashboard-analytics'>
         
      {/* <Breadcrumb className="mb-4">
        <BreadcrumbItem>
          <Link to='#'> Home </Link>
        </BreadcrumbItem>
        <BreadcrumbItem>
          <Link to='#'> Users </Link>
        </BreadcrumbItem>
        <BreadcrumbItem active>
          <span> Users </span>
        </BreadcrumbItem>
      </Breadcrumb> */}
    
{/* <Breadcrumb breadCrumbTitle='Policies' breadCrumbParent='Home' breadCrumbActive='Policies' /> */}
<Row className='match-height'> 
        {/* Stats With Icons Horizontal */}
        <Col lg='3' sm='6'>
          <StatsHorizontal icon={<Users size={21} />} color='primary' stats='120' statTitle='Users' />
        </Col>
        <Col lg='3' sm='6'>
          <StatsHorizontal icon={<UserPlus size={21} />} color='success' stats='80' statTitle='Paid Users' />
        </Col>
        <Col lg='3' sm='6'>
          <StatsHorizontal icon={<UserMinus size={21} />} color='danger' stats='40' statTitle='Active Users' />
        </Col>
        <Col lg='3' sm='6'>
          <StatsHorizontal icon={<DownloadCloud size={21} />} color='primary' stats='120'  statTitle='E-Card Issued' />
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
       <Row className='match-height'>
        <Col xs='12'>
          <DataTableAdvSearch />
        </Col>
      </Row>
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
