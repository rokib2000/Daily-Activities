import React from "react";
import ListGroup from "react-bootstrap/ListGroup";

const ActivitiesDetails = (props) => {
  const { list } = props;
  let total = 0;
  for (const activity of list) {
    total = total + activity.time;
  }

  return (
    <div>
      <h3 className="my-4">Activities Details</h3>
      <ListGroup horizontal className="text-center ">
        <ListGroup.Item className="bg-light">
          <h6>Activities Time:</h6>
        </ListGroup.Item>
        <ListGroup.Item className="bg-light">
          <h6> {total} hours</h6>
        </ListGroup.Item>
      </ListGroup>
      <br />
      <ListGroup horizontal className="text-center w-100">
        <ListGroup.Item className="bg-light">
          <h6>Activities Break:</h6>
        </ListGroup.Item>
        <ListGroup.Item className="bg-light">
          <h6>{props.time} minutes</h6>
        </ListGroup.Item>
      </ListGroup>
    </div>
  );
};

export default ActivitiesDetails;
