// ** React Import
import { useState, useEffect } from 'react'
import axios from 'axios'
// ** Custom Components
import Sidebar from '@components/sidebar'

// ** Utils
import { isObjEmpty } from '@utils'

// ** Third Party Components
import classnames from 'classnames'
import { useForm } from 'react-hook-form'
import { Button, FormGroup, Label, FormText, Form, Input } from 'reactstrap'

// ** Store & Actions
//import { addUser } from ' store/action'
import { useDispatch } from 'react-redux'
import Apiurl from '../../../configs/RootAPI_url'

const SidebarNewUsers = ({ open, toggleSidebar }) => {
  // ** States
  const [role, setRole] = useState('subscriber')
  const [plan, setPlan] = useState('basic')
  const [listClass, setlistClass] = useState([])
  const [subClass, setsubClass] = useState([])
  const [listClassid, setlistClassid] = useState('')

  const [subClassid, setsubClassid] = useState('')

  // ** Store Vars
  const dispatch = useDispatch()

  // ** Vars
  const { register, errors, handleSubmit } = useForm()

  const getListClass = () => {
    axios.get(`${Apiurl}systemconfig/appmanagement/list_class`).then(response => response.data).then(result => {
      console.log(result.message)
      setlistClass(result.message)
    }, error => {
      console.log(error)
    })
  }
  const getSubClass = () => {
    axios.get(`${Apiurl}systemconfig/appmanagement/list_subclass`).then(response => response.data).then(result => {
      console.log(result.message)
      setsubClass(result.message)
    }, error => {
      console.log(error)
    })
  }
  useEffect(() => {
    getListClass()
    getSubClass()
  }, [])
  // ** Function to handle form submit
  const onSubmit = value => {
    if (isObjEmpty(errors)) {
      //toggleSidebar()
      const data =
      {
        appname: value.appname,
        appclassid: listClassid,
        appsubclassid: subClassid
      
      }
console.log(data)
     
        axios.post(`${Apiurl}systemconfig/appmanagement/application`, data).then(response => response.data).then(result => {
          console.log(result.message)
          console.log(result.message)
//setuserList(result.message)
          toggleSidebar()
        }, error => {
          console.log(error)
        })
      //dispatch(
        // addUser({
        //   fullName: values['full-name'],
        //   company: values.company,
        //   role,
        //   username: values.username,
        //   country: values.country,
        //   contact: values.contact,
        //   email: values.email,
        //   currentPlan: plan,
        //   status: 'active',
        //   avatar: ''
        // })
     // )
    }
  }

  return (
    <Sidebar
      size='lg'
      open={open}
      title='Add New Application'
      headerClassName='mb-1'
      contentClassName='pt-0'
      toggleSidebar={toggleSidebar}
    >
      <Form onSubmit={handleSubmit(onSubmit)}>
        <FormGroup>
          <Label for='appname'>
            Application Name <span className='text-danger'>*</span>
          </Label>
          <Input
            name='appname'
            id='appname'
            placeholder='Excel'
            innerRef={register({ required: true })}
            className={classnames({ 'is-invalid': errors['appname'] })}
          />
        </FormGroup>
     
         <FormGroup>
          <Label for='listClass'>Application Class</Label>
          <Input type='select' id='listClass' name='listClass' innerRef={register({ required: true, validate: value => value !== '' })} value={listClassid} onChange={e => setlistClassid(e.target.value)}>
          <option value=''>Select Application  Class</option>
           
            {listClass.map(i => <option value={i.classid}>{i.class}</option>
            )}
            {/* <option value='subscriber'>Subscriber</option>
            <option value='editor'>Editor</option>
            <option value='maintainer'>Maintainer</option>
            <option value='author'>Author</option> */}
            {/* <option value='Administrator'>Administrator</option> */}
          </Input>
          </FormGroup>
          <FormGroup>
          <Label for='subClass'>Application Sub Class</Label>
          <Input type='select' id='subClass' name='subClass' innerRef={register({ required: true, validate: value => value !== ''  })} value={subClassid} onChange={e => setsubClassid(e.target.value)}>
          <option value=''>Select Application Sub Class</option>
            {subClass.map(i => <option value={i.subclassid}>{i.subclass}</option>
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
