import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";

import "./styles.css";

interface HeaderProps {
  leftTitle?: string;
  centerTitle?: string;
  isUser: boolean;
}

const Header: React.FC<HeaderProps> = ({
  leftTitle,
  centerTitle,
  isUser = false,
}) => {
  return (
    <Container className="header-container">
      <Row className="justify-content-md-flex-end header-row">
        <Col xs={4}>{leftTitle}</Col>
        <Col xs={4}>{centerTitle}</Col>
        <Col xs={4} className=".btn-container header-col">
          <Button variant="primary header-btn" size="sm">
            {isUser ? "loggout" : "login"}
          </Button>
        </Col>
      </Row>
    </Container>
  );
};

export default Header;
