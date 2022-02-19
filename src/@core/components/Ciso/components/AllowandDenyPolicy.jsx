import { TabContent, TabPane, Nav, NavItem, NavLink, CardBody, Card, Button, CardTitle, CardText, Row, Col } from 'reactstrap'
import Table from "./Table"
import classnames from 'classnames'
import React from 'react'
import topPolicies from "./TestData/topPolicy.json"


const TableHeaders = [
    {
      name:'Action'
    },
    {
      name:'Rule'
    },
    {
      name:'Source Address'
    },
    {
      name:'Source Host Name'
    },
    {
      name:'Destination Address'
    },
    
    {
      name:'Byte'
    }
  ]

 class AllowandDeny extends React.Component {
  constructor(props) {
    super(props)

    this.toggle = this.toggle.bind(this)
    this.state = {
      activeTab: '2'
    }
  }

  toggle(tab) {
    if (this.state.activeTab !== tab) {
      this.setState({
        activeTab: tab
      })
    }
  }
  render() {
    return (      
          <div style={{marginTop:'2%'}}>                      
        <div style={{fontSize:'1.2rem', color:'#7E7AAB', marginBottom:'2%'}}>
        Allow and denied Policy
                </div>
        <Card>
      <CardBody>
        <Nav tabs>
          <NavItem>
            <NavLink
              className={classnames({ active: this.state.activeTab === '1' })}
              onClick={() => { this.toggle('1') }}
            >
              Report Settings
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink
              className={classnames({ active: this.state.activeTab === '2' })}
              onClick={() => { this.toggle('2') } }
            >
              Top Allow Policy
            </NavLink>
          </NavItem>
        </Nav>
        <TabContent activeTab={this.state.activeTab}>
          <TabPane tabId="1">
            <Row>
              <Col sm="12">
                <h4>Comming Soon</h4>
              </Col>
            </Row>
          </TabPane>
          <TabPane tabId="2">          
      <Row style={{padding:'15px'}}>
    <Col md="12" sm="12" lg="12">
    <Table headers={TableHeaders} type="topPolicies" body={topPolicies} />
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
      </Col>
    </Row>  
      
          </TabPane>
        </TabContent>
        </CardBody>  
      </Card>
      </div>
    )
  }
}
    
    export default AllowandDeny