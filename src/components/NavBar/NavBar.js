import { NavLink } from 'react-router-dom';
import { Navbar, Container,Nav } from 'react-bootstrap';

const NavBar = () => {
  return(
    <Navbar bg="primary" variant="dark" sticky="top" className="rounded mb-3">
      <Container>
        <Navbar.Brand as={NavLink} to={'/'}>Waiter.App</Navbar.Brand>
        <Nav id="basic-navbar-nav" className='justify-content-end'>
            <Nav.Link as={NavLink} to={'/'}>Home</Nav.Link>
        </Nav>
      </Container>
    </Navbar>
  )
};

export default NavBar;