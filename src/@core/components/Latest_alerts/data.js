// ** Custom Components
import Avatar from '@components/avatar'

// ** Third Party Components
import axios from 'axios'
import { MoreVertical, Edit, FileText, Archive, Trash, Edit2, Trash2 } from 'react-feather'
import { Badge, UncontrolledDropdown, DropdownToggle, DropdownMenu, DropdownItem, Button, CustomInput} from 'reactstrap'
//import Button from 'reactstrap/lib/Button'
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'
import Apiurl from '../../../configs/RootAPI_url'
import { Link, useHistory } from 'react-router-dom'

const MySwal = withReactContent(Swal)
// ** Vars
const states = ['success', 'danger', 'warning', 'info', 'dark', 'primary', 'secondary']

const status = {
  1: { title: 'Active', color: 'light-success' },
  2: { title: 'InActive', color: 'light-danger' },
  3: { title: 'Disable', color: 'light-danger' },
  4: { title: 'Resigned', color: 'light-warning' },
  5: { title: 'Applied', color: 'light-info' }
}

export let data

// ** Get initial Data
// axios.get('http://192.168.1.200:5000/users/').then(response => response.data).then(result => {
//   console.log(result.message)
  
//   data = result.message
// }, error => {
//   console.log(error)
// })
let flag = false

const onChange = (val) => {
  console.log(val)
  axios.delete(`${Apiurl}users/${val}`).then(response => response.data).then(result => {
  console.log(result.message)
  
 flag = true
 return true
}, error => {
  console.log(error)
  return false
})
}
// ** Table Zero Config Column
export const basicColumns = [
  {
    name: 'ID',
    selector: 'id',
    sortable: true,
    maxWidth: '100px'
  },
  {
    name: 'Name',
    selector: 'full_name',
    sortable: true,
    minWidth: '225px'
  },
  {
    name: 'Email',
    selector: 'email',
    sortable: true,
    minWidth: '310px'
  },
  {
    name: 'Position',
    selector: 'post',
    sortable: true,
    minWidth: '250px'
  },
  {
    name: 'Age',
    selector: 'age',
    sortable: true,
    minWidth: '100px'
  },
  {
    name: 'Salary',
    selector: 'salary',
    sortable: true,
    minWidth: '175px'
  }
]

// ** Expandable table component
const ExpandableTable = ({ data }) => {
  
  return (
    <div className='expandable-content p-2'>
      <p>
        <span className='font-weight-bold'>City:</span> {data.city}
      </p>
      <p>
        <span className='font-weight-bold'>Experience:</span> {data.experience}
      </p>
      <p className='m-0'>
        <span className='font-weight-bold'>Post:</span> {data.post}
      </p>
    </div>
  )
}

// ** Table Common Column
export const columns = [
  {
    name: 'Name',
    selector: 'full_name',
    sortable: true,
    minWidth: '250px',
    cell: row => (
      <div className='d-flex align-items-center'>
        {row.avatar === '' ? (
          <Avatar color={`light-${states[row.status]}`} content={row.full_name} initials />
        ) : (
          <Avatar img={require(`@src/assets/images/portrait/small/avatar-s-${row.avatar}`).default} />
        )}
        <div className='user-info text-truncate ml-1'>
          <span className='d-block font-weight-bold text-truncate'>{row.full_name}</span>
          <small>{row.post}</small>
        </div>
      </div>
    )
  },
  {
    name: 'Email',
    selector: 'email',
    sortable: true,
    minWidth: '250px'
  },
  {
    name: 'Date',
    selector: 'start_date',
    sortable: true,
    minWidth: '150px'
  },

  {
    name: 'Salary',
    selector: 'salary',
    sortable: true,
    minWidth: '150px'
  },
  {
    name: 'Age',
    selector: 'age',
    sortable: true,
    minWidth: '100px'
  },
  {
    name: 'Status',
    selector: 'status',
    sortable: true,
    minWidth: '150px',
    cell: row => {
      return (
        <Badge color={status[row.status].color} pill>
          {status[row.status].title}
        </Badge>
      )
    }
  },
  {
    name: 'Actions',
    allowOverflow: true,
    cell: row => {
      return (
        <div className='d-flex'>
          <UncontrolledDropdown>
            <DropdownToggle className='pr-1' tag='span'>
              <MoreVertical size={15} />
            </DropdownToggle>
            <DropdownMenu right>
              <DropdownItem tag='a' href='/' className='w-100' onClick={e => e.preventDefault()}>
                <FileText size={15} />
                <span className='align-middle ml-50'>Details</span>
              </DropdownItem>
              <DropdownItem tag='a' href='/' className='w-100' onClick={e => e.preventDefault()}>
                <Archive size={15} />
                <span className='align-middle ml-50'>Archive</span>
              </DropdownItem>
              <DropdownItem tag='a' href='/' className='w-100' onClick={e => e.preventDefault()}>
                <Trash size={15} />
                <span className='align-middle ml-50'>Delete</span>
              </DropdownItem>
            </DropdownMenu>
          </UncontrolledDropdown>
          <Edit size={15} />
        </div>
      )
    }
  }
]

