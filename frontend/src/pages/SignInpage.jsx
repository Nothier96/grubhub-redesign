import { Link } from "react-router-dom";
import Form from "react-bootstrap/Form";
import { Container } from "react-bootstrap";
import Footer from "../components/Footer";
import Navbar1 from "../components/Navbar1";
import "./signin.css";

function SignInpage() {
  return (
    <Container className="Dom1">
      <Navbar1 />
      <Form className="Dom">
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control type="email" placeholder="Enter email" />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" placeholder="Enter Password" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicCheckbox">
          <Form.Check type="checkbox" label="Keep me signed in" />
        </Form.Group>
        <Link to="/order">
          {" "}
          <input type="submit" value="Login" />{" "}
        </Link>
      </Form>
      <Footer />
    </Container>
  );
}

export default SignInpage;
