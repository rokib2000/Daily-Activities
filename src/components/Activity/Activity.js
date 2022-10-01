import React from "react";
import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";
import { Button } from "react-bootstrap";

const Activity = () => {
  return (
    <div>
      <Col>
        <Card>
          <Card.Img variant="top" src="holder.js/100px160" />
          <Card.Body>
            <Card.Title>Card title</Card.Title>
            <Card.Text>
              This is a longer card with supporting text below as a natural lead-in to additional content. This content
              is a little bit longer.
            </Card.Text>
            <div className="d-grid gap-2">
              <Button variant="primary">Add to list</Button>
            </div>
          </Card.Body>
        </Card>
      </Col>
    </div>
  );
};

export default Activity;