// ** Table Intl Column
export const multiLingColumns = [
  {
    name: 'Name',
    selector: 'full_name',
    sortable: true,
    minWidth: '200px'
  },
  {
    name: 'Position',
    selector: 'post',
    sortable: true,
    minWidth: '250px'
  },
  {
    name: 'Email',
    selector: 'email',
    sortable: true,
    minWidth: '250px'
  },
  {
    name: 'Date',
    selector: 'start_date',
    sortable: true,
    minWidth: '150px'
  },

  {
    name: 'Salary',
    selector: 'salary',
    sortable: true,
    minWidth: '150px'
  },
  {
    name: 'Status',
    selector: 'status',
    sortable: true,
    minWidth: '150px',
    cell: row => {
      return (
        <Badge color={status[row.status].color} pill>
          {status[row.status].title}
        </Badge>
      )
    }
  },
  {
    name: 'Actions',
    allowOverflow: true,
    cell: row => {
      return (
        <div className='d-flex'>
          <UncontrolledDropdown>
            <DropdownToggle className='pr-1' tag='span'>
              <MoreVertical size={15} />
            </DropdownToggle>
            <DropdownMenu right>
              <DropdownItem>
                <FileText size={15} />
                <span className='align-middle ml-50'>Details</span>
              </DropdownItem>
              <DropdownItem>
                <Archive size={15} />
                <span className='align-middle ml-50'>Archive</span>
              </DropdownItem>
              <DropdownItem>
                <Trash size={15} />
                <span className='align-middle ml-50'>Delete</span>
              </DropdownItem>
            </DropdownMenu>
          </UncontrolledDropdown>
          <Edit size={15} />
        </div>
      )
    }
  }
]

// ** Table Server Side Column
export const serverSideColumns = [
  {
    name: 'Full Name',
    selector: 'full_name',
    sortable: true,
    minWidth: '225px'
  },
  {
    name: 'Email',
    selector: 'email',
    sortable: true,
    minWidth: '250px'
  },
  {
    name: 'Position',
    selector: 'post',
    sortable: true,
    minWidth: '250px'
  },
  {
    name: 'Office',
    selector: 'city',
    sortable: true,
    minWidth: '150px'
  },
  {
    name: 'Start Date',
    selector: 'start_date',
    sortable: true,
    minWidth: '150px'
  },
  {
    name: 'Salary',
    selector: 'salary',
    sortable: true,
    minWidth: '150px'
  }
]

