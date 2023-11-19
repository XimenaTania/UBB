
import './App.css';
import {Navbar,Container,Nav,Row,Col,Image,Button,Card,Carousel,Form} from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css"


function App() {
  return (
    <div className="App">
      <header>
      <Navbar bg="dark" variant="dark" expand="lg" fixed="top">
      <Container>
        <Navbar.Brand href="#home">UBBs</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#home">Inicio</Nav.Link>
            <Nav.Link href="#link">Quienes Somos</Nav.Link>
            <Nav.Link href="#link">Contenido</Nav.Link>
            <Nav.Link href="#link">Contactanos</Nav.Link>
            <Nav.Link href="#link">Conteactanos </Nav.Link>
            
          </Nav>
          <Nav>
            <Button variant="outline-warning"  href="./paginas/login" >
             Iniciar Secion 
                   
            </Button>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
 
      </header>
      <main>
      <Container>

      <Carousel>
      <Carousel.Item>
         <Image src="https://picsum.photos/900/400" />
        <Carousel.Caption>
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
      <Image src="https://picsum.photos/900/400"/>
        <Carousel.Caption>
          <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
      <Image src="https://picsum.photos/900/400"/>
        <Carousel.Caption>
          <h3>Third slide label</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>

    <Row>
    <Card className="text-center bg-secondary text-white my-5 py-4" >
      <Card.Body>“Por tanto, id, y haced discípulos a todas las naciones,
         bautizándolos en el nombre del Padre, y del Hijo, y del Espíritu Santo; 
         enseñándoles que guarden todas las cosas que os he mandado; 
        y he aquí yo estoy con vosotros todos los días, hasta el fin del mundo” (Mateo 28:19-20).</Card.Body>
    </Card>
    </Row>
    <Row>
      <Col>
      <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src="https://picsum.photos/320/200" />
      <Card.Body>
        <Card.Title>Mision</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Button variant="warning">Ver mas</Button>
      </Card.Body>
    </Card>
      </Col>
      <Col>
      <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src="https://picsum.photos/id/201/320/200" />
      <Card.Body>
        <Card.Title>Vision</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Button variant="warning">Ver mas</Button>
      </Card.Body>
    </Card>
      </Col>
      <Col>
      <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src="https://picsum.photos/320/200" />
      <Card.Body>
        <Card.Title>Historia</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Button variant="warning">Ver mas</Button>
      </Card.Body>
    </Card>
      </Col>
    </Row>
    </Container>
    <Row className="px-4 my-5">
        <Col sm={8}>
        <Image src="https://picsum.photos/900/400" fluid rounded />;
        </Col>
        <Col sm={4}>
        <h1>Ecuentra tu Iglesia</h1>
        <p>Fragmento 
          de un escrito con unidad temática, que queda diferenciado del resto 
          de fragmentos por un punto y aparte y generalmente también por llevar letra mayúscula inicial y un espacio en blanco en el margen izquierdo 
          de alineación del texto principal 
          de la primera línea</p>
          <Navbar className="justify-content-between">
          <Form inline>
              <Row>
              <Col xs="auto">
                <Form.Control
                  type="text"
                  placeholder="Search"
                  className=" mr-sm-2"
               />
               </Col>
              <Col xs="auto">
            <Button variant="warning">Buscar</Button>
             </Col>
              </Row>
          </Form>
         </Navbar>
      

        </Col>
      </Row>

      </main>
      <footer class= "py-5 my-5 bg-dark">
        <div>
         <Container className="px-4">
          <p class="text-center text-white">
            &copy; UnionBautistaBoliviana
          </p>

         </Container>
        </div>

      </footer>


    </div>
  );
}

export default App;
