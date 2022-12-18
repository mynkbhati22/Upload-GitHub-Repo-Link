import { Button, Container, Form } from "react-bootstrap";
import { Link } from "react-router-dom";

const URL = "http://localhost:8888";

export default function Login() {
  const handlelogin = (e) => {
    e.preventDefault();
    console.log("login successfully !!");
  };
  return (
    <Container className="my-5">
      <div className="login">
        <h2 className="text-center fw-bolder">LOGIN HERE</h2>
      </div>
      <Form onSubmit={handlelogin}>
        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Email address</Form.Label>
          <Form.Control type="email" placeholder="Enter email" required />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" placeholder="Password" required />
        </Form.Group>
        <Button variant="primary" type="submit">
          Login
        </Button>
      </Form>

      <div className="redirect">
        <p>
          Signup to create an account <Link to="/">Here</Link>
        </p>
      </div>
    </Container>
  );
}