// ** Table Adv Search Column
export const advSearchColumns = [
  {
    name: 'Serverity',
    selector: 'current_state',
    sortable: true,
    minWidth: '100px ',
    cell: row => {
      const history = useHistory()
      return (
        // <Badge color={row.status ==='Active'?'light-success': 'light-danger'}  pill>
        //   <Button tag='a' href='/' className='w-100' onClick={e => e.preventDefault()}>

        //         <span className='align-middle ml-50'>{row.status}</span>
        //       </Button>  color={row.status === 'Active' ? 'danger' : 'success'}
        <Badge color={row.current_state === 'OK' ? 'light-success' : 'light-danger'}  pill>
        {row.current_state}
      </Badge>
         // console.log(val)

        //  MySwal.fire({
        //   title: 'Are you sure?',
        //   text: "You won't be able to revert this!",
        //   icon: 'warning',
        //   showCancelButton: true,
        //   confirmButtonText: 'Yes, Disable it!',
        //   customClass: {
        //     confirmButton: 'btn btn-primary',
        //     cancelButton: 'btn btn-danger ml-1'
        //   },
        //   buttonsStyling: false
        // }).then(function (result) {
        //   if (result.value) {
        //     axios.delete(`http://192.168.1.200:5000/users/${row.username}`).then(response => response.data).then(result => {
        //       MySwal.fire({
        //         icon: 'success',
        //         title: 'Deleted!',
        //         text: 'User is Disabled.',
        //         customClass: {
        //           confirmButton: 'btn btn-success'
        //         }
        //       })
        //       setTimeout(() => {
        //         console.log(result.message)
        //         row.status = 'Disabled'
        //         window.location.reload(false)
        //       }, 2000)
            
        //     }, error => {
        //       console.log(error)
             
        //     })
           
        //   } else if (result.dismiss === MySwal.DismissReason.cancel) {
        //     MySwal.fire({
        //       title: 'Cancelled',
        //       text: 'User is Active.',
        //       icon: 'error',
        //       customClass: {
        //         confirmButton: 'btn btn-success'
        //       }
        //     })
        //   }
        // })
         
         // console.log(val)
        
       
        // </Badge>
      )
    }
  },
  {
    name: 'Host Name',
    selector: 'hostname',
    sortable: true,
    minWidth: '100px'
  },
  {
    name: 'Service Name',
    selector: 'service_name',
    sortable: true,
    minWidth: '100px'
  },
  {
    name: 'Output',
    selector: 'plugin_output',
    sortable: true,
    minWidth: '150px',
     cell: row => {
      return (
        <p color={row.status === 'Active' ? 'light-success' : 'light-danger'}  pill>
        {row.plugin_output}
      </p>
      
      )
    }
  },
  {
    name: 'Last Check',
    selector: 'last_check',
    sortable: true,
    minWidth: '150px',
    cell: row => {
      return (
        <p color={row.status === 'Active' ? 'light-success' : 'light-danger'}  pill>
        {row.last_check}
      </p>
      
      )
    }
  }
 
  // {
  //   name: 'Last Up Time',
  //   selector: 'last_time_up',
  //   sortable: true,
  //   minWidth: '200px'
  // },
  // {
  //   name: 'Last Down Time',
  //   selector: 'last_time_down',
  //   sortable: true,
  //   minWidth: '200px'
  // },
  // {
  //   name: '% State Change',
  //   selector: 'percentage_state_change',
  //   sortable: true,
  //   minWidth: '150'
  //   // cell: row => {
  //   //   return (
  //   //     <Badge color={row.status === 'Active' ? 'light-success' : 'light-danger'}  pill>
  //   //     {row.statechange}
  //   //   </Badge>
  //   //     // <Button.Ripple color={row.status === 'Active' ? 'success' : 'danger'} className='hoverChange' >
  //   //     //   {row.status}
  //   //     // </Button.Ripple>
  //   //     // </Badge>
  //   //   )
  //   // }
  // },
 
  // {
  //   name: 'City',
  //   selector: 'city',
  //   sortable: true,
  //   minWidth: '150px'
  // },
  // {
  //   name: 'Date',
  //   selector: 'start_date',
  //   sortable: true,
  //   minWidth: '150px'
  // },

  // {
  //   name: 'Salary',
  //   selector: 'salary',
  //   sortable: true,
  //   minWidth: '100px'
  // }
]

export default ExpandableTable
