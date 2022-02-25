import { useContext, useState, useEffect } from 'react'
import { Activity, DownloadCloud, FilePlus, FileText, List, Monitor, Sunset, UserCheck, UserMinus, UserPlus, Users, UserX } from 'react-feather'
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
import axios from 'axios'
import Apiurl from '../../../configs/RootAPI_url'
const UsersList = () => {
  const { colors } = useContext(ThemeColors)
  const [userList, setuserList] = useState([])
  const [userListCount, setuserListCount] = useState('0')
  const [activeuserListCount, activesetuserListCount] = useState('0')
  const [inactiveuserListCount, inactivesetuserListCount] = useState('0')

  const context = useContext(ThemeColors)
  const getStats = () => {
    // axios.get(`${Apiurl}users/`).then(response => response.data).then(result => {
    //   console.log(result.message)
    //   setuserList(result.message)
    // }, error => {
    //   console.log(error)
    // })
    axios.get(`${Apiurl}configuration/configwizards/servermonitor/stats`).then(response => response.data).then(result => {
      console.log(result.message)
      //setuserList(result.message)
    //  activesetuserListCount(result.message[0].Active)
   // inactivesetuserListCount(result.message[0].InActive)

    }, error => {
      console.log(error)
    })

  }

  useEffect(() => {
    getStats()
    //getAllUsers()
  }, [])
 const handleCount = (count, count1, count2) => {
    setuserListCount(count)
    activesetuserListCount(count1)
    inactivesetuserListCount(count2)
    console.log(count, count1, count2)
}
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
<Row as Card className='match-height mb-2'> 
                    <h2 className='content-header-title1 float-left ml-2 mb-2'>Monitored Servers </h2> 
</Row>
<Row className='match-height'> 
        {/* Stats With Icons Horizontal */}
        <Col lg='4' sm='6'>
          <StatsHorizontal icon={<Monitor size={21} />} color='primary' stats={userListCount} statTitle='Total ' />
        </Col>
        {/* <Col lg='4' sm='6'>
          <StatsHorizontal icon={<Monitor size={21} />} color='warning' stats={userListCount} statTitle='New' />
        </Col> */}
        <Col lg='4' sm='6'>
          <StatsHorizontal icon={<Monitor size={21} />} color='success' stats={activeuserListCount}statTitle='Active' />
        </Col>
        <Col lg='4' sm='6'>
          <StatsHorizontal icon={<Monitor size={21} />} color='danger' stats={inactiveuserListCount}  statTitle='Disabled' />
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
          <DataTableAdvSearch userListcount={handleCount} />
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
