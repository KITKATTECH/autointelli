import { Row, Col, Dropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap'
import '@styles/react/libs/charts/apex-charts.scss'
import BarCharts from "./Charts/BarCharts"
import FilteredTabs from "./FilterTabs"
import Component from "@reactions/component"
import LineChart from "./Charts/LineChart"
import AreaChart from "./Charts/AreaChart"
import "./index.css"
import { useState } from 'react'
import StatsHorizontal from './StatsHorizontal'
import { Users, AlertTriangle, Volume2 } from 'react-feather'

const Operations = () => {
  const [dropdownOpen, setDropdownOpen] = useState(false)

 const toggle = () => {
    setDropdownOpen(!dropdownOpen)
  }
  const renderFilter = () => {

    const filterConditions = [
      {
        id:"1",
        label:"All"
      },
      {
        id:"2",
        label:"Today"
      },
      {
        id:"2",
        label:"Yesterday"
      },
      {
        id:"3",
        label:"This Week"
      },
      {
        id:"4",
        label:"This Month"
      },
      {
        id:"5",
        label:"Last Month"
      }
  ]

    return (
      <div>
        <div className='filterContainer'>
        <div className='filterHeader' >  
        <h5>Filter</h5>                
        </div>   
        <div>
           
    <Component initialState={{ tab: "" }}>
      {({ state, setState }) => (
        <div >
          
          <FilteredTabs pills onSetTab={({ tab }) => setState({ tab })}>
             {filterConditions.map((data, index) => {
              return (<FilteredTabs.Tab title={data.label} />)
             }                       
             )}                               
          </FilteredTabs>
          
        </div>
      )}
    </Component>
  
          </div>     
        </div>
        
      </div>
    )
  }
 
  return (
    <div id='dashboard-analytics'>
        
      <Row className='match-height mb-2'> 
        <Col lg='12' sm='12' xs={12} md={12}>  
          {renderFilter()}
          </Col>
        </Row>

        <Row className='match-height'> 
        {/* Stats With Icons Horizontal */}
        <Col lg='3' sm='6' >
        <StatsHorizontal   color="primary" stats='0' statTitle='Host Down' color="bg-primary" icon={<AlertTriangle size={21}  />} />
        </Col>
        <Col lg='3' sm='6'>
          <StatsHorizontal icon={<Volume2 size={21} />}  color="bg-success" stats='5' statTitle='Hosts Up' />
        </Col>
        </Row>
      
       <Row className='match-height'>
        <Col xs='7'>
          <BarCharts title="Host Availablity" />
        </Col>
      </Row>
      {/* <Dropdown isOpen={dropdownOpen} toggle={toggle} >
        <DropdownToggle style={{backgroundColor:"red !important"}}  caret >
          Dropdown
        </DropdownToggle>
        <DropdownMenu>
          <DropdownItem header>Header</DropdownItem>
          <DropdownItem disabled>Action</DropdownItem>
          <DropdownItem>Another Action</DropdownItem>
          <DropdownItem divider />
          <DropdownItem>Another Action</DropdownItem>
        </DropdownMenu>
      </Dropdown>  */}
      <select name="u123" id="au" style={{marginBottom:'20px'}}>
    <option value="volvo">u123.au.xy</option>    
  </select>
    
      <Row className='match-height'>      
        <Col xs='6'>        
      
          <BarCharts title="Interface Availablity" />
        </Col>
        <Col xs='6'>
          <LineChart title="CPU" />
        </Col>
      </Row> 

      <Row className='match-height'>
        <Col xs='6'>
        <LineChart title="Memory" />
        </Col>
        <Col xs='6'>
          <LineChart title="Disk" />
        </Col>
      </Row>   

      <Row className='match-height'>
        <Col xs='12'>
        <AreaChart />
        </Col>        
      </Row>      
       </div>
  )
}

export default Operations
