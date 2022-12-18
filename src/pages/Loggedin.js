import React from "react";
import { Container } from "react-bootstrap";

export default function Loggedin({ URL }) {
  return (
    <div>
      <Container className="my-5">
        <div className="userdashboard">
          <h2 className="text-center fw-bolder">USER DASHBOARD</h2>
        </div>
        <div className="loggedin">
          <p className="text-center">
            Congrats! you have logged in successfully
          </p>
        </div>
        <div className="logged out">
          <h4 className="text-center fw-bold">
            <button>Log Out</button>
          </h4>
        </div>
      </Container>
    </div>
  );
}
