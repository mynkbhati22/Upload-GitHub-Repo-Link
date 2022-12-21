import axios from "axios";
import { useState } from "react";
import { Button, Container, Form } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";

const URL = "http://localhost:8888";

export default function Login() {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [showPassword, setShowPasword] = useState(false);

  const navigate = useNavigate();

  //   FOR SHOWING PASSWORD

  const handleShowPassword = () => {
    setShowPasword(!showPassword);
  };

  const handlelogin = async (e) => {
    e.preventDefault();
    try {
      const config = {
        headers: {
          "Content-type": "application/json",
        },
      };
      const { data } = await axios.post(
        `${URL}/api/login`,
        {
          Email: email,
          password: password,
        },
        config
      );
      console.log("logindata : ", data);
      navigate("/dashboard");
      localStorage.setItem("userInfo", JSON.stringify(data));
    } catch (error) {
      console.log(error.request.response);
    }
  };
  return (
    <Container className="my-5">
      <div className="login">
        <h2 className="text-center fw-bolder">LOGIN HERE</h2>
      </div>
      <Form onSubmit={handlelogin}>
        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Email address</Form.Label>
          <Form.Control
            type="email"
            placeholder="Enter email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </Form.Group>

        <Form.Group
          className="mb-3 position-relative"
          controlId="formBasicPassword"
        >
          <Form.Label>Password</Form.Label>
          <Form.Control
            type={showPassword ? "text" : "password"}
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <Button
            variant="info"
            onClick={() => handleShowPassword()}
            className="showhidebutton"
          >
            {" "}
            {showPassword ? "Hide" : "Show"}
          </Button>
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
