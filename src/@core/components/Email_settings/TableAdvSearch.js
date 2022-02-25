// ** React Imports
import {  Fragment, useState, useEffect } from 'react'

// ** Table Columns
import { data, advSearchColumns } from './data'

// ** Third Party Components
import Flatpickr from 'react-flatpickr'
import ReactPaginate from 'react-paginate'
import { ChevronDown } from 'react-feather'
import DataTable from 'react-data-table-component'
import { Card, CardHeader, CardBody, CardTitle, Input, Label, FormGroup, Row, Col, Button } from 'reactstrap'
import Sidebar from './Sidebar'
import axios from 'axios'
// ** Styles
import '@styles/react/libs/flatpickr/flatpickr.scss'
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'
import Apiurl from '../../../configs/RootAPI_url'

const MySwal = withReactContent(Swal)

const DataTableAdvSearch = (props) => {
  // ** States
  const [Picker, setPicker] = useState('')
  const [searchName, setSearchName] = useState('')
  const [searchPost, setSearchPost] = useState('')
  const [searchCity, setSearchCity] = useState('')
  const [currentPage, setCurrentPage] = useState(0)
  const [showrows, setshowrows] = useState(5)
  const [searchEmail, setSearchEmail] = useState('')
  const [searchSalary, setSearchSalary] = useState('')
  const [filteredData, setFilteredData] = useState([])
  const [sidebarOpen, setSidebarOpen] = useState(false)
  // ** Function to handle Pagination
  const handlePagination = page => setCurrentPage(page.selected)
  const [data, setdata] = useState([])
  const [roles, setroles] = useState([])
  //const [roles, setroles] = useState([])
  //const context = useContext(props)
  console.log(props)
  const getAllUsers = () => {
    axios.get(`${Apiurl}configuration/email`).then(response => response.data).then(result => {
      console.log(result.message)
      setdata(result.message)
      let count1 = 0
      let count2 = 0
      result.message.forEach(element => {
        if (
          element.status === 'Active') {
          count1 += 1
        } else {
          count2 += 1
        }
           })
      //console.log(result.message.length, count1, count2)
      //props.userListcount(result.message.length, count1, count2)
    }, error => {
      console.log(error)
    })
  }

 
  useEffect(() => {
    getAllUsers()
  }, [sidebarOpen])
  useEffect(() => {
    getAllUsers()
  //  getAllRoles()
  }, [])
  // ** Table data to render
  const dataToRender = () => {
    if (
      searchName.length ||
      searchPost.length ||
      searchEmail.length ||
      searchCity.length ||
      searchSalary.length ||
      Picker.length
    ) {
      return filteredData
    } else {
      return data
    }
  }
  console.log(sidebarOpen)
  const toggleSidebar = () => setSidebarOpen(!sidebarOpen)
  // ** Custom Pagination
  const CustomPagination = () => (
    <ReactPaginate
      previousLabel={''}
      nextLabel={''}
      forcePage={currentPage}
      onPageChange={page => handlePagination(page)}
      pageCount={dataToRender().length / showrows || 1}
      breakLabel={'...'}
      pagination
      pageRangeDisplayed={2}
      marginPagesDisplayed={2}
      activeClassName={'active'}
      pageClassName={'page-item'}
      nextLinkClassName={'page-link'}
      nextClassName={'page-item next'}
      previousClassName={'page-item prev'}
      previousLinkClassName={'page-link'}
      pageLinkClassName={'page-link'}
      breakClassName='page-item'
      breakLinkClassName='page-link'
      containerClassName={'pagination react-paginate separated-pagination pagination-sm justify-content-end pr-1 mt-1'}
    />
  )

  // ** Function to handle name filter
  const handleNameFilter = e => {
    const value = e.target.value
    let updatedData = []
    const dataToFilter = () => {
      if (searchEmail.length || searchPost.length || searchCity.length || searchSalary.length || Picker.length) {
        return filteredData
      } else {
        return data
      }
    }

    setSearchName(value)
    if (value.length) {
      updatedData = dataToFilter().filter(item => {
        const startsWith = item.displayname.toLowerCase().startsWith(value.toLowerCase())

        const includes = item.displayname.toLowerCase().includes(value.toLowerCase())

        if (startsWith) {
          return startsWith
        } else if (!startsWith && includes) {
          return includes
        } else return null
      })
      setFilteredData([...updatedData])
      setSearchName(value)
    }
  }

  // ** Function to handle email filter
  const handleEmailFilter = e => {
    const value = e.target.value
    let updatedData = []
    const dataToFilter = () => {
      if (searchName.length || searchPost.length || searchCity.length || searchSalary.length || Picker.length) {
        return filteredData
      } else {
        return data
      }
    }

    setSearchEmail(value)
    if (value.length) {
      updatedData = dataToFilter().filter(item => {
        const startsWith = item.email.toLowerCase().startsWith(value.toLowerCase())

        const includes = item.email.toLowerCase().includes(value.toLowerCase())

        if (startsWith) {
          return startsWith
        } else if (!startsWith && includes) {
          return includes
        } else return null
      })
      setFilteredData([...updatedData])
      setSearchEmail(value)
    }
  }

  // ** Function to handle post filter
  const handlePostFilter = e => {
    const value = e.target.value
    let updatedData = []
    const dataToFilter = () => {
      if (searchEmail.length || searchName.length || searchCity.length || searchSalary.length || Picker.length) {
        return filteredData
      } else {
        return data
      }
    }

    setSearchPost(value)
    if (value.length) {
      updatedData = dataToFilter().filter(item => {
        const startsWith = item.post.toLowerCase().startsWith(value.toLowerCase())

        const includes = item.post.toLowerCase().includes(value.toLowerCase())

        if (startsWith) {
          return startsWith
        } else if (!startsWith && includes) {
          return includes
        } else return null
      })
      setFilteredData([...updatedData])
      setSearchPost(value)
    }
  }

  // ** Function to handle city filter
  const handleCityFilter = e => {
    const value = e.target.value
    let updatedData = []
    const dataToFilter = () => {
      if (searchEmail.length || searchName.length || searchPost.length || searchSalary.length || Picker.length) {
        return filteredData
      } else {
        return data
      }
    }

    setSearchCity(value)
    if (value.length) {
      updatedData = dataToFilter().filter(item => {
        const startsWith = item.city.toLowerCase().startsWith(value.toLowerCase())

        const includes = item.city.toLowerCase().includes(value.toLowerCase())

        if (startsWith) {
          return startsWith
        } else if (!startsWith && includes) {
          return includes
        } else return null
      })
      setFilteredData([...updatedData])
      setSearchCity(value)
    }
  }

  // ** Function to handle salary filter
  const handleSalaryFilter = e => {
    const value = e.target.value
    let updatedData = []
    const dataToFilter = () => {
      if (searchEmail.length || searchName.length || searchPost.length || searchCity.length || Picker.length) {
        return filteredData
      } else {
        return data
      }
    }

    setSearchSalary(value)
    if (value.length) {
      updatedData = dataToFilter().filter(item => {
        const startsWith = item.salary.toLowerCase().startsWith(value.toLowerCase())

        const includes = item.salary.toLowerCase().includes(value.toLowerCase())

        if (startsWith) {
          return startsWith
        } else if (!startsWith && includes) {
          return includes
        } else return null
      })
      setFilteredData([...updatedData])
      setSearchSalary(value)
    }
  }


  // ** Function to handle date filter
  const handleDateFilter = range => {
    const arr = []
    let updatedData = []
    const dataToFilter = () => {
      if (searchEmail.length || searchName.length || searchPost.length || searchCity.length || searchSalary.length) {
        return filteredData
      } else {
        return data
      }
    }

    range.map(i => {
      const date = new Date(i)

      const year = date.getFullYear()

      let month = (1 + date.getMonth()).toString()
      month = month.length > 1 ? month : `0${month}`

      let day = date.getDate().toString()
      day = day.length > 1 ? day : `0${day}`

      arr.push(`${month}/${day}/${year}`)
      return true
    })

    setPicker(range)

    if (range.length) {
      updatedData = dataToFilter().filter(item => {
        return (
          new Date(item.start_date).getTime() >= new Date(arr[0]).getTime() &&
          new Date(item.start_date).getTime() <= new Date(arr[1]).getTime()
        )
      })
      setFilteredData([...updatedData])
      setPicker(range)
    }
  }
const handlePerPage = e => {
    dispatch(
      getData({
        page: currentPage,
        perPage: parseInt(e.target.value),
        q: searchValue
      })
    )
    setRowsPerPage(parseInt(e.target.value))
  }
  return (
    <Fragment>
      <Card>
        {/* <CardHeader className='border-bottom'>
        </CardHeader> */}
        <CardBody>
        <CardTitle tag='h4'>Filters</CardTitle>
{/* 
          <Row form className='mt-1 mb-50'>
            <Col lg='4' md='6'>
              <FormGroup>
                <Label for='name'>Users Name:</Label>
                <Input id='name' placeholder='Users Name' value={searchName} onChange={handleNameFilter} />
              </FormGroup>
            </Col>
            <Col lg='4' md='6'>
              <FormGroup>
                <Label for='email'>Users ID:</Label>
                <Input
                  type='text'
                  id='email'
                  placeholder='Users ID'
                  value={searchEmail}
                  onChange={handleEmailFilter}
                />
              </FormGroup>
            </Col>
            <Col lg='4' md='6'>
              <FormGroup>
                <Label for='post'>Designation</Label>
                <Input id='post' placeholder='Designation' value={searchPost} onChange={handlePostFilter} />
              </FormGroup>
            </Col>
            </Row> */}
        </CardBody>
        <Row className='mx-0 mt-1 mb-50'>
          <Col sm='6'>
            <div className='d-flex align-items-center'>
              <Label for='sort-select'>show</Label>
              <Input
                className='dataTable-select'
                type='select'
                id='sort-select'
                value={showrows}
               onChange={e => setshowrows(e.target.value)}
              >
                <option value={5}>5</option>
                <option value={10}>10</option>
                <option value={25}>25</option>
                <option value={50}>50</option>
                <option value={75}>75</option>
                <option value={100}>100</option>
              </Input>
              <Label for='sort-select'>entries</Label>
            </div>
          </Col>
          <Col className='d-flex align-items-center justify-content-sm-end mt-sm-0 mt-1' sm='6'>
            {/* <Label className='mr-1' for='search-input'>
              Search
            </Label> */}
            {/* <Input
              className='dataTable-filter'
              type='text'
              bsSize='md'
              id='search-input'
              placeholder="Search"
              //value={searchValue}
              //onChange={handleFilter}
            /> */}
            <Input   className='dataTable-filter'   bsSize='md' id='name' placeholder='Search' value={searchName} onChange={handleNameFilter} />
            {/* <Button.Ripple  color='primary' className='ml-2' onClick={toggleSidebar}>
            Add New App
          </Button.Ripple> */}
          </Col>
          {/* <Button.Ripple tag={Link} to='/apps/invoice/add' color='primary'> */}
          {/* <Col className='d-flex align-items-center justify-content-sm-end mt-sm-0 mt-1' sm='6'>
          <Button.Ripple  color='primary'>
            Add Users
          </Button.Ripple>
          </Col> */}
        </Row>
        <DataTable
          noHeader
          pagination
          columns={advSearchColumns}
          paginationPerPage={showrows}
          className='react-dataTable'
          sortIcon={<ChevronDown size={10} />}
          paginationDefaultPage={currentPage + 1}
          paginationComponent={CustomPagination}
          data={dataToRender()}
        />
      </Card>
       <Sidebar open={sidebarOpen} toggleSidebar={toggleSidebar} />
    </Fragment>
  )
}

export default DataTableAdvSearch
