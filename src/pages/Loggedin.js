import React from "react";
import { Container } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

export default function Loggedin() {
  const navigate = useNavigate();

  const userInfo = localStorage.getItem("userInfo");

  const userData = JSON.parse(userInfo);
  console.log("Loggedindata", userData);

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
            <button
              onClick={() => {
                localStorage.removeItem("userInfo");
                navigate("/", { replace: true });
              }}
            >
              Log Out
            </button>
          </h4>
        </div>
      </Container>
    </div>
  );
}
