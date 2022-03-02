import { Avatar } from "@material-ui/core";
import React from "react";
import "./Sidebar.css";
import linkedInBackground from "../src/images/linkedIn-Background.jpg";

function Sidebar() {
  // function to render recent items
  const recentItem = (topic) => (
    <div className="sidebar__recentitem">
      <span className="sidebar__hash">#</span>
      <p>{topic}</p>
    </div>
  );
  return (
    <div className="sidebar">
      <div className="sidebar__top">
        <img src={linkedInBackground} alt="" />
        <Avatar className="sidebar__avatar" />
        <h2>Douglas Obara</h2>
        <h4>douglasobara97@gmail.com</h4>
      </div>

      <div className="sidebar__stats">
        <div className="sidebar__stat">
          <p>Who viewed you</p>
          <p className="sidebar__statNumber">2,543</p>
        </div>
        <div className="sidebar__stat">
          <p>Views on post</p>
          <p className="sidebar__statNumber">2,448</p>
        </div>
      </div>

      <div className="sidebar__bottom">
        <p>Recent</p>
        {recentItem("reactJs")}
        {recentItem("programming")}
        {recentItem("softwareengineering")}
        {recentItem("design")}
        {recentItem("developer")}
      </div>
    </div>
  );
}

export default Sidebar;
