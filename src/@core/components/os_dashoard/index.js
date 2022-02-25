import { useContext, useEffect, useState } from 'react'
import { AlertCircle, AlertTriangle, CheckCircle, Clock, List, RefreshCcw, UserCheck, Users } from 'react-feather'
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
import { Row, Col, Card, CardHeader, CardTitle, CardBody, Media, ListGroup, ListGroupItem, FormGroup, Label, Input, Form, Button, CardSubtitle } from 'reactstrap'
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
import { useForm } from 'react-hook-form'
import axios from 'axios'
import Apiurl from '../../../configs/RootAPI_url'
import ChartjsLineChart from './components/ChartjsLineChart'
import ProductOrders from './components/ProductOrders'
import Info from './components/Info'
import ButtonLine from './components/Button_line'
import Disk from './components/Disk_chart'

const Hostdetails = () => {
  const { colors } = useContext(ThemeColors)
  const { register, errors, handleSubmit } = useForm()
  const context = useContext(ThemeColors)
  const [apps, setapps] = useState([])
  const [appid, setappsid] = useState('')
  const [host, sethost] = useState([])
  const [hostid, sethostid] = useState('')
  const [hostval, sethostval] = useState('')
  const [time, settime] = useState([])
  const [mins, setmins] = useState([])

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
  const getTime = () => {
    axios.get(`${Apiurl}dashboards/os/list_timestamps`).then(response => response.data).then(result => {
      console.log(result.message)
      settime(result.message)
      setmins(result.message[0][1])

      //localStorage.setItem('mins', result.message[0][1])


      //console.log(result.message.length, count1, count2)
      //   props.userListcount(result.message.length, count1, count2)
    }, error => {
      console.log(error)
    })
  }
  const getAllapps = () => {
    axios.get(`${Apiurl}dashboards/os/list_applications`).then(response => response.data).then(result => {
      console.log(result.message)
      setapps(result.message)
      //console.log(result.message.length, count1, count2)
      //   props.userListcount(result.message.length, count1, count2)
    }, error => {
      console.log(error)
    })
  }
  const onAppchange = (val) => {
    localStorage.setItem('appid', val)
    axios.get(`${Apiurl}dashboards/os/list_hosts/${val}`).then(response => response.data).then(result => {
      console.log(result.message)
      sethost(result.message)

      //console.log(result.message.length, count1, count2)
      //   props.userListcount(result.message.length, count1, count2)
    }, error => {
      console.log(error)
    })
  }

  const [services, setservices] = useState([])
  //const [time, settime] = useState([])
  const [info, setinfo] = useState([])
  const [uptime, setuptime] = useState('')
  const [cpu, setcpu] = useState([])
  const [mem, setmem] = useState([])
  const [swap, setswap] = useState([])
  const [disk, setdisk] = useState([])
  const [net, setnet] = useState([])
  const [read, setdiskread] = useState([])
  const [write, setdiskwrite] = useState([])
  const [services2, setservices2] = useState([])
  const [process, setprocess] = useState([])
  const [alerts, setalerts] = useState([])
  const [flag1, setflag1] = useState(false)
  const [flag2, setflag2] = useState(false)
  const [flag3, setflag3] = useState(false)
  const [flag4, setflag4] = useState(false)
  const [flag5, setflag5] = useState(false)


  const getServices = (val) => {
    axios.get(`${Apiurl}dashboards/os/list_services/${val}`).then(response => response.data).then(result => {
      console.log(result.message)
      setservices(result.message)

      //console.log(result.message.length, count1, count2)
      //   props.userListcount(result.message.length, count1, count2)
    }, error => {
      console.log(error)
    })
  }
  const getSysinfo = (val) => {
    axios.get(`${Apiurl}dashboards/os/${val}/sysinfo`).then(response => response.data).then(result => {
      console.log(result.message)
      setinfo(result.message)

      //console.log(result.message.length, count1, count2)
      //   props.userListcount(result.message.length, count1, count2)
    }, error => {
      console.log(error)
    })
  }
  const getUptime = (val) => {
    axios.get(`${Apiurl}dashboards/os/${val}/uptime`).then(response => response.data).then(result => {
      console.log(result.message)
      setuptime(result.message)

      //console.log(result.message.length, count1, count2)
      //   props.userListcount(result.message.length, count1, count2)
    }, error => {
      console.log(error)
    })
  }
  const getCpuUsage = (val, time) => {
    axios.get(`${Apiurl}dashboards/os/${val}/cpuusage/${time}`).then(response => response.data).then(result => {
      console.log(result.message)
      if (result.type === 'failure') {
        setflag1(false)
        // setcpu([{ data: [0, 0], label: 'No Data Found', time: '0:00', x_axis: [0, 0] }])
       // setcpu([{ data: [0, 0], label: 'No Data Found', time: ['0:00', '0:00'], x_axis: [0, 0] }], [{ Title: 'No Data Found', Type: 'PIE', data: [] }])
setcpu([])
      } else {
        setflag1(true)

        setcpu(result.message)

      }
      //console.log(result.message.length, count1, count2)
      //   props.userListcount(result.message.length, count1, count2)
    }, error => {
      console.log(error)
    })
  }
  const getMemUsage = (val, time) => {
    axios.get(`${Apiurl}dashboards/os/${val}/memusage/${time}`).then(response => response.data).then(result => {
      console.log(result.message)
      if (result.type === 'failure') {
        setflag2(false)

       // setmem([{ data: [0, 0], label: 'No Data Found', time: ['0:00', '0:00'], x_axis: [0, 0] }], [{ Title: 'No Data Found', Type: 'PIE', data: [] }])
        setmem([])

      } else {
        setflag2(true)

        setmem(result.message)

      }
      //console.log(result.message.length, count1, count2)
      //   props.userListcount(result.message.length, count1, count2)
    }, error => {
      console.log(error)
    })
  }
  const getswapUsage = (val, time) => {
    axios.get(`${Apiurl}dashboards/os/${val}/swapusage/${time}`).then(response => response.data).then(result => {
      console.log(result.message)
      setswap(result.message)

      //console.log(result.message.length, count1, count2)
      //   props.userListcount(result.message.length, count1, count2)
    }, error => {
      console.log(error)
    })
  }
  const getdiskread = (val, time) => {
    axios.get(`${Apiurl}dashboards/os/${val}/diskread/${time}`).then(response => response.data).then(result => {
      console.log(result.message)
     // setdiskread(result.message)
      if (result.type === 'failure') {
        setflag4(false)

       // setmem([{ data: [0, 0], label: 'No Data Found', time: ['0:00', '0:00'], x_axis: [0, 0] }], [{ Title: 'No Data Found', Type: 'PIE', data: [] }])
       setdiskread([])

      } else {
        setflag4(true)

        setdiskread(result.message)

      }
      //console.log(result.message.length, count1, count2)
      //   props.userListcount(result.message.length, count1, count2)
    }, error => {
      console.log(error)
    })
  }
  const getdiskwrite = (val, time) => {
    axios.get(`${Apiurl}dashboards/os/${val}/diskwrite/${time}`).then(response => response.data).then(result => {
      console.log(result.message)
     // setdisk(result.message)
      if (result.type === 'failure') {
        setflag5(false)

       // setmem([{ data: [0, 0], label: 'No Data Found', time: ['0:00', '0:00'], x_axis: [0, 0] }], [{ Title: 'No Data Found', Type: 'PIE', data: [] }])
       setdiskwrite([])

      } else {
        setflag5(true)

        setdiskwrite(result.message)

      }
      //console.log(result.message.length, count1, count2)
      //   props.userListcount(result.message.length, count1, count2)
    }, error => {
      console.log(error)
    })
  }
  const getDiskUsage = (val, time) => {
    axios.get(`${Apiurl}dashboards/os/${val}/diskusage/${time}`).then(response => response.data).then(result => {
      console.log(result.message)
     // setdisk(result.message)
      if (result.type === 'failure') {
        setflag3(false)

       // setmem([{ data: [0, 0], label: 'No Data Found', time: ['0:00', '0:00'], x_axis: [0, 0] }], [{ Title: 'No Data Found', Type: 'PIE', data: [] }])
       setdisk([])

      } else {
        setflag3(true)

        setdisk(result.message)

      }
      //console.log(result.message.length, count1, count2)
      //   props.userListcount(result.message.length, count1, count2)
    }, error => {
      console.log(error)
    })
  }
  const getService = (val, time) => {
    axios.get(`${Apiurl}dashboards/os/${val}/servicestatus`).then(response => response.data).then(result => {
      console.log(result.message)
      setservices2(result.message)    
      //console.log(result.message.length, count1, count2)
      //   props.userListcount(result.message.length, count1, count2)
    }, error => {
      console.log(error)
    })
  }
  const getProcess = (val, time) => {
    axios.get(`${Apiurl}dashboards/os/${val}/processstatus`).then(response => response.data).then(result => {
      console.log(result.message)
      setprocess(result.message)    
      //console.log(result.message.length, count1, count2)
      //   props.userListcount(result.message.length, count1, count2)
    }, error => {
      console.log(error)
    })
  }

  const getAlerts = (val, time) => {
    axios.get(`${Apiurl}dashboards/os/${val}/serveralerts`).then(response => response.data).then(result => {
      console.log(result.message)
      setalerts(result.message)    
      //console.log(result.message.length, count1, count2)
      //   props.userListcount(result.message.length, count1, count2)
    }, error => {
      console.log(error)
    })
  }

  const onHostchange = (val) => {
    localStorage.setItem('hostval', val)
    sethostval(val)
    sethostid(val)
    getServices(val)
    getSysinfo(val)
    getUptime(val)
    getCpuUsage(val, mins)
    getMemUsage(val, mins)
    getswapUsage(val, mins)
    getdiskread(val, mins)
    getdiskwrite(val, mins)
    getDiskUsage(val, mins)
    //getdiskUsage(val, mins)
    getService(val, mins)
    getProcess(val, mins)
    getAlerts(val, mins)
 
  }
  const onHostchange2 = (val, time) => {
    //localStorage.setItem('hostval', val)

    getServices(val)
    getSysinfo(val)
    getUptime(val)
    getCpuUsage(val, time)
    getMemUsage(val, time)
    getswapUsage(val, time)
    getDiskUsage(val, time)
    getdiskread(val, time)
    getdiskwrite(val, time)
  //  getdiskUsage(val, time)
  getService(val, time)
  getProcess(val, time)
  getAlerts(val, time)
   
  }
  const timeChange = (val) => {
    localStorage.setItem('mins', val)
    setmins(val)
    onHostchange2(hostval, val)
  }
  useEffect(async () => {
    await getTime()
    await setmins(await localStorage.getItem('mins'))
    await setappsid(await localStorage.getItem('appid'))
    await sethostid(await localStorage.getItem('hostval'))
    await sethostval(await localStorage.getItem('hostval'))
    getAllapps()
    onAppchange(localStorage.getItem('appid'))
    //onHostchange(localStorage.getItem('hostval'))
    onHostchange2(localStorage.getItem('hostval'), localStorage.getItem('mins'))
    //  getAllRoles()
  }, [])
  return (
    <div id='dashboard-analytics'>
      <Card>
        <ListGroup>
          <ListGroupItem>
            <Row className='match-height'>
              <Col lg='3' sm='12'>
                <FormGroup>
                  <Label for='userrole'>Select Application</Label>
                  <Input type='select' id='userrole' name='userrole' value={localStorage.getItem('appid')} onChange={(e) => onAppchange(e.target.value)} innerRef={register({ required: true, validate: value => value !== '' })} >
                    <option value=''></option>

                    {apps.map(i => <option value={i.appid}>{i.appname}</option>
                    )}

                    {/* <option value='subscriber'>App1</option>
            <option value='editor'>App2</option>
            <option value='maintainer'>App3</option>
            <option value='author'>App4</option> */}
                    {/* <option value='Administrator'>Administrator</option> */}
                  </Input>
                </FormGroup>
              </Col>
              <Col lg='3' sm='12'>
                <FormGroup>
                  <Label for='hostval'>Select Host</Label>
                  <Input type='select' id='hostval' name='hostval' value={localStorage.getItem('hostval')} onChange={(e) => onHostchange(e.target.value)} innerRef={register({ required: true, validate: value => value !== '' })} >
                    <option value=''></option>

                    {host.map(i => <option value={i.hostid}>{i.display_name}</option>
                    )}

                    {/* <option value='Administrator'>Administrator</option> */}
                  </Input>
                </FormGroup>
              </Col>
              <Col lg='1' sm='12'>
                <Button.Ripple color='flat-success' className='btn-icon mt-2' outline>
                  <RefreshCcw size={18} />
                </Button.Ripple></Col>
              <Col lg='3' sm='12'>
                <FormGroup>
                  <Label for='userrole'>Select time</Label>
                  <Input type='select' id='userrole' name='userrole' value={localStorage.getItem('mins')} onChange={(e) => timeChange(e.target.value)} innerRef={register({ required: true, validate: value => value !== '' })} >
                    <option value=''></option>

                    {time.map(i => <option value={i[1]}>{i[0]}</option>
                    )}

                    {/* <option value='Administrator'>Administrator</option> */}
                  </Input>
                </FormGroup>
              </Col>
            </Row>
          </ListGroupItem>
        </ListGroup>
      </Card>

      <Row className='match-height'>
        <Col lg='3' sm='12'>
          <ProductOrders primary={context.colors.primary.main}
            warning={context.colors.warning.main}
            danger={context.colors.danger.main}
            sysinfo={info}
            time={uptime}
            mem={mem.length ? mem : []} // mem[1][0].Title : ''}
            cpu={cpu.length ? cpu : []} // mem[1][0].Title : ''}
          />
        </Col>
        <Col lg='6' sm='12'>
          {flag3 ?
            <Disk primary={'#DC143C'}
              warning={'#28c76f'}
              danger={context.colors.danger.main}
              name={'MEM Usage'}
              type={''}
              range={[60, 40]}
              units={'MEM Usage'}
              data={disk}
            /> : <></>}
        </Col>
        <Col lg='3' sm='12'>
          <Card>
            {/* <CardHeader className='align-items-end float-right justify-content- '>
              <CardTitle tag='h4'>{'Alerts'}</CardTitle>
            </CardHeader> */}
            <CardSubtitle tag='h6' className='d-flex justify-content-center align-items-center mt-1 '>Alerts</CardSubtitle>    
            {/* <CardSubtitle tag='h6'  className='ml-2'>in {props.type}</CardSubtitle> */}
            <CardBody className="" style={{}}>
              <ListGroup>
              {alerts.map((item) => 
                <ListGroupItem >
                  <Media className='align-items-center'>
                    <Avatar color="light-danger" icon={ item.state === "Green" ? <AlertTriangle size={10} /> : <AlertCircle size={10} />} />
                    <Media className='ml-50' body>
                      <p className='mb-0' style={{fontSize:12}}>{item.output}</p>
                      {/* <span>CEO of Infibeam</span> */}
                    </Media>
                  </Media>
                </ListGroupItem>
              )}
              
                {/* <ListGroupItem >
      Warning 2
      </ListGroupItem> <ListGroupItem >
      Warning 3
      </ListGroupItem> <ListGroupItem >
      Warning 4
      </ListGroupItem> */}
              </ListGroup>
            </CardBody>
          </Card>
        </Col>
      </Row>
      <Row className='match-height'>

      <Col lg='3' sm='12'>
          {flag1  ?
            <SessionByDevice primary={'#868282'}
              warning={'#EF97C6'}
              danger={context.colors.danger.main}
              warning={'#EF97C6'}
              danger={context.colors.danger.main}
              name={cpu.length ? cpu[1][0].Title : ''}
              type={''}
              range={cpu.length ? cpu[1][0].data : [0, 0]}
              units={cpu.length ? cpu[1][0].Title : ''}
              lineData={cpu.length ? cpu[0] : []}
            /> : null}

          {/* </Col>
        
          <Col lg='4' sm='12'> */}
          {/* <ChartjsLineChart 
         warningColorShade='#ffe80'
            lineChartDanger='#ff4961'
            lineChartPrimary='#666ee8'
            labelColor="#b4b7bd"
            tooltipShadow={"rgba(0, 0, 0, 0.25)"}
            gridLineColor="rgba(200, 200, 200, 0.2)" /> */}

        </Col>
        <Col lg='3' sm='12'>
          {flag2  ?
            <SessionByDevice primary={'#868282'}
              warning={'#EF97C6'}
              danger={context.colors.danger.main}
              warning={'#EF97C6'}
              danger={context.colors.danger.main}
              name={mem.length ? mem[1][0].Title : ''}
              type={''}
              range={mem.length ? mem[1][0].data : [0, 0]}
              units={mem.length ? mem[1][0].Title : ''}
              lineData={ mem.length  ? mem[0] : []}
            /> : null}


        </Col>
        {read.map(i =>
      <Col lg='3' sm='12'>
        <Card>
        <CardSubtitle tag='h6' className='d-flex justify-content-center align-items-center mt-1 '>Disk Read</CardSubtitle>

        {flag4 ?
       
        <ChartjsLineChart 
         warningColorShade='#ffe80'
            lineChartDanger='#ff4961'
            lineChartPrimary='#666ee8'
            labelColor="#b4b7bd"
            tooltipShadow={"rgba(0, 0, 0, 0.25)"}
            gridLineColor="rgba(200, 200, 200, 0.2)"
            lineData={i} />
        
            : null
          }
            </Card>
             </Col>
        )}
             {write.map(i =>
        <Col lg='3' sm='12'>
        <Card>
        <CardSubtitle tag='h6' className='d-flex justify-content-center align-items-center mt-1 '>Disk Write</CardSubtitle>
          {flag5 ?
         
        <ChartjsLineChart 
         warningColorShade='#ffe80'
            lineChartDanger='#ff4961'
            lineChartPrimary='#666ee8'
            labelColor="#b4b7bd"
            tooltipShadow={"rgba(0, 0, 0, 0.25)"}
            gridLineColor="rgba(200, 200, 200, 0.2)"
            lineData={i} />
          
            : null
          }
            </Card>
        </Col>
             )}
              <Col lg='3' sm='12'>
        <Card>
 
      <CardSubtitle tag='h6' className='d-flex justify-content-center align-items-center mt-1 '>Process</CardSubtitle>
       {/* <CardSubtitle tag='h6'  className='ml-2'>in {props.type}</CardSubtitle> */}
      <CardBody>
        <Row>
          <Col lg='12' sm='12' >
            {process.map((item) => <div className={item.status === 'Green' ? 'p- bg-success mye2 rounded ' : 'bg-danger mye2 rounded' } style={{marginTop:'-2px', padding:'4px 7px 7px 7px'}}>
      {/* <CardTitle tag='h4'className='ml-10 mt-2 d-flex align-items-center justify-content-center' style={{color:'white', fontWeight:600}}>Service : {'item'}</CardTitle>      */}
      <CardSubtitle tag='h6'  className='ml-10 mtw-1 d-flex align-items-center justify-content-center' style={{color:'white', marginTop:'5px', fontSize:12}}>{item.Process_Name}</CardSubtitle> 
         
        </div>
        
           )}
        </Col>
      
            </Row>
        {/* {renderChartInfo()} */}
        
         
      </CardBody>
    </Card>


        </Col>
        <Col lg='3' sm='12'>
        <Card>
  
      <CardSubtitle tag='h6' className='d-flex justify-content-center align-items-center mt-1 '>Services</CardSubtitle>

       {/* <CardSubtitle tag='h6'  className='ml-2'>in {props.type}</CardSubtitle> */}
      <CardBody>
        <Row>
          <Col lg='12' sm='12' >
            {services2.map((item) => <div className={item.status === 'Green' ? 'p- bg-success mye2 rounded ' : 'bg-danger mye2 rounded' } style={{marginTop:'-2px', padding:'4px 7px 7px 7px'}}>
      {/* <CardTitle tag='h4'className='ml-10 mt-2 d-flex align-items-center justify-content-center' style={{color:'white', fontWeight:600}}>Service : {'item'}</CardTitle>      */}
      <CardSubtitle tag='h6'  className='ml-10 mtw-1 d-flex align-items-center justify-content-center' style={{color:'white', marginTop:'5px', fontSize:12}}>{item.service_name}</CardSubtitle> 
         
        </div>
        
           )}
        </Col>
      
            </Row>
        {/* {renderChartInfo()} */}
        
         
      </CardBody>
    </Card>
        </Col>
        {/* <Col lg='4' sm='12'>
          <Info primary={context.colors.primary.main}
            warning={context.colors.warning.main}
            danger={context.colors.danger.main}
            time={uptime} />
        </Col> */}
      </Row>
      <Row className='match-height'>

            </Row>
      <Row className='match-height'>

           </Row>
      {/* <Row className='match-height'> 
  
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
      </Row> */}
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
