import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { Card, Button, Form, Spinner, Alert } from "react-bootstrap";
import { Link } from "react-router-dom";
import { shipping } from "../actions/userActions";
import { useDispatch, useSelector } from "react-redux";

const ShippingProfilePage = ({ history }) => {
  const dispatch = useDispatch();

  const shippingProfile = useSelector((state) => state.shippingProfile);
  const { loading, error, shippingInfo } = shippingProfile;

  const [county, setCounty] = useState("");
  const [town, setTown] = useState("");
  const [contact, setContact] = useState("");
  const [fieldErrors, setFieldErrors] = useState({});

  const disableButton = !county?.length || !town?.length || !contact?.length;

  const handleSubmit = (e) => {
    e.preventDefault();
    setFieldErrors({});
    dispatch(shipping(county, town, contact));
  };

  useEffect(() => {
    if (error) {
      for (const item in error) {
        setFieldErrors({ ...fieldErrors, [item]: error[item][0] });
      }
    }
  }, [error]);

  useEffect(() => {
    if (shippingInfo && shippingInfo.data) {
      history.push("/");
    }
  }, [shippingInfo, history]);

  return (
    <Wrapper className="page-100">
      <section>
        <Card style={{ width: "25rem" }}>
          <Card.Body>
            <Card.Title>Shipping Address</Card.Title>
            <Card.Text as="div">
              <Form onSubmit={handleSubmit}>
                <Form.Group controlId="county">
                  <Form.Label>County</Form.Label>
                  <Form.Control
                    type="text"
                    name="county"
                    value={county}
                    onChange={(e) => setCounty(e.target.value)}
                    placeholder="Enter County"
                  ></Form.Control>
                  {fieldErrors.county && (
                    <Alert variant="danger" className="mt-2">
                      {fieldErrors.county}
                    </Alert>
                  )}
                </Form.Group>

                <Form.Group controlId="town">
                  <Form.Label>Town</Form.Label>
                  <Form.Control
                    name="town"
                    type="text"
                    value={town}
                    onChange={(e) => setTown(e.target.value)}
                    placeholder="Town of residence"
                  />
                  {fieldErrors.town && (
                    <Alert variant="danger" className="mt-2">
                      {fieldErrors.town}
                    </Alert>
                  )}
                </Form.Group>

                <Form.Group controlId="contact">
                  <Form.Label>Phone No</Form.Label>
                  <Form.Control
                    type="number"
                    name="contact"
                    value={contact}
                    onChange={(e) => setContact(e.target.value)}
                    placeholder="Phone no: 07xxxxxxxx"
                  />
                  {fieldErrors.contact && (
                    <Alert variant="danger" className="mt-2">
                      {fieldErrors.contact}
                    </Alert>
                  )}
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
                    Submit
                  </Button>
                )}
              </Form>
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

export default ShippingProfilePage;
