import axios from "axios";
import { Button } from "react-bootstrap";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

const logout = async() => {
  let res = await axios.post('/api/logout')
  window.location.reload()
  }

function userLogoutRender(user){
  return(
    <Navbar.Collapse className="justify-content-end">
       <Navbar.Text>{user}</Navbar.Text>
       <Button onClick={logout}>Logout</Button>
    </Navbar.Collapse>
   
  )
}

function MainNavigation(props) {
  return (
    <>
      <Navbar expand="lg" className="CM-navbar">
        <Container>
          <Navbar.Brand href="/">Cyber Mystics</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="/notes">Notes</Nav.Link>
            </Nav>
          </Navbar.Collapse>
          <Navbar.Collapse className="justify-content-end">
            {props.user
              ? userLogoutRender(props.user)
              : <Navbar.Text><Nav.Link href="/login">Login</Nav.Link></Navbar.Text>}
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
}

export default MainNavigation;
