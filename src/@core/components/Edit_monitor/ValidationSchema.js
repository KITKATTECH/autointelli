import * as yup from 'yup'
// ** React Imports
import {  Fragment, useState, useEffect } from 'react'
import { useForm, Controller } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import { Row, Col, Card, CardHeader, CardTitle, CardBody, Button, Form, FormGroup, Label, Input, FormFeedback, UncontrolledButtonDropdown, DropdownMenu, DropdownToggle, DropdownItem} from 'reactstrap'
import { selectThemeColors } from '@utils'
import Select from 'react-select'
import DataTableAdvSearch from './TableAdvSearch'
import { MoreVertical, Edit, FileText, Archive, Trash, Edit2, Trash2 } from 'react-feather'
import Qs from 'query-string'
import Sidebar from './Sidebar'
import InputPasswordToggle from '@components/input-password-toggle'

import axios from 'axios'
import Apiurl from '../../../configs/RootAPI_url'
const ValidationOnChange = (props) => {
  const SignupSchema = yup.object().shape({
    smtpport: yup.string().email().required(),
    username: yup.string().min(3).required(),
    smtpip: yup.string().min(3).required(),
    password: yup.string().min(6).required(),
    ReactSelect: null
  })
  const [name, setname] = useState('')
  const [address, setaddress] = useState('')
  const [port, setport] = useState('')
  const [token, settoken] = useState('')
  const [check_interval, setcheckinterval] = useState('')
  const [retry_interval, setretryinterval] = useState('')
  const [max_check_attempts, setmaxcheckattempts] = useState('')
  const [notificationemail, setnotificationemail] = useState('')
  const [data, setdata] = useState([])
  const getserverbyId = async () => {
   // console.log(props.location.search)
    //const  queryVal = Qs.parse(props.location.search)
    //console.log(queryVal)
    if (props.data.id) {
    await  axios.get(`${Apiurl}configuration/configwizards/servermonitor/${props.data.id}`).then(response => response.data).then(result => {
        console.log(result.message)
        //settotalData(result.message)
        const stateval = result.message.Host
        setname(stateval.display_name)
        setaddress(stateval.address)
        setport(stateval.port)
        settoken(stateval.token)
        setcheckinterval(stateval.check_interval)
        setretryinterval(stateval.retry_interval)
        setmaxcheckattempts(stateval.max_check_attempts)
        setnotificationemail(stateval.notificationemail)
        setdata(result.message.services)
      }, error => {
        console.log(error)
      })
    }
  }

  // useEffect(() => {
  //   console.log(props)
  //   getserverbyId()
  //   //getAllUsers()
  // }, [])

  useEffect(() => {
    console.log(props)
    getserverbyId()

  //  getAllRoles()
  }, [])
  const { register, errors, handleSubmit } = useForm()
  //const { handleSubmit, control } = useForm({ defaultValues })
//const { handleSubmit, control } = useForm({ defaultValues })
  const onSubmit = data => {
    const us = JSON.parse(localStorage.getItem('userData'))
    console.log(data)
    const parms =
        {
         // hostid,
          check_interval: data.ci,
          retry_interval: data.ri,
          max_check_attempts: data.checkattempts,  
          port: data.port,
          username: us.fullusername,
          notificationemail: data.emails,
          token: data.token,
          service: []
      }
      console.log(parms)

     axios.put(`${Apiurl}configuration/configwizards/servermonitor/${props.data.id}`, parms).then(response => response.data).then(result => {
        console.log(result.message)
      
      }, error => {
        console.log(error)
      })
   // alert('j')
  }
  const [sidebarOpen, setSidebarOpen] = useState(false)

  const toggleSidebar = () => setSidebarOpen(!sidebarOpen)
  const colourOptions = [
  { value: '2', label: '192.168.1.0' },
  { value: '3', label: '192.168.1.2' },
  { value: '4', label: '192.168.2.1' },
  { value: '5', label: '192.168.1.100' },
  { value: '7', label: '192.168.111.1' }
]

const defaultValues = {
  phoneNumber: '',
  ReactSelect: null,
  reactFlatpickr: null
}
  return (
    <Card>
      <CardHeader>
        <CardTitle tag='h4'></CardTitle>
      </CardHeader>
      <CardBody>
        <Form onSubmit={handleSubmit(onSubmit)}>
        <Row className='match-height'> 
        {/* Stats With Icons Horizontal */}
        <Col lg='4' sm='6'>
        <FormGroup>
            <Label for='name'>Name</Label>
            <Input
            disabled
              id='name'
              name='name'
              value={name}
              innerRef={register({ required: true })}
              invalid={errors.name && true}
              placeholder='server Name'
            />
            {errors && errors.name && <FormFeedback>{errors.name.message}</FormFeedback>}
            
          </FormGroup> 
          
         
        </Col>
        <Col lg='4' sm='6'>
        <FormGroup>
            <Label for='address'>Address</Label>
            <Input
              id='address'
              name='address'
              value={address}
              disabled

              innerRef={register({ required: true })}
              invalid={errors.address && true}
              placeholder='192.168.1.1'
            />
            {errors && errors.address && <FormFeedback>{errors.address.message}</FormFeedback>}
          </FormGroup>
        </Col>
        <Col lg='4' sm='6'>
        <FormGroup>
            <Label for='port'>Port</Label>
            <Input
              id='port'
              name='port'
              value={port}
              innerRef={register({ required: true })}
onChange={(e) => setport(e.target.value)}

              invalid={errors.port && true}
              placeholder='8080'
            />
            {errors && errors.port && <FormFeedback>{errors.port.message}</FormFeedback>}
          </FormGroup>
        </Col>
        {/* <Col lg='3' sm='6'>
          <StatsHorizontal icon={<Monitor size={21} />} color='danger' stats={inactiveuserListCount}  statTitle='Disabled' />
        </Col> */}
        {/* Stats With Icons Horizontal */}
      </Row>
      <Row className='match-height'> 
        {/* Stats With Icons Horizontal */}
        <Col lg='4' sm='6'>
        <FormGroup>
          <Label for='token'>
          Token <span className='text-danger'>*</span>
          </Label>
          <InputPasswordToggle
            name='token'
            id='token'
            value={token}   
            placeholder='*******'
onChange={(e) => settoken(e.target.value)}

            innerRef={register({ required: true, validate: value => value !== '' })}
            invalid={errors.token && true}

           // className={classnames({ 'is-invalid': errors['token'] })}
          />
           {errors && errors.token && <FormFeedback>{errors.token.message}</FormFeedback>}
        </FormGroup>
        {/* <FormGroup>
            <Label for='token'>Token</Label>
            <Input
              id='token'
              name='token'
              value={token}              
              innerRef={register({ required: true })}
              invalid={errors.token && true}
              placeholder='server token'
            />
            {errors && errors.token && <FormFeedback>{errors.token.message}</FormFeedback>}
          </FormGroup> */}
        </Col>
        <Col lg='4' sm='6'>
        <FormGroup>
            <Label for='ci'>Check Interval</Label>
            <Input
              id='ci'
              name='ci'
              value={check_interval}
              onChange={(e) => setcheckinterval(e.target.value)}

              innerRef={register({ required: true })}
              invalid={errors.ci && true}
              placeholder='0'
            />
            {errors && errors.ci && <FormFeedback>{errors.ci.message}</FormFeedback>}
          </FormGroup>
        </Col>
        <Col lg='4' sm='6'>
        <FormGroup>
            <Label for='ri'>Retry Interval</Label>
            <Input
              id='ri'
              name='ri'
              value={retry_interval}
              onChange={(e) => setretryinterval(e.target.value)}

              innerRef={register({ required: true })}
              invalid={errors.ri && true}
              placeholder='0'
            />
            {errors && errors.ri && <FormFeedback>{errors.ri.message}</FormFeedback>}
          </FormGroup>
        </Col>
        {/* <Col lg='3' sm='6'>
          <StatsHorizontal icon={<Monitor size={21} />} color='danger' stats={inactiveuserListCount}  statTitle='Disabled' />
        </Col> */}
        {/* Stats With Icons Horizontal */}
      </Row>
      <Row className='match-height'> 
        {/* Stats With Icons Horizontal */}
        <Col lg='4' sm='6'>
        <FormGroup>
            <Label for='checkattempts'>Check Attempts</Label>
            <Input
              id='checkattempts'
              name='checkattempts'
              value={max_check_attempts}
              onChange={(e) => setmaxcheckattempts(e.target.value)}
              
              innerRef={register({ required: true })}
              invalid={errors.checkattempts && true}
              placeholder='0'
            />
            {errors && errors.checkattempts && <FormFeedback>{errors.checkattempts.message}</FormFeedback>}
          </FormGroup>
        </Col>
        <Col lg='4' sm='6'>
        <FormGroup>
            <Label for='emails'>Notification Email</Label>
            <Input
            type='textarea' rows='3'
              id='emails'
              name='emails'
              value={notificationemail}
              onChange={(e) => setnotificationemail(e.target.value)}

              innerRef={register({ required: true })}
              invalid={errors.emails && true}
              placeholder=''
            />
            {errors && errors.emails && <FormFeedback>{errors.emails.message}</FormFeedback>}
          </FormGroup>
        </Col>
        <Col lg='4' sm='6'>
        
      
        </Col>
        {/* <Col lg='3' sm='6'>
          <StatsHorizontal icon={<Monitor size={21} />} color='danger' stats={inactiveuserListCount}  statTitle='Disabled' />
        </Col> */}
        {/* Stats With Icons Horizontal */}
      </Row>
     

          {/* <FormGroup>
          <Label for='select-basic'>Communication Type</Label>
          <Input type='select' name='select' id='select-basic'  innerRef={register({ required: true })}>
            <option></option>
            <option>Type 1</option>
            <option>Type 2</option>
            <option>Type 3</option>
          
          </Input>
        </FormGroup>
          */}
      
          <FormGroup className='d-flex mb-0'>
            <Button.Ripple className='mr-1' color='primary' type='submit'>
              Submit
            </Button.Ripple>
            {/* <Button.Ripple outline color='secondary' type='reset'>
              Reset
            </Button.Ripple> */}
          </FormGroup>
        </Form>
        <Row className='match-height'>
        <Col xs='12'>
          <DataTableAdvSearch id={props.data.id}/>
        </Col>
      </Row>
      </CardBody>
    </Card>
  )
}

export default ValidationOnChange
