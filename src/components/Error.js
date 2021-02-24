import React from "react";
import Alert from "react-bootstrap/Alert";

const Error = ({ variant, children }) => {
  return (
    <Alert variant={variant} className="section section-center text-center">
      <h4>{children}</h4>
    </Alert>
  );
};

Error.defaultProps = {
  variant: "info",
};

export default Error;

// className = "section section-center text-center";
