import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { Card, Form, Button, Spinner, Alert } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { login } from "../actions/userActions";

const LoginPage = ({ history, location }) => {
  const dispatch = useDispatch();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const userLogin = useSelector((state) => state.userLogin);
  const { loading, error, userInfo } = userLogin;

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(login(email, password));
  };

  const disableButton = !email?.length || !password?.length;

  const redirect = location.search ? location.search.split("=")[1] : "/";

  useEffect(() => {
    if (userInfo) {
      if (userInfo.data) {
        history.push(redirect);
      }
    }
  }, [history, userInfo, redirect]);

  return (
    <Wrapper className="page-100">
      <section>
        <Card style={{ width: "22rem" }}>
          <Card.Body>
            <Card.Title>Login</Card.Title>
            <Card.Text as="div">
              <Form onSubmit={handleSubmit}>
                {error && <Alert variant="danger">{error.detail}</Alert>}
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
                {loading ? (
                  <Button disabled className="btn auth-btn">
                    <Spinner
                      as="span"
                      animation="grow"
                      size="sm"
                      role="status"
                      aria-hidden="true"
                    />
                    Loading...
                  </Button>
                ) : (
                  <Button
                    disabled={disableButton}
                    className="btn auth-btn"
                    type="submit"
                  >
                    Login
                  </Button>
                )}
              </Form>
            </Card.Text>
          </Card.Body>
        </Card>
        <Card style={{ width: "22rem" }} className="mt-2">
          <Card.Body>
            <Card.Text as="div">
              <h6>Need an account ? </h6>
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
