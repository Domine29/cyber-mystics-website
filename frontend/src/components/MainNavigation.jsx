import axios from "axios";
import { Button } from "react-bootstrap";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { useNavigate } from "react-router-dom";

function MainNavigation(props) {
  const navigate = useNavigate();
  const logout = async() => {
    await axios.post('/api/logout').then((response)=>navigate('/'))
    }
  
  function userLogoutRender(user){
    return(
      <Navbar.Collapse className="justify-content-end">
         <Navbar.Text style={{paddingRight: '.5rem'}}><Nav.Link href="/account">Account</Nav.Link></Navbar.Text>
         <Button onClick={logout}>Logout</Button>
      </Navbar.Collapse>
     
    )
  }
  
  return (
    <>
      <Navbar expand="lg" className="CM-navbar">
        <Container>
          <Navbar.Brand href="/">Cyber Mystics</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
             { props.user && <Nav.Link href="/tarot">Tarot</Nav.Link> }       
            </Nav>
            <Nav className="me-auto">
             { props.user && <Nav.Link href="/dreams">Dreams</Nav.Link> }       
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
