import React from "react";
import Row from "react-bootstrap/Row";
import Activity from "../Activity/Activity";

const Activities = () => {
  return (
    <div>
      <h2 className="my-4">Today Activities</h2>
      <div>
        <Row xs={1} md={3} className="g-4">
          <Activity></Activity>
        </Row>
      </div>
    </div>
  );
};

export default Activities;
