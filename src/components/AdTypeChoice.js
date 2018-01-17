import React from "react";
import { Link } from "react-router-dom";

const AdTypeChoice = props => {
  return (
    <div className="small-12 large-4 cell">
      <Link to={props.path}>
        <div className={`ads-type__choice ads-type__choice--${props.adType}`}>{props.label}</div>
      </Link>
    </div>
  );
};

export default AdTypeChoice;
