import { useContext, useState, useEffect } from 'react'
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
import { Row, Col, Card, CardHeader, CardTitle, CardBody, Media, Breadcrumb, BreadcrumbItem, Button, FormGroup, Label } from 'reactstrap'
import OrdersReceived from '@src/views/ui-elements/cards/statistics/OrdersReceived'
import CardCongratulations from '@src/views/ui-elements/cards/advance/CardCongratulations'
import SubscribersGained from '@src/views/ui-elements/cards/statistics/SubscribersGained'
import StatsHorizontal from '@components/widgets/stats/StatsHorizontal'
import '@styles/react/libs/charts/apex-charts.scss'
import ProgressList from './ProgressList'
import Flatpickr from 'react-flatpickr'

const Admin = () => {
  const { colors } = useContext(ThemeColors)
  const [picker, setPicker] = useState(new Date())
  const [userList, setuserList] = useState([])
  const context = useContext(ThemeColors)
//   useEffect(() => {
  
//     getAllUsers()

//   }, [])

// getAllUsers=()=>{
//   axios.get('http://localhost:5000/users').then(response => response.data).then(result => {
//       console.log(result.message)
//       setuserList[result.message]
//     }, error => {
//       console.log(error)
//     })
// }

  return (
    <div id='dashboard-analytics'>
      <h2 className='content-header-title1 float-left mb-0'>Uptime </h2>

      <Row className='match-height mb-2'>
        <Col tag={FormGroup} md='8' sm='12'>
        </Col>
        <Col tag={FormGroup} md='4' sm='12'>
          {/* <PickerHumanFriendly /> */}
          <Label for='default-picker'>Select Date</Label>
          <Flatpickr className='form-control' value={picker} onChange={date => setPicker(date)} id='default-picker' />
        </Col>
      </Row>
      <Row className='match-height mb-2'>
        {/* Stats With Icons Horizontal */}
        <Col lg='12' sm='6'>
          <ProgressList name={'Api'} value={80} status={'UP'} />
        </Col>
        <Col lg='12' sm='6'>
          <ProgressList name={'Blog'} value={45} status={'UP'} />
        </Col> <Col lg='12' sm='6'>
          <ProgressList name={'Heartbeat App'} value={60} status={'UP'} />
        </Col> <Col lg='12' sm='6'>
          <ProgressList name={'Monitering Engine'} value={50} status={'UP'} />
        </Col> <Col lg='12' sm='6'>
          <ProgressList name={'Website'} value={30} status={'UP'} />
        </Col>
        {/* Stats With Icons Horizontal */}
      </Row>
      <Row className='match-height'>
        <h2 className='content-header-title1 float-left mb-1 ml-2'>Overall Uptime </h2>
      </Row>
      <Row className='match-height'>
        {/* Stats With Icons Horizontal */}
        <Col lg='3' sm='6'>
          <StatsHorizontal icon={<Clock size={21} />} color='primary' stats='100%' statTitle='Last 24 hours' />
        </Col>
        <Col lg='3' sm='6'>
          <StatsHorizontal icon={<Clock size={21} />} color='primary' stats='100%' statTitle='Last 7 days' />
        </Col>
        <Col lg='3' sm='6'>
          <StatsHorizontal icon={<Clock size={21} />} color='primary' stats='100%' statTitle='Last 30 days' />
        </Col>
        <Col lg='3' sm='6'>
          <StatsHorizontal icon={<Clock size={21} />} color='primary' stats='100%' statTitle='Last 90 days' />
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
