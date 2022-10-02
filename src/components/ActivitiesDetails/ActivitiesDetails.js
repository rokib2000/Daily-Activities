import React from "react";
import ListGroup from "react-bootstrap/ListGroup";
import { Button } from "react-bootstrap";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const ActivitiesDetails = (props) => {
  const { list, time } = props;
  let total = 0;
  for (const activity of list) {
    total = total + activity.time;
  }

  const notify = () => toast("activity has been completed!");

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
          <h6>{time} minutes</h6>
        </ListGroup.Item>
      </ListGroup>
      <div className="d-grid gap-2 mt-3">
        <Button onClick={notify} variant="warning">
          Activity Completed
        </Button>
        <ToastContainer />
      </div>
    </div>
  );
};

export default ActivitiesDetails;
