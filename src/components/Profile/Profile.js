import React from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import ListGroup from "react-bootstrap/ListGroup";
import ProfileImage from "../../image/profile.png";

const Profile = () => {
  return (
    <div className="">
      <h3 className="my-4">Profile</h3>
      <Row className="align-items-center">
        <Col xs={4} sm={2} md={4} lg={2}>
          <img className="img-fluid" src={ProfileImage} alt="" />
        </Col>
        <Col xs={8} sm={10} md={8} lg={10}>
          <h5>Md Nazrul Islam Rokib</h5>
          <p className="mb-0">Dhaka, Bangladesh</p>
        </Col>
      </Row>
      <br />

      <ListGroup horizontal className="text-center ">
        <ListGroup.Item className="bg-light">
          <p>50kg</p>
          <h5>Weight</h5>
        </ListGroup.Item>
        <ListGroup.Item className="bg-light">
          <p>5'4"</p>
          <h5>Height</h5>
        </ListGroup.Item>
        <ListGroup.Item className="bg-light">
          <p>22years</p>
          <h5>Age</h5>
        </ListGroup.Item>
      </ListGroup>
    </div>
  );
};

export default Profile;
