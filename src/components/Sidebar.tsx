import React from "react";

const SideIcon = ({ icon }) => {
  <div className="sidebar-icon"> {icon} </div>;
};

const SideBar = () => {
  return (
    <div className="fixed top-0 left-0 flex flex-col w-16 h-screen text-black bg-gray-500">
      <ul>
        <li>A</li>
        <li>V</li>
        <li>s</li>
        <li>cs</li>
        <li>r5</li>
        <li>32</li>
      </ul>
    </div>
  );
};

export default {
  SideBar,
  SideIcon,
};
