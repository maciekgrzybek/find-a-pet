import React from "react";
import Icon from "./Icon";

const AddMarker = ({ adType }) => {
  return (
    <div className={`marker marker--${adType}`}>
      <Icon
        icon="mapMarker"
        class={`marker__icon marker--${adType}__icon`}
        width="30px"
        height="30px"
      />
    </div>
  );
};

export default AddMarker;
