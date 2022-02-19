
import { Card, CardBody, Row, Col, Progress } from 'reactstrap'

const Acc = () => {
return (
    
    <div style={{marginTop:'2%'}}>
        <div style={{fontSize:'1.2rem', color:'#7E7AAB', marginBottom:'2%'}}>
            ACC Score rating and comparison with previous day
        </div>
    
    <Row>
    <Col md="6" sm="6" lg="6">
    <Card>
      <CardBody>
          <div style={{background:"#6A757D", color:'white', padding:'10px'}}>
          ACC Risk Factor (Last 60 Minutes)
          </div>   
          <div style={{border:'1px solid black', borderTop:'none', padding:'20px'}}>
          <div className="text-center">3.2</div>
                <Progress value="3.2" max="5" style={{background:'linear-gradient(to right, #e5405e 0%, #ffdb3a 45%, #3fffa2 100%)'}}>                                     
                </Progress>
          </div>        
      </CardBody>  
      </Card>
      </Col>
    </Row>                   
    
    </div>
    
)
}

export default Acc