import {
  ListGroup,
  ListGroupItem,
  Progress,
  Col,
  Row,
  Badge,
  FormGroup,
  Label,
  ButtonGroup,
  Button,
  Input
} from "reactstrap"
import { Facebook, Twitter, Instagram } from 'react-feather'
import { DiLinux, DiDatabase, DiWindows } from "react-icons/di"
import { AiOutlineCluster } from "react-icons/ai"
const ListGroupCustom = ({ name, status, value }) => {
  console.log(name, status, value)
  return (
    <ListGroup>
      <ListGroupItem>
        <Row className="m">
          {/* <Col lg="1" sm="12">
            <h5 className="mb-1 ">{name}</h5>
          </Col> */}

          <Col className="mt-1" xl="4" md="6" lg="4" sm="12">
            <FormGroup>
              <Input type="email" id="basicInput" placeholder="Search" />
            </FormGroup>
          </Col>

          <Col lg="6" sm="12">
              <Row>
       
        <Col md={6} sm={12}>
          <ButtonGroup className='mt-1'>
            <Button outline color='secondary'>
              <DiLinux size={20} />
            </Button>
            <Button outline color='secondary'>
              <DiWindows size={20} />
            </Button>
            <Button outline color='secondary'>
              <AiOutlineCluster size={20} />
                  </Button>
                   <Button outline color='secondary'>
              <DiDatabase size={20} />
            </Button>
          </ButtonGroup>
        </Col>
      </Row>
          </Col>
        </Row>
      </ListGroupItem>
    </ListGroup>
  )
}
export default ListGroupCustom
