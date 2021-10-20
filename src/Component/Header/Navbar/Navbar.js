import React from 'react';
import { Button, Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import useAuth from './../../hooks/useAuth';


const Header = () => {
  const { users, logOut } = useAuth();
  return (
    <>
      <Navbar className="py-3" bg="light" variant="" sticky="top" collapseOnSelect expand="lg" >
        <Container>
          <Navbar.Brand href="#home"> <b className='text-dark'>Optic Custody</b> </Navbar.Brand>
          <Navbar.Toggle />
          <Navbar.Collapse className="justify-content-end">
            <Nav.Link className='text-dark' as={Link} to="/">Home</Nav.Link>
            <Nav.Link className='text-dark' as={Link} to="/treatments">Treatments</Nav.Link>
            <Nav.Link className='text-dark' as={Link} to="/about">About</Nav.Link>

            {users?.email ?
              <Button onClick={logOut} variant="success">Logout</Button> :
              <Nav.Link as={Link} to="/login">Login</Nav.Link>}
            <Navbar.Text className="ms-5">
              <b>Signed in as:</b> <a className="text-decoration-none ms-2 text-secondary" href="#login">{users?.displayName}</a>
            </Navbar.Text>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};

export default Header;