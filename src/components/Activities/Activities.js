import React, { useEffect, useState } from "react";
import Row from "react-bootstrap/Row";
import Activity from "../Activity/Activity";

const Activities = () => {
  const [activities, setActivities] = useState([]);
  const [list, setList] = useState([]);

  useEffect(() => {
    fetch("data.json")
      .then((res) => res.json())
      .then((data) => setActivities(data));
  }, []);

  const handleAddToList = (activity) => {
    // console.log(activity);
    const newList = [...list, activity];
    setList(newList);
  };

  return (
    <div>
      <h2 className="my-4">Today Activities</h2>
      <div>
        <Row xs={1} md={2} lg={3} className="g-4">
          {activities.map((activity) => (
            <Activity key={activity.id} activity={activity} handleAddToList={handleAddToList}></Activity>
          ))}
        </Row>
      </div>
    </div>
  );
};

export default Activities;
