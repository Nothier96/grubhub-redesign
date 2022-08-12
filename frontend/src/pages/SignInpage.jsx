import {Link} from 'react-router-dom';

import Form from 'react-bootstrap/Form';


function SignInpage() {
  return (
    <Form>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" placeholder="Enter email" />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" placeholder="Password" />
      </Form.Group>
      { <Form.Group className="mb-3" controlId="formBasicCheckbox">
        <Form.Check type="checkbox" label="Keep me Signed In" />
      </Form.Group> }
      <Link to="/order">  <input type="submit" value="Login"/> </Link>
    </Form>
  );
}

export default SignInpage;

