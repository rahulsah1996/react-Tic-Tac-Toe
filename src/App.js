import './App.css';
import { Button, Row, Col, Container, Carousel, ListGroupItem, Card, ListGroup, Tab, Table, Tabs, TabContent, Accordion, Alert} from 'react-bootstrap';
// import {useState} from reactDom
import reactDom from 'react-dom';
import TabPanel from './TabPanel'
import StateEventHandle from './Components/StateEventHandle';
function App() {
  // const [show, setShow] = useState(true);
  setTimeout(() => {
    console.log("i am setTime IN")
}, 2000); 
console.log("i am setTime out")
// console.log("dsdsd")
  return (
    
    <div className="App">
      <header className="App-header">
        <h3>Welcome React Bootstrap</h3>
        <Carousel>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src="https://r1imghtlak.mmtcdn.com/3215c198e6b411e985aa0242ac110002.jpg"
      alt="First slide"
    />
    <Carousel.Caption>
      <h3>First slide label</h3>
      <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src="https://r1imghtlak.mmtcdn.com/3215c198e6b411e985aa0242ac110002.jpg"
      alt="Second slide"
    />

    <Carousel.Caption>
      <h3>Second slide label</h3>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src="https://r1imghtlak.mmtcdn.com/3215c198e6b411e985aa0242ac110002.jpg"
      alt="Third slide"
    />

    <Carousel.Caption>
      <h3>Third slide label</h3>
      <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
    </Carousel.Caption>
  </Carousel.Item>
</Carousel>
         
        {/* <Alert dismissible variant="danger">
      <Alert.Heading>Oh snap! You got an error!</Alert.Heading>
      <p>
        Change this and that and try again.
      </p>
    </Alert>
    <Alert show={show} variant="success">
        <Alert.Heading>How's it going?!</Alert.Heading>
        <p>
          Duis mollis, est non commodo luctus, nisi erat porttitor ligula, eget
          lacinia odio sem nec elit. Cras mattis consectetur purus sit amet
          fermentum.
        </p>
        <hr />
        <div className="d-flex justify-content-end">
          <Button onClick={() => setShow(false)} variant="outline-success">
            Close me y'all!
          </Button>
        </div>
      </Alert>

      {!show && <Button onClick={() => setShow(true)}>Show Alert</Button>} */}

<Container style={{marginTop:"20px"}}>
  <Row>
    <Col>
    <Card style={{ width: '18rem' }}>
  <Card.Img variant="top" src="https://r1imghtlak.mmtcdn.com/3215c198e6b411e985aa0242ac110002.jpg" />
  <Card.Body>
    <Card.Title>Card 1</Card.Title>
    <Card.Text style={{color: 'black', fontSize: '15px'}}>
      Some quick example text to build on the card title and make up the bulk of
      the card's content.
    </Card.Text>
  </Card.Body>
  <ListGroup className="list-group-flush">
    <ListGroupItem>
    <Button as={Col} variant="primary">View More</Button>
    </ListGroupItem> 
  </ListGroup>
 
</Card>
    </Col>

    <Col>
    <Card style={{ width: '18rem', fontSize: '15px' }}>
  <Card.Img variant="top" src="https://r1imghtlak.mmtcdn.com/3215c198e6b411e985aa0242ac110002.jpg" />
  <Card.Body>
    <Card.Title>Card 1</Card.Title>
    <Card.Text style={{color: 'black'}}>
      Some quick example text to build on the card title and make up the bulk of
      the card's content.
    </Card.Text>
  </Card.Body>
  <ListGroup className="list-group-flush">
    <ListGroupItem>
    <Button as={Col} variant="secondary" className="mx-2">View More</Button>
    </ListGroupItem> 
  </ListGroup>
 
</Card>
</Col>
    <Col>
    <Card style={{ width: '18rem', fontSize: '15px' }}>
  <Card.Img variant="top" src="https://r1imghtlak.mmtcdn.com/3215c198e6b411e985aa0242ac110002.jpg" />
  <Card.Body>
    <Card.Title>Card 1</Card.Title>
    <Card.Text  style={{color: 'black'}}>
      Some quick example text to build on the card title and make up the bulk of
      the card's content.
    </Card.Text>
  </Card.Body>
  <ListGroup className="list-group-flush">
    <ListGroupItem>
    <Button as={Col} variant="warning" className="mx-2">View More</Button>
    </ListGroupItem> 
  </ListGroup>
 
</Card>
</Col>
    {/* <Col>
    <Card style={{ width: '18rem' }}>
  <Card.Img variant="top" src="https://r1imghtlak.mmtcdn.com/3215c198e6b411e985aa0242ac110002.jpg" />
  <Card.Body>
    <Card.Title>Card 1</Card.Title>
    <Card.Text style={{color: 'black', fontSize: "15px"}}>
      Some quick example text to build on the card title and make up the bulk of
      the card's content.
    </Card.Text>
  </Card.Body>
  <ListGroup className="list-group-flush">
    <ListGroupItem>
    <Button as={Col} variant="danger" className="mx-2">View More</Button>
    </ListGroupItem> 
  </ListGroup>
 
</Card>
    </Col> */}
    
  </Row>
</Container>

    {/* accordian */}
    <Accordion defaultActiveKey="0">
  <Accordion.Item style={{ marginBottom: "12px", marginTop: "12px"}} eventKey="0">
    <Accordion.Header>Assets</Accordion.Header>
    <Accordion.Body style={{ color: "black"}}>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
      tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
      veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
      commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
      velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
      cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id
      est laborum.
    </Accordion.Body>
  </Accordion.Item>
  <Accordion.Item style={{ marginBottom: "12px", marginTop: "12px"}} eventKey="1">
    <Accordion.Header>Management</Accordion.Header>
    <Accordion.Body style={{ color: "black"}}>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
      tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
      veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
      commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
      velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
      cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id
      est laborum.
    </Accordion.Body>
  </Accordion.Item>
</Accordion>
    {/* react boostrap Tabel */}
    <Table striped bordered hover style={{ color:"white" }}>
  <thead style={{ color:"white" }}>
    <tr>
      <th>#</th>
      <th>First Name</th>
      <th>Last Name</th>
      <th>Username</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>1</td>
      <td>Mark</td>
      <td>Otto</td>
      <td>@mdo</td>
    </tr>
    <tr>
      <td>2</td>
      <td>Jacob</td>
      <td>Thornton</td>
      <td>@fat</td>
    </tr>
    <tr>
      <td>3</td>
      <td colSpan={2}>Larry the Bird</td>
      <td>@twitter</td>
    </tr>
  </tbody>
</Table>
{/* for tabPanel */}
<TabPanel title="Assets" />

      <StateEventHandle />
      </header>
    </div>
  );
}

export default App;
