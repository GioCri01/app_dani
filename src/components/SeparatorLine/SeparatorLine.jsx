import React from "react";
import "./SeparatorLine.css";

const SeparatorLine = ({ sectionName }) => {
  return <div className="SeparatorLine">
    <h1>{sectionName}</h1>
  </div>;
};

export default SeparatorLine;
