import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { login } from "../../services";

import { useMutation } from 'react-query';

function Login() {

  const handleLoginSuccess = (data) => {
    console.log(data);
  };

  const { mutate, isLoading } = useMutation(login, {
    onSuccess: handleLoginSuccess,
  });

  const handleLogin = (e) => {
    e.preventDefault();
    let formData = new FormData(e.target);
    mutate(formData);
  };

  return (
    <Form onSubmit={handleLogin}>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" placeholder="Enter email" name="email" />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" placeholder="Password" name="password" />
      </Form.Group>
      <Button variant="primary" type="submit" disabled={isLoading}>
        Submit
      </Button>
    </Form>
  );
}

export default Login;
