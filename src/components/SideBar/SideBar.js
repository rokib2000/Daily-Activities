import React from "react";
import BreakButton from "../BreakButton/BreakButton";
import Profile from "../Profile/Profile";
import ActivitiesDetails from "../ActivitiesDetails/ActivitiesDetails";

const SideBar = () => {
  return (
    <div className="sticky-top">
      <hr className="m-0 p-0 border-top-0" />
      <Profile></Profile>
      <BreakButton></BreakButton>
      <ActivitiesDetails></ActivitiesDetails>

      <hr className="mb-5 p-0 border-top-0" />
    </div>
  );
};

export default SideBar;
