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
const SidebarNewUsers = ({ open, toggleSidebar, isEdit }) => {
  // ** States
  const [role, setRole] = useState('subscriber')
  const [roleid, setRoleid] = useState('')
  const [plan, setPlan] = useState('basic')
  const [roles, setroles] = useState([])
  const [auth, setauth] = useState(false)
  const [username, setusername] = useState('')
  const [pass, setpassword] = useState('')
  //const [pass, setpassword] = useState('')
  const [smtp_ip, setsmtp_ip] = useState('')
  const [smtp_port, setsmtp_port] = useState('')


  // ** Store Vars
  const dispatch = useDispatch()

  // ** Vars
  const { register, errors, handleSubmit } = useForm()

  // ** Function to handle form submit
  const getAllRoles = () => {
    axios.get(`${Apiurl}configuration/email/masterdata`).then(response => response.data).then(result => {
      console.log(result.message)
      setroles(result.message.communication_type)
    }, error => {
      console.log(error)
    })
  }
  useEffect(() => {
    getAllRoles()
    console.log(isEdit)
    if (isEdit) {
      setsmtp_ip(isEdit.smtp_ip)
      setsmtp_port(isEdit.smtp_port)
      setRoleid(isEdit.communication_type)
      setusername(isEdit.username)
      setpassword(isEdit.password)
    }
  }, [])
  const onSubmit = value => {
    console.log(value)
    console.log(errors)
    const us = JSON.parse(localStorage.getItem('userData'))
        if (isObjEmpty(errors)) {

          console.log(value)
      const data =
      {
        smtp_ip: value.smtpip,
        smtp_port: value.smtpport,
        authentication: auth === true ? "YES" : "NO",
        username: value.username === undefined ? '' : value.username,
        password: value.password === undefined ? '' : value.password,
        communication_type: value.type,
        logged_in_user: us.fullusername
      }
    
    console.log(data)
    
            axios.post(`${Apiurl}configuration/email`, data).then(response => response.data).then(result => {
              console.log(result.message)
    //setuserList(result.message)
              toggleSidebar()
             window.location.reload()
            }, error => {
              console.log(error)
            })
            toggleSidebar()
          }
    //       // var data=
    //       //   {
    //       //     "displayname": "Aravindh KS",
    //       //     "username": "Aravindh",
    //       //     "emailid": "ksaravindh1@gmail.com",
    //       //     "password": "@ut0!ntell!@123",
    //       //     "role": "Administrator"
    //       // }

    //       // dispatch(
    //       //   // addUser({
    //       //   //   fullName: values['full-name'],
    //       //   //   company: values.company,
    //       //   //   role,
    //       //   //   username: values.username,
    //       //   //   country: values.country,
    //       //   //   contact: values.contact,
    //       //   //   email: values.email,
    //       //   //   currentPlan: plan,
    //       //   //   status: 'active',
    //       //   //   avatar: ''
    //       //   // })
    //       // )
    //     }
  }

  return (
    <Sidebar
      size='lg'
      open={open}
      title= {isEdit !== ''  ? 'Edit App' : 'Add App'}
      headerClassName='mb-1'
      contentClassName='pt-0'
      toggleSidebar={toggleSidebar}
    >
      <Form onSubmit={handleSubmit(onSubmit)}>

        <FormGroup>
          <Label for='select-basic'>Communication Type</Label>
          <Input type='select' id='type' name='type' innerRef={register({ required: true, validate: value => value !== '' })} value={roleid} onChange={e => setRoleid(e.target.value)}>
            <option value=''>Select Communication Type</option>

            {roles.map(i => <option value={i}>{i}</option>
            )}
            {/* <option value='subscriber'>Subscriber</option>
            <option value='editor'>Editor</option>
            <option value='maintainer'>Maintainer</option>
            <option value='author'>Author</option> */}
            {/* <option value='Administrator'>Administrator</option> */}
          </Input>
        </FormGroup>

        <FormGroup>
          <Label for='smtpip'>SMTP IP</Label>
          <Input
            id='smtpip'
            name='smtpip'
            value={smtp_ip}
            onChange={ (e) => setsmtp_ip(e.target.value)}
            innerRef={register({ required: true })}
            invalid={errors.smtpip && true}
            placeholder='192.168.1.1'
          />
          {errors && errors.smtpip && <FormFeedback>{errors.smtpip.message}</FormFeedback>}
        </FormGroup>
        <FormGroup>
          <Label for='smtpport'>SMTP Port</Label>
          <Input
            id='smtpport'
            name='smtpport'
            value={smtp_port}
            onChange={ (e) => setsmtp_port(e.target.value)}
            innerRef={register({ required: true })}
            invalid={errors.smtpport && true}
            placeholder='8080'
          />
          {errors && errors.smtpport && <FormFeedback>{errors.smtpport.message}</FormFeedback>}
        </FormGroup>

        <FormGroup check inline>
          <Input type='checkbox' defaultChecked ={auth}  id='basic-cb-checked' onChange={() => setauth(!auth)} className='custom-control-Primary my-2' />
          <Label for='basic-cb-checked' check>
            Does your Server needs Authentication?
          </Label>
        </FormGroup>
        {auth === true ?
          <>
            <FormGroup>
              <Label for='username'>User Name</Label>
              <Input
                id='username'
                name='username'
                value={username}
            onChange={ (e) => setusername(e.target.value)}

                innerRef={register({ required: true })}
                invalid={errors.username && true}
                placeholder='Bruce'
              />
              {errors && errors.username && <FormFeedback>{errors.username.message}</FormFeedback>}
            </FormGroup>
            <FormGroup>
              <Label for='password'>Password</Label>
              <InputPasswordToggle
              id='password'
              name='password'
              value={pass}
          onChange={ (e) => setpassword(e.target.value)}
              
              innerRef={register({ required: true })}
              invalid={errors.password && true}
              placeholder='******************'
              innerRef={register({ required: true, validate: value => value !== '' })}
              //className={classnames({ 'is-invalid': errors['oldpassword'] })}
            />
              {/* <Input
                id='password'
                name='password'
                value={pass}
            onChange={ (e) => setpassword(e.target.value)}
                
                innerRef={register({ required: true })}
                invalid={errors.password && true}
                placeholder='...'
              /> */}
              {errors && errors.password && <FormFeedback>{errors.password.message}</FormFeedback>}
            </FormGroup>
          </> : <p></p>}
        <FormGroup className='d-flex mb-0'>
          <Button.Ripple className='mr-1' color='primary' type='submit'>
            Submit
          </Button.Ripple>
          {/* <Button.Ripple outline color='secondary' type='reset'>
            Reset
          </Button.Ripple> */}
        </FormGroup>
      </Form>
    </Sidebar>
  )
}

export default SidebarNewUsers
