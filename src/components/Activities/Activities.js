import React, { useEffect, useState } from "react";
import Row from "react-bootstrap/Row";
import Activity from "../Activity/Activity";
import Col from "react-bootstrap/Col";
import QueAns from "../QueAns/QueAns";
import Profile from "../Profile/Profile";
import BreakButton from "../BreakButton/BreakButton";
import ActivitiesDetails from "../ActivitiesDetails/ActivitiesDetails";

const Activities = () => {
  const [activities, setActivities] = useState([]);
  const [list, setList] = useState([]);
  const [time, setTime] = useState([]);
  useEffect(() => {
    fetch("data.json")
      .then((res) => res.json())
      .then((data) => setActivities(data));
  }, []);

  const handleAddToList = (selectActivity) => {
    let newList = [];

    newList = [...list, selectActivity];

    setList(newList);
  };

  const handleClick = (breakTime) => {
    const newTime = breakTime;
    setTime(newTime);
  };

  return (
    <div>
      <Row>
        <Col xs={{ span: 12, order: 2 }} md={{ span: 8, order: 1 }} className="bg-light">
          <h2 className="my-4">Today Activities</h2>
          <div>
            <Row xs={1} md={2} lg={3} className="g-4">
              {activities.map((activity) => (
                <Activity key={activity.id} activity={activity} handleAddToList={handleAddToList}></Activity>
              ))}
            </Row>
          </div>
          <QueAns></QueAns>
        </Col>
        <Col xs={{ span: 12, order: 1 }} md={{ span: 4, order: 2 }}>
          <div className="sticky-top">
            <hr className="m-0 p-0 border-top-0" />
            <Profile></Profile>
            <BreakButton handleClick={handleClick}></BreakButton>
            <ActivitiesDetails list={list} time={time}></ActivitiesDetails>

            <hr className="mb-5 p-0 border-top-0" />
          </div>
        </Col>
      </Row>
    </div>
  );
};

export default Activities;
