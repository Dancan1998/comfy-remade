import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { Card, Button, Form, Spinner, Alert } from "react-bootstrap";
import { Link } from "react-router-dom";
import { register } from "../actions/userActions";
import { useDispatch, useSelector } from "react-redux";

const Registerpage = ({ history }) => {
  const dispatch = useDispatch();

  const userRegister = useSelector((state) => state.userRegister);
  const {
    loading: loadingRegister,
    error: errorRegister,
    userInfo: userRegisterInfo,
  } = userRegister;

  const [email, setEmail] = useState("");
  const [first_name, setFirstName] = useState("");
  const [last_name, setLastName] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [fieldErrors, setFieldErrors] = useState({});

  const disableButton =
    !email?.length ||
    !first_name?.length ||
    !last_name?.length ||
    !password?.length ||
    !confirmPassword?.length;

  const handleSubmit = (e) => {
    e.preventDefault();
    setFieldErrors({});
    dispatch(register(email, first_name, last_name, password, confirmPassword));
  };

  useEffect(() => {
    if (errorRegister) {
      for (const item in errorRegister) {
        setFieldErrors({ ...fieldErrors, [item]: errorRegister[item][0] });
      }
    }
  }, [errorRegister]);

  useEffect(() => {
    if (userRegisterInfo && userRegisterInfo.data) {
      history.push("/login?redirect=shipping");
    }
  }, [userRegisterInfo, history]);

  return (
    <Wrapper className="page-100">
      <section>
        <Card style={{ width: "25rem" }}>
          <Card.Body>
            <Card.Title>Register</Card.Title>
            <Card.Text as="div">
              <Form onSubmit={handleSubmit}>
                <Form.Group controlId="email">
                  <Form.Label>Email Address</Form.Label>
                  <Form.Control
                    type="email"
                    name="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Enter email"
                  ></Form.Control>
                  {fieldErrors.email && (
                    <Alert variant="danger" className="mt-2">
                      {fieldErrors.email}
                    </Alert>
                  )}
                </Form.Group>

                <Form.Group controlId="first_name">
                  <Form.Label>First Name</Form.Label>
                  <Form.Control
                    name="first_name"
                    type="text"
                    value={first_name}
                    onChange={(e) => setFirstName(e.target.value)}
                    placeholder="First Name"
                  />
                  {fieldErrors.first_name && (
                    <Alert variant="danger" className="mt-2">
                      {fieldErrors.first_name}
                    </Alert>
                  )}
                </Form.Group>

                <Form.Group controlId="last_name">
                  <Form.Label>Last Name</Form.Label>
                  <Form.Control
                    type="text"
                    name="last_name"
                    value={last_name}
                    onChange={(e) => setLastName(e.target.value)}
                    placeholder="Last Name"
                  />
                  {fieldErrors.last_name && (
                    <Alert variant="danger" className="mt-2">
                      {fieldErrors.last_name}
                    </Alert>
                  )}
                </Form.Group>

                <Form.Group controlId="password">
                  <Form.Label>Password</Form.Label>
                  <Form.Control
                    type="password"
                    name="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="Enter Password"
                  />
                  {fieldErrors.password && (
                    <Alert variant="danger" className="mt-2">
                      {fieldErrors.password}
                    </Alert>
                  )}
                </Form.Group>

                <Form.Group controlId="password1">
                  <Form.Label>Confirm Password</Form.Label>
                  <Form.Control
                    type="password"
                    name="password1"
                    value={confirmPassword}
                    onChange={(e) => setConfirmPassword(e.target.value)}
                    placeholder="Confirm Password"
                  />
                  {fieldErrors.password1 && (
                    <Alert variant="danger" className="mt-2">
                      {fieldErrors.password1}
                    </Alert>
                  )}
                </Form.Group>
                {loadingRegister ? (
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
                    Register
                  </Button>
                )}
              </Form>
            </Card.Text>
          </Card.Body>
        </Card>
        <Card style={{ width: "25rem" }} className="mt-2">
          <Card.Body>
            <Card.Text as="div">
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

export default Registerpage;
