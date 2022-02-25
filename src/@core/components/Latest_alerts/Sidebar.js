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
const SidebarNewUsers = ({ open, toggleSidebar }) => {
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
    axios.get(`${Apiurl}users/getAllRoles`).then(response => response.data).then(result => {
      console.log(result.message)
      setroles(result.message)
    }, error => {
      console.log(error)
    })
  }
  useEffect(() => {
    
    getAllRoles()
  }, [])
  const onSubmit = value => {
    console.log(value)
    console.log(errors)
    if (isObjEmpty(errors)) {
      
      console.log(value)
      const data =
      {
      displayname: value.fullname,
      username: value.username,
      emailid: value.email,
      password: value.password,
      role: roleid
      }
console.log(data)
     
        axios.post(`${Apiurl}users/`, data).then(response => response.data).then(result => {
          console.log(result.message)
//setuserList(result.message)
          toggleSidebar()
        }, error => {
          console.log(error)
        })
      
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
  }

  return (
    <Sidebar
      size='lg'
      open={open}
      title='New User'
      headerClassName='mb-1'
      contentClassName='pt-0'
      toggleSidebar={toggleSidebar}
    >
      <Form onSubmit={handleSubmit(onSubmit)}>
        <FormGroup>
          <Label for='fullname'>
            Full Name <span className='text-danger'>*</span>
          </Label>
          <Input
            name='fullname'
            id='fullname'
            placeholder='John Doe'
            innerRef={register({ required: true })}
            className={classnames({ 'is-invalid': errors['fullname'] })}
          />
        </FormGroup>
        <FormGroup>
          <Label for='username'>
            Username <span className='text-danger'>*</span>
          </Label>
          <Input
            name='username'
            id='username'
            placeholder='johnDoe99'
            innerRef={register({ required: true })}
            className={classnames({ 'is-invalid': errors['username'] })}
          />
        </FormGroup>
        <FormGroup>
          <Label for='email'>
            Email <span className='text-danger'>*</span>
          </Label>
          <Input
            type='email'
            name='email'
            id='email'
            placeholder='john.doe@example.com'
            innerRef={register({ required: true })}
            className={classnames({ 'is-invalid': errors['email'] })}
          />
         
        </FormGroup>
        <FormGroup>
          <Label for='password'>
            Password <span className='text-danger'>*</span>
          </Label>
          <InputPasswordToggle
            name='password'
            id='password'
            placeholder='*******'
            innerRef={register({ required: true, validate: value => value !== '' })}
            className={classnames({ 'is-invalid': errors['password'] })}
          />
        </FormGroup>
        
        <FormGroup>
          <Label for='userrole'>User Role</Label>
          <Input type='select' id='userrole' name='userrole' innerRef={register({ required: true, validate: value => value !== '' })} value={roleid} onChange={e => setRoleid(e.target.value)}>
          <option value=''>Select User Role</option>
           
            {roles.map(i => <option value={i}>{i}</option>
            )}
            {/* <option value='subscriber'>Subscriber</option>
            <option value='editor'>Editor</option>
            <option value='maintainer'>Maintainer</option>
            <option value='author'>Author</option> */}
            {/* <option value='Administrator'>Administrator</option> */}
          </Input>
        </FormGroup>
       
        <Button type='submit' className='mr-1' color='primary'>
          Submit
        </Button>
        <Button type='reset' color='secondary' outline onClick={toggleSidebar}>
          Cancel
        </Button>
      </Form>
    </Sidebar>
  )
}

export default SidebarNewUsers
