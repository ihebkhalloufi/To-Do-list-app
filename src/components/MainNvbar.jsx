import './MainNavbar.css';
import {Nav,Navbar,Container}from "react-bootstrap"

const MainNavbar = () => {
    return (
       <Navbar className='Nav' bg="primary" variant="dark">
   <Container>
   <Navbar.Brand href="#home"></Navbar.Brand>
   <h4 className='title'> Wellcome in To Do Liste</h4>
   <Nav className="me-auto">
    
   </Nav>
   </Container>
 </Navbar>
    )
}

export default MainNavbar
