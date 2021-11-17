import React from "react";
import { Container, Button } from "react-bootstrap";

import "./styles.css";

interface AuthProps {}

const Auth: React.FC<AuthProps> = () => {
  return (
    <div className="ctr">
      <Button variant="primary btn">Sign in</Button>
    </div>
  );
};

export default Auth;
