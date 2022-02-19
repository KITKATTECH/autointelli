import {  CardBody, Card, Row, Col } from 'reactstrap'
import Table from "./Table"
import UnusePoliciesData from "./TestData/unusedPolicies.json"
import React from 'react'


const TableHeaders = [
  {
    name:'Name'
  },
  {
    name:'Tags'
  },
  {
    name:'Group'
  },
  {
    name:'Type'
  },
  {
    name:'Source Zone'
  },
  {
    name:'Source User'
  },
  {
    name:'Source HIP Profile'
  },
  {
    name:'Application'
  }
]

 class UnusedPolicies extends React.Component {
  
  render() {
    return (      
          <div style={{marginTop:'2%'}}>                      
        <div style={{fontSize:'1.2rem', color:'#7E7AAB', marginBottom:'2%'}}>
        Unused policies for a month
        </div>
        <div>
        <Card>
      <CardBody>
      
    <Table headers={TableHeaders} body={UnusePoliciesData} type="UnusedPolicies" />
    <div style={{display:'flex', alignItems:'center', justifyContent:'center', marginTop:'20px'}}>
       <button style={{ borderRadius:'10px', marginRight:'10px', width:'120px', fontSize:'12px'}}>
           <div style={{backgroundColor:'#BBC0C5', padding:'10px', borderRadius:'10px', marginLeft:'-2.5px', width:'110px'}}>
               Export to Pdf
           </div>
       </button>
       <button style={{ borderRadius:'10px', marginRight:'10px', width:'120px', fontSize:'12px'}}>
           <div style={{backgroundColor:'#BBC0C5', padding:'10px', borderRadius:'10px', marginLeft:'-2.5px', width:'110px'}}>
               Export to CSV
           </div>
       </button>
       <button style={{ borderRadius:'10px', marginRight:'10px', width:'120px', fontSize:'12px'}}>
           <div style={{backgroundColor:'#BBC0C5', padding:'10px', borderRadius:'10px', marginLeft:'-2.5px', width:'110px'}}>
               Export to XML
           </div>
       </button>
    </div>      
        </CardBody>  
      </Card>
      </div>
      </div>
    )
  }
}
    
    export default UnusedPolicies