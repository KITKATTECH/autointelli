import { ListGroup, ListGroupItem, Progress, Col, Row, Badge } from 'reactstrap'

const ListGroupCustom = ({ name, status, value }) => {
    console.log(name, status, value)
  return (
    <ListGroup>
      <ListGroupItem >
        {/* <div className='d-flex  w-100'>
          <h5 className='mb-1 '>{props.name}</h5>
                  <h5 className='mb-1 '>List group item heading</h5>
          <small>3 days ago</small>
              </div> */}
              <Row >
     <Col lg='' sm='12'>
                      <h5 className='mb-1 '>{name}</h5>
        </Col>
                 <Col lg='9' sm='12'>
                      <Progress animated striped className='progress-bar-success' value={value} >
                          
                          { value}%
      </Progress>
        </Col>
                      <Col lg='1' sm='12'>
                      <small className='d-flex align-items-end  justify-content-end text-green'><Badge color='success' pill>
        { status}
        </Badge></small>
        </Col> 
            </Row>  
        {/* <p className='mb-1'>
          Donec id elit non mi porta gravida at eget metus. Maecenas sed diam
          eget risus varius blandit.
        </p>
        <small>Donec id elit non mi porta.</small> */}
      </ListGroupItem>
   
    </ListGroup>
  )
}
export default ListGroupCustom