import React, { useState } from "react";
import styled from "styled-components";
import { Card, Form } from "react-bootstrap";
import { Link } from "react-router-dom";
import { register } from "../actions/userActions";
import { useDispatch, useSelector } from "react-redux";

const Registerpage = () => {
  const dispatch = useDispatch();

  const userRegister = useSelector((state) => state.userRegister);
  const {
    loading: loadingRegister,
    error: loadingError,
    userInfo: userRegisterInfo,
  } = userRegister;

  const [email, setEmail] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const disableButton =
    !email?.length ||
    !firstName?.length ||
    !lastName?.length ||
    !password?.length ||
    !confirmPassword?.length;

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(register(email, firstName, lastName, password, confirmPassword));
  };

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
                </Form.Group>

                <Form.Group controlId="first_name">
                  <Form.Label>First Name</Form.Label>
                  <Form.Control
                    name="first_name"
                    type="text"
                    value={firstName}
                    onChange={(e) => setFirstName(e.target.value)}
                    placeholder="First Name"
                  />
                </Form.Group>

                <Form.Group controlId="last_name">
                  <Form.Label>Last Name</Form.Label>
                  <Form.Control
                    type="text"
                    name="last_name"
                    value={lastName}
                    onChange={(e) => setLastName(e.target.value)}
                    placeholder="Last Name"
                  />
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
                </Form.Group>

                <button
                  disabled={disableButton}
                  className="btn auth-btn"
                  type="submit"
                >
                  Register
                </button>
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
