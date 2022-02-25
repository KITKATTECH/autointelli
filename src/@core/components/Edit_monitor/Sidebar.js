// ** React Import
import { useState, useEffect } from 'react'

// ** Custom Components
import Sidebar from '@components/sidebar'

// ** Utils
import { isObjEmpty } from '@utils'

// ** Third Party Components
import classnames from 'classnames'
import { useForm } from 'react-hook-form'
import { Button, FormGroup, Label, FormText, Form, Input } from 'reactstrap'
import InputPasswordToggle from '@components/input-password-toggle'

// ** Store & Actions
//import { addUser } from ' store/action'
import { useDispatch } from 'react-redux'
import axios from 'axios'
import Apiurl from '../../../configs/RootAPI_url'
import { data } from '../Latest_alerts/data'
const SidebarNewUsers = ({ open, toggleSidebar, isEdit, hostid }) => {
  // ** States
  const [role, setRole] = useState('subscriber')
  const [roleid, setRoleid] = useState('')
  const [plan, setPlan] = useState('basic')
  const [roles, setroles] = useState([])

  // ** Store Vars
  const dispatch = useDispatch()

  // ** Vars
  const { register, errors, handleSubmit } = useForm()

  // ** Function to handle form submit
  const getAllRoles = () => {
    axios.get(`${Apiurl}configuration/configwizards/servermonitor/listmetrics`).then(response => response.data).then(result => {
      console.log(result.message)
      setroles(result.message)
    }, error => {
      console.log(error)
    })
  }
  const [name, setname] = useState('')
  const [address, setaddress] = useState('')
  const [port, setport] = useState('')
  const [token, settoken] = useState('')
  const [check_interval, setcheckinterval] = useState('')
  const [retry_interval, setretryinterval] = useState('')
  const [critical, setcritical] = useState('')
  const [max_check_attempts, setmaxcheckattempts] = useState('')
  const [metricname, setmetricname] = useState('')
  const [warning, setwarning] = useState('')
  const getservicebyid = () => {
    console.log(isEdit)
    axios.get(`${Apiurl}configuration/configwizards/servermonitor/service/${isEdit}`).then(response => response.data).then(result => {
      console.log(result.message)
     // setroles(result.message)
     const stateval = result.message
     setname(stateval.value)
    //  setaddress(stateval.address)
    //  setport(stateval.port)
    //  settoken(stateval.token)
     setcheckinterval(stateval.check_interval)
     setretryinterval(stateval.retry_interval)
     setcritical(stateval.critical)
     setmaxcheckattempts(stateval.max_check_attempts)
     setwarning(stateval.warning)
    }, error => {
      console.log(error)
    })
  }
  useEffect(() => {    
    getAllRoles()
    if (isEdit !== '') {
      getservicebyid()
    }
  }, [])
  useEffect(() => {    
    getAllRoles()
    if (isEdit !== '') {
      getservicebyid()
    }
  }, [isEdit])
  const onSubmit = value => {
    console.log(value)
    console.log(errors)
    if (isObjEmpty(errors)) {
      const us = JSON.parse(localStorage.getItem('userData'))
      const metric = roles.find(i => i.id === value.metric)
      console.log(metric)
      console.log(value)
        const parms =
        {
          hostid,
          check_interval: value.check_interval,
          retry_interval: value.retry_interval,
          max_check_attempts: value.max_check_attempts,
          critical: value.critical,
          warning: value.warning,
          metric: metric.metric,
         // name: value.name,
          username: us.fullusername,
          metricid: value.metric,
          value:data.name
      }
      if (isEdit === '') {
        console.log('add')
        console.log(parms)
                axios.post(`${Apiurl}configuration/configwizards/servermonitor/newservice`, parms).then(response => response.data).then(result => {
          console.log(result.message)
//setuserList(result.message)
          toggleSidebar()
        }, error => {
          console.log(error)
        })
      } else {
        console.log('edit')
        axios.put(`${Apiurl}configuration/configwizards/servermonitor/updateservice/${isEdit}`, parms).then(response => response.data).then(result => {
          console.log(result.message)
//setuserList(result.message)
          toggleSidebar()
        }, error => {
          console.log(error)
        })
      }

//       const data =
//       {
//       displayname: value.fullname,
//       username: value.username,
//       emailid: value.email,
//       password: value.password,
//       role: roleid
//       }
// console.log(data)
     
//         axios.post(`${Apiurl}users/`, data).then(response => response.data).then(result => {
//           console.log(result.message)
// //setuserList(result.message)
//           toggleSidebar()
//         }, error => {
//           console.log(error)
//         })
      
      // var data=
      //   {
      //     "displayname": "Aravindh KS",
      //     "username": "Aravindh",
      //     "emailid": "ksaravindh1@gmail.com",
      //     "password": "@ut0!ntell!@123",
      //     "role": "Administrator"
      // }

      // dispatch(
      //   // addUser({
      //   //   fullName: values['full-name'],
      //   //   company: values.company,
      //   //   role,
      //   //   username: values.username,
      //   //   country: values.country,
      //   //   contact: values.contact,
      //   //   email: values.email,
      //   //   currentPlan: plan,
      //   //   status: 'active',
      //   //   avatar: ''
      //   // })
      // )
    }
    window.location.reload()
  }

  return (
    <Sidebar
      size='lg'
      open={open}
      title= {isEdit !== ''  ? 'Edit Server' : 'New Server'}
      headerClassName='mb-1'
      contentClassName='pt-0'
      toggleSidebar={toggleSidebar}
    >
      <Form onSubmit={handleSubmit(onSubmit)}>
        {isEdit === '' ?
      <FormGroup>
          <Label for='metric'>Metric</Label>
          <Input type='select' id='metric' name='metric' innerRef={register({ required: true, validate: value => value !== '' })} value={roleid} onChange={e =>  setRoleid(e.target.value) }>
          <option value=''>----Select---- </option>
           
            {roles.map(i => <option value={i.id} value2={i.metric}>{i.metric}</option>
            )}
            {/* <option value='subscriber'>Subscriber</option>
            <option value='editor'>Editor</option>
            <option value='maintainer'>Maintainer</option>
            <option value='author'>Author</option> */}
            {/* <option value='Administrator'>Administrator</option> */}
          </Input>
        </FormGroup>
        : <></>}
        <FormGroup>
          <Label for='name'>
            Value <span className='text-danger'>*</span>
          </Label>
          <Input
            name='name'
            id='name'
            value={name}
            onChange={(e) => setname(e.target.value)}
            placeholder='John Doe'
            innerRef={register({ required: true })}
            className={classnames({ 'is-invalid': errors['name'] })}
          />
        </FormGroup>
        <FormGroup>
          <Label for='check_interval'>
            Check Interval <span className='text-danger'>*</span>
          </Label>
          <Input
          type="number"
            name='check_interval'
            id='check_interval'
            placeholder=''
            value={check_interval}
            onChange={(e) => setcheckinterval(e.target.value)}
            innerRef={register({ required: true })}
            className={classnames({ 'is-invalid': errors['check_interval'] })}
          />
        </FormGroup>
        <FormGroup>
          <Label for='retry_interval'>
            Retry Interval <span className='text-danger'>*</span>
          </Label>
          <Input
          type="number"
            name='retry_interval'
            id='retry_interval'
            value={retry_interval}
            onChange={(e) => setretryinterval(e.target.value)}
            placeholder=''
            innerRef={register({ required: true })}
            className={classnames({ 'is-invalid': errors['retry_interval'] })}
          />
        </FormGroup>
        <FormGroup>
          <Label for='max_check_attempts'>
            Max Check Attempts <span className='text-danger'>*</span>
          </Label>
          <Input
          type="number"
            name='max_check_attempts'
            id='max_check_attempts'
            placeholder=''
            value={max_check_attempts}
            onChange={(e) => setmaxcheckattempts(e.target.value)}
            innerRef={register({ required: true })}
            className={classnames({ 'is-invalid': errors['max_check_attempts'] })}
          />
        </FormGroup>
        <FormGroup>
          <Label for='critical'>
          Critical <span className='text-danger'>*</span>
          </Label>
          <Input
          type="number"
            name='critical'
            id='critical'
            placeholder=''
            value={critical}
            onChange={(e) => setcritical(e.target.value)}
            innerRef={register({ required: true })}
            className={classnames({ 'is-invalid': errors['critical'] })}
          />
        </FormGroup>
        <FormGroup>
          <Label for='warning'>
          Warning <span className='text-danger'>*</span>
          </Label>
          <Input
          type="number"
            name='warning'
            id='warning'
            placeholder='' value={warning}
            onChange={(e) => setwarning(e.target.value)}
            innerRef={register({ required: true })}
            className={classnames({ 'is-invalid': errors['warning'] })}
          />
        </FormGroup>
       
        <Button type='submit' className='mr-1' color='primary'>
          Submit
        </Button>
        {/* <Button type='reset' color='secondary' outline onClick={toggleSidebar}>
          Cancel
        </Button> */}
      </Form>
    </Sidebar>
  )
}

export default SidebarNewUsers
