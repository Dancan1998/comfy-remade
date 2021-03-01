import React from "react";
import styled from "styled-components";
import { Card, Form } from "react-bootstrap";
import { Link } from "react-router-dom";

const LoginPage = () => {
  return (
    <Wrapper className="page-100">
      <section>
        <Card style={{ width: "22rem" }}>
          <Card.Body>
            <Card.Title>Register</Card.Title>
            <Card.Text>
              <Form>
                <Form.Group controlId="email">
                  <Form.Label>Email Address</Form.Label>
                  <Form.Control
                    type="email"
                    placeholder="Enter email"
                  ></Form.Control>
                </Form.Group>

                <Form.Group controlId="first_name">
                  <Form.Label>First Name</Form.Label>
                  <Form.Control type="text" placeholder="First Name" />
                </Form.Group>

                <Form.Group controlId="last_name">
                  <Form.Label>Last Name</Form.Label>
                  <Form.Control type="text" placeholder="Last Name" />
                </Form.Group>

                <Form.Group controlId="password">
                  <Form.Label>Password</Form.Label>
                  <Form.Control type="password" placeholder="Enter Password" />
                </Form.Group>

                <Form.Group controlId="password1">
                  <Form.Label>Confirm Password</Form.Label>
                  <Form.Control
                    type="password"
                    placeholder="Confirm Password"
                  />
                </Form.Group>

                <button className="btn auth-btn" type="submit">
                  Register
                </button>
              </Form>
            </Card.Text>
          </Card.Body>
        </Card>
        <Card style={{ width: "22rem" }} className="mt-2">
          <Card.Body>
            <Card.Text>
              <h6>Already have an account ? </h6>{" "}
              <Link to="/login" className="btn auth-btn">
                Login
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
