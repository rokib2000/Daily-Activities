import React from "react";
import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";
import { Button } from "react-bootstrap";

const Activity = (props) => {
  console.log(props);
  const { name, img, time } = props.activity;
  return (
    <div>
      <Col>
        <Card>
          <Card.Img variant="top" src={img} />
          <Card.Body>
            <Card.Title>{name}</Card.Title>
            <Card.Text>Time: {time} hours</Card.Text>
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
