import * as yup from 'yup'
import { useForm, Controller } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import { Home, Star, Check } from 'react-feather'
import { Row, Col, Card, CardHeader, CardTitle, CardBody, Button, Form, FormGroup, Label, Input, FormText, FormFeedback, UncontrolledButtonDropdown, DropdownMenu, DropdownToggle, DropdownItem } from 'reactstrap'
import { selectThemeColors } from '@utils'
import InputPasswordToggle from '@components/input-password-toggle'
//import { selectThemeColors } from '@utils'
import NumberInput from '@components/number-input'
//import { useState, useEffect } from 'react'
import Select, { components } from 'react-select'
import axios from 'axios'
import Apiurl from '../../../configs/RootAPI_url'
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'
import { Fragment, useState, useEffect } from 'react'
const ValidationOnChange = () => {
  const SignupSchema = yup.object().shape({
    port: yup.string().email().required(),
    name: yup.string().min(3).required(),
    smtpip: yup.string().min(3).required(),
    token: yup.string().min(6).required(),
    ReactSelect: null
  })

  const MySwal = withReactContent(Swal)
  const { register, errors, handleSubmit } = useForm()
  //const { handleSubmit, control } = useForm({ defaultValues })
  //const { handleSubmit, control } = useForm({ defaultValues })
  const [address, setaddress] = useState('')
  const [port, setport] = useState('')
  const [token, settoken] = useState('')
  const [verify, setverify] = useState(false)
  const [toggle, settoggle] = useState(false)
  const [apps, setapps] = useState([])
  const [users, setusers] = useState([])
  const [type, settype] = useState([])
  const [sys, setsys] = useState([])
  const [appid, setappid] = useState([])
  const [username, setusername] = useState('')
  const [typeid, settypeid] = useState('')
  const [sysid, setsysid] = useState('')
  const [ci, setci] = useState('')
  const [ri, setri] = useState('')
  const [ca, setca] = useState('')


  const onSubmit = data => {
    console.log(data)
    const us = JSON.parse(localStorage.getItem('userData'))
    const da = {
      username: us.fullusername,
      address,
      port: parseInt(port),
      token,
      display_name: data.name,
      applicationid: appid,
      ownerid:data.owner,
      typeid: parseInt(typeid),
      sysid: data.system,
      check_interval: parseInt(ci),
      retry_interval: parseInt(ri),
      max_check_attempts: parseInt(ca),
      notificationemail: data.email
    }
    axios.post(`${Apiurl}configuration/configwizards/servermonitor`, da).then(response => response.data).then(result => {
  //  axios.post(`http://192.168.1.200:5000/configuration/configwizards/servermonitor`, da).then(response => response.data).then(result => {
      console.log(result.message)
      //setuserList(result.message)
      //  toggleSidebar()
    }, error => {
      console.log(error)
    })
  }


  const getAllApps = () => {
    axios.get(`${Apiurl}systemconfig/appmanagement/application`).then(response => response.data).then(result => {
      console.log(result.message)
      const d = []
      result.message.forEach(e => {
        d.push({ value: e.appid, label: e.appname })

      })
      // for (let i = 0; i < result.message.length; i++) {
      //   d.push({ value: i.appid, label: i.appname })
      // }
      console.log(d)
      setapps(d)

      //console.log(result.message.length, count1, count2)
      //   props.userListcount(result.message.length, count1, count2)
    }, error => {
      console.log(error)
    })
  }
  const getAllUsers = () => {
    axios.get(`${Apiurl}users/`).then(response => response.data).then(result => {
      console.log(result.message)
      setusers(result.message)
    }, error => {
      console.log(error)
    })
  }

  const getAllTypes = () => {
    axios.get(`${Apiurl}configuration/configwizards/list_types`).then(response => response.data).then(result => {
      console.log(result.message)
      settype(result.message)
    }, error => {
      console.log(error)
    })
  }

  const getAllSystems = (val) => {
    settypeid(val)
    console.log(val)
    axios.get(`${Apiurl}configuration/configwizards/list_systems/${val}`).then(response => response.data).then(result => {
      console.log(result.message)
      setsys(result.message)
    }, error => {
      console.log(error)
    })
  }

  useEffect(() => {
    getAllApps()
    getAllUsers()
    getAllTypes()
    // getAllApps()
    //  getAllRoles()
  }, [])


  const verifyToken = () => {
    //console.log(!verify)
    // setverify(!verify)
    // console.log(verify)
    if (address !== '' && port !== '' && token !== '') {
      const data =
      {
        ip: address,
        port,
        token
      }
      console.log(data)

      axios.post(`${Apiurl}configuration/configwizards/checkConnectivity`, data).then(response => response.data).then(result => {
        console.log(result.message)
        //setuserList(result.message)

        if (result.type === "success") {
          settoggle(true)
          MySwal.fire({
            icon: 'success',
            title: 'Verified',
            text: '',
            customClass: {
              confirmButton: 'btn btn-success'
            }
          })
        } else {

          MySwal.fire({
            title: 'Failure',
            text: 'Try Again',
            icon: 'error',
            customClass: {
              confirmButton: 'btn btn-danger'
            }
          })
        }
      })

    } else {

      MySwal.fire({
        title: 'Please Enter all fields',
        text: 'Try Again',
        icon: 'error',
        customClass: {
          confirmButton: 'btn btn-danger'
        }
      })
    }

  }
  const colorOptions = [
    { value: '2', label: '192.168.1.0' },
    { value: '3', label: '192.168.1.2' },
    { value: '4', label: '192.168.2.1' },
    { value: '5', label: '192.168.1.100' },
    { value: '7', label: '192.168.111.1' }
  ]
  const colorOptions2 = [
    { value: 'ocean', label: 'Ocean', color: '#00B8D9', isFixed: true },
    { value: 'blue', label: 'Blue', color: '#0052CC', isFixed: true },
    { value: 'purple', label: 'Purple', color: '#5243AA', isFixed: true },
    { value: 'red', label: 'Red', color: '#FF5630', isFixed: false },
    { value: 'orange', label: 'Orange', color: '#FF8B00', isFixed: false },
    { value: 'yellow', label: 'Yellow', color: '#FFC400', isFixed: false }
  ]
  const defaultValues = {
    phoneNumber: '',
    ReactSelect: null,
    reactFlatpickr: null
  }
  const handleChange = (selectedOption) => {
    setappid([])

    console.log(selectedOption)
    // selectedOption.forEach((e) =>{

    // })
    const app = []
    selectedOption.forEach(e => {
      app.push(e.value)

    })
    setappid(app)

  }
  return (
    <Card className="nc">
      <CardHeader>
        <CardTitle tag='h5'>Connect to Agent</CardTitle>
      </CardHeader>
      <CardBody>


        {/* <FormGroup>
          <Label for='select-basic'>Communication Type</Label>
          <Input type='select' name='select' id='select-basic'  innerRef={register({ required: true })}>
            <option></option>
            <option>Type 1</option>
            <option>Type 2</option>
            <option>Type 3</option>
          
          </Input>
        </FormGroup> */}

        <FormGroup className='w-50'>
          <Label for='address'>Address :</Label>
          <Input
            id='address'
            name='address'
            value={address}
            onChange={(e) => setaddress(e.target.value)}
            // innerRef={register({ required: true })}
            invalid={errors.address && true}
            placeholder='192.168.1.1'
          />
          <FormText className='text-muted'>The IP address or FQDNS name used to connect agent</FormText>

          {errors && errors.address && <FormFeedback>{errors.address.message}</FormFeedback>}
        </FormGroup>
        <FormGroup className='w-50'>
          <Label for='port'>Port</Label>
          <Input
            id='port'
            name='port'
            value={port}
            onChange={(e) => setport(e.target.value)}
            // innerRef={register({ required: true })}
            // invalid={errors.port && true}
            placeholder='8080'
          />
          <FormText className='text-muted'>Port used to connect agent. Defaults ports to 8080</FormText>

          {errors && errors.port && <FormFeedback>{errors.port.message}</FormFeedback>}
        </FormGroup>
        <FormGroup className='w-50'>
          <Label for='token'>Token</Label>
          <InputPasswordToggle
            // value={token}
            id='token'
            name='token'
            className='input-group-merge'
            value={token}
            onChange={(e) => settoken(e.target.value)}
            placeholder='...'
          // className={classnames({ 'is-invalid': errors['token'] })}
          //  innerRef={register({ required: true, validate: value => value !== '' })}
          />
          <FormText className='text-muted'>Authentication token used to connect to agent</FormText>

          {/* <Input
              id='token'
              name='token'
              innerRef={register({ required: true })}
              invalid={errors.token && true}
              placeholder='...'
            /> */}
          {errors && errors.token && <FormFeedback>{errors.token.message}</FormFeedback>}
        </FormGroup>
        {/* <FormGroup check inline>
            <Input type='checkbox' defaultChecked={verify} onChange={() => verifyToken()} id='basic-cb-checked' className='custom-control-Primary my-2' />
            <Label for='basic-cb-checked' check>
              Verify
            </Label>
          </FormGroup> */}
        <Button.Ripple color='success' onClick={() => verifyToken()}>
          <Check size={14} />
          <span className='align-middle ml-1 ms-25'>Verify</span>
        </Button.Ripple>

        <Form onSubmit={handleSubmit(onSubmit)}>
          {toggle === true ?
            <>
              <FormGroup className='w-50'>
                <Label for='name'>Name</Label>
                <Input
                  id='name'
                  name='name'
                  innerRef={register({ required: true })}
                  invalid={errors.name && true}
                  placeholder='Bruce'
                />
                <FormText className='text-muted'>Enter the name of the host</FormText>

                {errors && errors.name && <FormFeedback>{errors.name.message}</FormFeedback>}
              </FormGroup>
              <FormGroup className='w-50'>
                <Label for='select-basic'>Application</Label>
                <Select
                  isClearable={false}
                  theme={selectThemeColors}
                  //defaultValue={[colorOptions]}
                  onChange={handleChange}
                  isMulti
                  name='appid'
                  id='appid'
                  // innerRef={register({ required: true })}
                  options={apps}
                  className='react-select'
                  classNamePrefix='select'
                />
                <FormText className='text-muted'>Select the application in which the host should  belong to</FormText>

              </FormGroup>
              <FormGroup className='w-50'>
                <Label for='email'>Notification Email</Label>
                <Input
                  id='email'
                  type="textarea"
                  rows=''
                  name='email'
                  innerRef={register({ required: true })}
                  invalid={errors.name && true}
                  placeholder='admin@mail.com'
                />
                <FormText className='text-muted'>Enter the comma seperated list of valid email ids to send alert notifications</FormText>

                {errors && errors.email && <FormFeedback>{errors.email.message}</FormFeedback>}
              </FormGroup>
              <FormGroup className='w-50'>
                <Label for='select-basic'>Owner</Label>
                <Input type='select' name='owner' id='select-basic' innerRef={register({ required: true })}>
                  <option value=''>Select Owner</option>

                  {users.map(i => <option value={i.userid}>{i.username}</option>
                  )}

                </Input>
                <FormText className='text-muted'>Select the owner for the host</FormText>

              </FormGroup>
              <FormGroup className='w-50'>
                <Label for='select-basic'>Type</Label>
                <Input type='select' name='type' id='select-basic' onChange={(e) => getAllSystems(e.target.value)} innerRef={register({ required: true })}>
                  <option value=''>Select Type</option>

                  {type.map(i => <option value={i.typeid}>{i.type}</option>
                  )}

                </Input>

              </FormGroup>
              <FormGroup className='w-50'>
                <Label for='select-basic'>System</Label>
                <Input type='select' name='system' id='select-basic' innerRef={register({ required: true })}>
                  <option value=''>Select System</option>

                  {sys.map(i => <option value={i.sysid}>{i.system}</option>
                  )}

                </Input>

              </FormGroup>
              <FormGroup>
                <p for='ci'>Under normal circumstances</p>
                <Label>Moniter the host and service(s) for ever  <input type="text" id='ci'
                  name='ci'
                  size='sm'
                  style={{ margin: '0 2px 0 2px', width: '30px' }}
                  innerRef={register({ required: true })}
                  invalid={errors.name && true}
                  onChange={(e) => setci(e.target.value)}
                  placeholder='5' /> Mins</Label>
              </FormGroup>
              <FormGroup>
                <p for='ri'>When a potential problem is first detected</p>
                <Label>Re-check the host and service(s) for every <input type="text" id='ri'
                  name='ri'
                  style={{ margin: '0 2px 0 2px', width: '30px' }}
                  onChange={(e) => setri(e.target.value)}
                  size='sm'
                  innerRef={register({ required: true })}
                  invalid={errors.name && true}
                  onChange={(e) => setri(e.target.value)}

                  placeholder='5' />
                  Minutes up to
                  <input type="text" id='ca'
                    style={{ margin: '0 2px 0 2px', width: '30px' }}

                    name='ca'
                    size='sm'
                    innerRef={register({ required: true })}
                    onChange={(e) => setca(e.target.value)}

                    invalid={errors.name && true}
                    placeholder='5' />
                  times before sending a notification</Label>
              </FormGroup>
            </> : <p></p>}

          <FormGroup className='d-flex mb-0'>
            <Button.Ripple className='mr-1' color='primary' type='submit'>
              Submit
            </Button.Ripple>
            <Button.Ripple outline color='secondary' type='reset'>
              Reset
            </Button.Ripple>
          </FormGroup>
        </Form>
      </CardBody>
    </Card>
  )
}

export default ValidationOnChange
