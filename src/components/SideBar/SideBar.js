import React from "react";
import BreakButton from "../BreakButton/BreakButton";
import Profile from "../Profile/Profile";
import ActivitiesDetails from "../ActivitiesDetails/ActivitiesDetails";

const SideBar = () => {
  return (
    <div>
      <Profile></Profile>
      <BreakButton></BreakButton>
      <ActivitiesDetails></ActivitiesDetails>
    </div>
  );
};

export default SideBar;
