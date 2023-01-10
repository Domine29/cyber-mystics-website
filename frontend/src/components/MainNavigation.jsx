import axios from "axios";
import { Button } from "react-bootstrap";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { useNavigate } from "react-router-dom";
import "./MainNavigation.css";

function MainNavigation(props) {
  const navigate = useNavigate();
  const logout = async () => {
    await axios.post("/api/logout").then((response) => navigate("/"));
  };

  function userLogoutRender(user) {
    return (
      <Navbar.Collapse className="justify-content-end">
        <Navbar.Text style={{ paddingRight: ".5rem" }}>
          <Nav.Link href="/account">Account</Nav.Link>
        </Navbar.Text>
        <Button onClick={logout} variant="danger">
          Logout
        </Button>
      </Navbar.Collapse>
    );
  }

  return (
    <>
      <header>
        <a href="#">
          <img
            href="/"
            className="cm-logo"
            src="/static/hero-page/cm-logo.svg"
          />
        </a>

        <nav>
          <ul>
            <li>
              <a href="/" className="active">
                HOME
              </a>
            </li>
            <li>
              <a href="/journal">JOURNAL</a>
            </li>
            <li>
              <a href="/dream">DREAM</a>
            </li>
            <li>
              <a href="/tarot">TAROT</a>
            </li>
            {props.user && (
              <li>
                <a href="/account">ACCOUNT</a>
              </li>
            )}
            {props.user ? (
              <li style={{cursor: "pointer"}}>
                <a onClick={logout}>LOGOUT</a>
              </li>
            ) : (
              <li>
                <a href="/login">LOGIN</a>
              </li>
            )}
          </ul>
        </nav>
      </header>
    </>
  );
}

export default MainNavigation;
