import {  CardBody, Card, Row, Col } from 'reactstrap'
import Table from "./Table"
import threadDetectionData from "./TestData/threadDetection.json"
import React from 'react'


const TableHeaders = [
  {
    name:'Domain'
  },
  {
    name:'Receive Time'
  },
  {
    name:'Serial #'
  },
  {
    name:'Type'
  },
  {
    name:'Rule'
  }
]

 class ThreadDetection extends React.Component {
  
  render() {
    return (      
          <div style={{marginTop:'2%'}}>                      
        <div style={{fontSize:'1.2rem', color:'#7E7AAB', marginBottom:'2%'}}>
        Threat detection details
        </div>
        <div>
        <Card>
      <CardBody>
      
    <Table headers={TableHeaders} body={threadDetectionData} type="threadDetection" />
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
    
    export default ThreadDetection