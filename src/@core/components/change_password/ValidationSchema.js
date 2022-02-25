import * as yup from 'yup'
import { useForm, Controller } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import InputPasswordToggle from '@components/input-password-toggle'
import classnames from 'classnames'
import { Card, CardHeader, CardTitle, CardBody, Button, Form, FormGroup, Label, Input, FormFeedback, UncontrolledButtonDropdown, DropdownMenu, DropdownToggle, DropdownItem } from 'reactstrap'
import { selectThemeColors } from '@utils'
import Select from 'react-select'
import { useReducer, Fragment } from 'react'
import Avatar from '@components/avatar'
import axios from 'axios'
import { toast, Slide } from 'react-toastify'
import { Facebook, Twitter, Mail, GitHub, HelpCircle, Coffee, AlertCircle } from 'react-feather'
import Apiurl from '../../../configs/RootAPI_url'

const ValidationOnChange = () => {
  const SignupSchema = yup.object().shape({
    smtpport: yup.string().email().required(),
    username: yup.string().min(3).required(),
    smtpip: yup.string().min(3).required(),
    password: yup.string().min(6).required(),
    ReactSelect: null
  })
  const ToastContent = ({ name, role }) => (
    <Fragment>
      <div className='toastify-header'>
        <div className='title-wrapper'>
          <Avatar size='sm' color='success' icon={<Coffee size={12} />} />
          <h6 className='toast-title font-weight-bold'>Hi, Password Changed Successfully!</h6>
        </div>
      </div>

    </Fragment>
  )
  const ToastContenterror = ({ info }) => (
    <Fragment>
      <div className='toastify-header'>
        <div className='title-wrapper'>
          <Avatar size='sm' color='danger' icon={<AlertCircle size={12} />} />
          <h6 className='toast-title font-weight-bold text-danger'>{info}</h6>
        </div>
      </div>

    </Fragment>
  )
  const userData = JSON.parse(localStorage.getItem('userData'))

  const { register, errors, handleSubmit } = useForm()
  //const { handleSubmit, control } = useForm({ defaultValues })
  //const { handleSubmit, control } = useForm({ defaultValues }) Hi, Password and Confirm Password must be same.
  const onSubmit = data => {
    console.log(data)
    if (data.npassword === data.opassword) {
      axios.post(`${Apiurl}users/change-password`, {
        username: userData.fullusername,
        newpassword: data.npassword,
        oldpassword: data.oldpassword
      }).then(response => response.data).then(result => {
        if (result.type === 'error' || result.type === 'failure') {
          toast.success(
            <ToastContenterror info={result.message} role={data.role || 'admin'} />,
            { transition: Slide, hideProgressBar: true, autoClose: 2000 }
          )

        } else {
          toast.success(
            <ToastContent name={data.fullName || data.username || 'John Doe'} role={data.role || 'admin'} />,
            { transition: Slide, hideProgressBar: true, autoClose: 2000 }
          )
        }

      }, error => {
        console.log(error)
      })
    } else {
      console.log('exp')
      toast.error(
        <ToastContenterror info={'Hi, Password and Confirm Password must be same.'} role={data.role || 'admin'} />,
        { transition: Slide, hideProgressBar: true, autoClose: 2000 }
      )
    }
  }

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

          {/* <FormGroup>
            <Label for='smtpip'>SMTP IP</Label>
            <Input
              id='smtpip'
              name='smtpip'
              innerRef={register({ required: true })}
              invalid={errors.smtpip && true}
              placeholder='192.168.1.1'
            />
            {errors && errors.smtpip && <FormFeedback>{errors.smtpip.message}</FormFeedback>}
          </FormGroup> */}
          <FormGroup>
            <Label for='email'>
              Email <span className='text-danger'>*</span>
            </Label>
            <Input
              type='email'
              name='email'
              id='email'
              disabled
              value={userData.email}
              placeholder='john.doe@example.com'
              innerRef={register({ required: true })}
              className={classnames({ 'is-invalid': errors['email'] })}
            />

          </FormGroup>
          <FormGroup>
            <Label for='oldpassword'>
              Old Password <span className='text-danger'>*</span>
            </Label>
            <InputPasswordToggle
              name='oldpassword'
              id='oldpassword'
              placeholder='*******'
              innerRef={register({ required: true, validate: value => value !== '' })}
              className={classnames({ 'is-invalid': errors['oldpassword'] })}
            />
          </FormGroup>
          <FormGroup>
            <Label for='npassword'>
              New Password <span className='text-danger'>*</span>
            </Label>
            <InputPasswordToggle
              name='npassword'
              id='npassword'
              placeholder='*******'
              innerRef={register({ required: true, validate: value => value !== '' })}
              className={classnames({ 'is-invalid': errors['npassword'] })}
            />
          </FormGroup> <FormGroup>
            <Label for='opassword'>
              Confirm Password <span className='text-danger'>*</span>
            </Label>
            <InputPasswordToggle
              name='opassword'
              id='opassword'
              placeholder='*******'
              innerRef={register({ required: true, validate: value => value !== '' })}
              className={classnames({ 'is-invalid': errors['opassword'] })}
            />
          </FormGroup>
          <FormGroup className='d-flex mb-0 justify-content-center'>
            <Button.Ripple className='mr-1' color='primary' type='submit'>
              Submit
            </Button.Ripple>
            {/* <Button.Ripple outline color='secondary' type='reset'>
              Reset
            </Button.Ripple> */}
          </FormGroup>
        </Form>
      </CardBody>
    </Card>
  )
}

export default ValidationOnChange
