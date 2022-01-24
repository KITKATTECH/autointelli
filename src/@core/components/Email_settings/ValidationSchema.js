import * as yup from 'yup'
import { useForm, Controller } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import { Card, CardHeader, CardTitle, CardBody, Button, Form, FormGroup, Label, Input, FormFeedback, UncontrolledButtonDropdown, DropdownMenu, DropdownToggle, DropdownItem} from 'reactstrap'
import { selectThemeColors } from '@utils'
import Select from 'react-select'
const ValidationOnChange = () => {
  const SignupSchema = yup.object().shape({
    smtpport: yup.string().email().required(),
    username: yup.string().min(3).required(),
    smtpip: yup.string().min(3).required(),
    password: yup.string().min(6).required(),
    ReactSelect: null
  })

  const { register, errors, handleSubmit } = useForm({ mode: 'onChange', resolver: yupResolver(SignupSchema) })
  //const { handleSubmit, control } = useForm({ defaultValues })
//const { handleSubmit, control } = useForm({ defaultValues })
  const onSubmit = data => {
    console.log(data)
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
             
          <FormGroup>
          <Label for='select-basic'>Communication Type</Label>
          <Input type='select' name='select' id='select-basic'  innerRef={register({ required: true })}>
            <option></option>
            <option>Type 1</option>
            <option>Type 2</option>
            <option>Type 3</option>
          
          </Input>
        </FormGroup>
         
          <FormGroup>
            <Label for='smtpip'>SMTP IP</Label>
            <Input
              id='smtpip'
              name='smtpip'
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
              innerRef={register({ required: true })}
              invalid={errors.smtpport && true}
              placeholder='8080'
            />
            {errors && errors.smtpport && <FormFeedback>{errors.smtpport.message}</FormFeedback>}
          </FormGroup>
          
           <FormGroup check inline>
              <Input type='checkbox' defaultChecked id='basic-cb-checked'     className='custom-control-Primary my-2'/>
              <Label for='basic-cb-checked' check>
                Does your Server needs Authentication?
              </Label>
            </FormGroup>  
          <FormGroup>
            <Label for='username'>User Name</Label>
            <Input
              id='username'
              name='username'
              innerRef={register({ required: true })}
              invalid={errors.username && true}
              placeholder='Bruce'
            />
            {errors && errors.username && <FormFeedback>{errors.username.message}</FormFeedback>}
          </FormGroup>
           <FormGroup>
            <Label for='password'>Password</Label>
            <Input
              id='password'
              name='password'
              innerRef={register({ required: true })}
              invalid={errors.password && true}
              placeholder='...'
            />
            {errors && errors.password && <FormFeedback>{errors.password.message}</FormFeedback>}
          </FormGroup>
      
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
