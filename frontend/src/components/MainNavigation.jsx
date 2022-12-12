import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

function MainNavigation() {
  return (
    <>
      <Navbar expand="lg" className="CM-navbar">
        <Container>
          <Navbar.Brand href="/">Cyber Mystics</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="/about">About</Nav.Link>
              <Nav.Link href="/cards">Cards</Nav.Link>
              <Nav.Link href="/readings">Readings</Nav.Link>
              <Nav.Link href="/notes">Notes</Nav.Link>
            </Nav>
          </Navbar.Collapse>
          <Navbar.Collapse className="justify-content-end">
            <Navbar.Text>
              <Nav.Link href="/login">Login</Nav.Link>
            </Navbar.Text>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
}

export default MainNavigation;
