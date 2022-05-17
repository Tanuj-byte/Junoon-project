import React from 'react'
import { Carousel ,Navbar,Nav,Container,Button} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.css';
import './carousel.css';
function carousel() {
  return (
    <div>
      <Navbar className='navbar' >
        <Container>
          <img
              className="junoon-logo"
              src="https://junoonnsut.com/style/images/junoon-white.png"
              alt="Second slide"
          />
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto nav-all">
              <Nav.Link className='nav-text1' href="#home">Home</Nav.Link>
              <Nav.Link className='nav-text' href="#link">Instagram</Nav.Link>
               <Nav.Link className='nav-text' href="#home">About</Nav.Link>
              <Nav.Link  className='nav-text'href="#link">Collection</Nav.Link>
               <Nav.Link className='nav-text' href="#home">Timeline</Nav.Link>
              <Nav.Link className='nav-text' href="#link">Contact</Nav.Link>
              <Nav.Link className='nav-text' href="#link">f</Nav.Link>
              
           
             
              
            </Nav>
          </Navbar.Collapse>
        </Container>
        
      </Navbar>
      <div className='heading'>
          <div className='JUNOON'>
            JUNOON<br></br>
        </div>
        
          <div className='The-photography'>
            The Photography Club of NSUT
            </div>
      
      </div>
       <Button className='see-our-work' variant="light">SEE OUR WORKS</Button>
      <Carousel fade>
        
  <Carousel.Item>
    <img
      className="image"
      src="https://junoonnsut.com/style/images/h7.jpg"
      alt="First slide"
    />
    
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="image"
      src="https://junoonnsut.com/style/images/h1.jpg"
      alt="Second slide"
    />

    
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="image"
      src="https://junoonnsut.com/style/images/h9.jpg"
      alt="Third slide"
    />

    
  </Carousel.Item>
</Carousel>
    </div>
  )
}

export default carousel;