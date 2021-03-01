import React, { useState } from "react";
import styled from "styled-components";
import { Card, Form } from "react-bootstrap";
import { Link } from "react-router-dom";

const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
  };
  return (
    <Wrapper className="page-100">
      <section>
        <Card style={{ width: "22rem" }}>
          <Card.Body>
            <Card.Title>Login</Card.Title>
            <Card.Text>
              <Form onSubmit={handleSubmit}>
                <Form.Group controlId="email">
                  <Form.Label>Email Address</Form.Label>
                  <Form.Control
                    type="email"
                    placeholder="Enter email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  ></Form.Control>
                </Form.Group>
                <Form.Group controlId="password">
                  <Form.Label>Password</Form.Label>
                  <Form.Control
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="Enter Password"
                  />
                </Form.Group>
                <button className="btn auth-btn" type="submit">
                  Login
                </button>
              </Form>
            </Card.Text>
          </Card.Body>
        </Card>
        <Card style={{ width: "22rem" }} className="mt-2">
          <Card.Body>
            <Card.Text>
              <h6>Need an account ? </h6>{" "}
              <Link to="/register" className="btn auth-btn">
                Register
              </Link>
            </Card.Text>
          </Card.Body>
        </Card>
      </section>
    </Wrapper>
  );
};

const Wrapper = styled.main`
  background: var(--clr-primary-10);
  display: flex;
  justify-content: center;
  align-items: center;
  h1 {
    font-size: 10rem;
  }
  h3 {
    text-transform: none;
    margin-bottom: 2rem;
  }
  .auth-btn {
    font-size: 0.7rem;
    width: 100%;
  }
`;

export default LoginPage;
