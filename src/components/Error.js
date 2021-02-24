import React from "react";
import { Alert } from "react-bootstrap";
const Error = ({ variant, children }) => {
  return (
    <Alert variant={variant} className="section section-center text-center">
      <h2>{children}</h2>
    </Alert>
  );
};

Error.defaultProps = {
  variant: "info",
};

export default Error;
