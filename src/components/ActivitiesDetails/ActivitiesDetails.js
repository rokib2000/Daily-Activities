import React from "react";
import ListGroup from "react-bootstrap/ListGroup";

const ActivitiesDetails = () => {
  return (
    <div>
      <h3 className="my-4">Activities Details</h3>
      <ListGroup horizontal className="text-center ">
        <ListGroup.Item className="bg-light">
          <h6>Activities Time:</h6>
        </ListGroup.Item>
        <ListGroup.Item className="bg-light">
          <h6>00</h6>
        </ListGroup.Item>
      </ListGroup>
      <br />
      <ListGroup horizontal className="text-center w-100">
        <ListGroup.Item className="bg-light">
          <h6>Activities Break:</h6>
        </ListGroup.Item>
        <ListGroup.Item className="bg-light">
          <h6>00</h6>
        </ListGroup.Item>
      </ListGroup>
    </div>
  );
};

export default ActivitiesDetails;
