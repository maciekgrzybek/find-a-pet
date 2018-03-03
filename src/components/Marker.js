import React, { Component } from "react";
import { connect } from "react-redux";
import { hoverAnimal } from "../actions/index";
import Icon from "./Icon";
import { Link } from "react-router-dom";

class Marker extends Component {
  render() {
    const markerStyleHover = {
      top: "-55px",
      transform: "scale(1.6)"
    };
    const style =
      this.props.$hover || this.props.id === this.props.hover
        ? markerStyleHover
        : null;

    return (
      <Link to={`/zwierzak/${this.props.adType}/${this.props.link}`}>
        <div
          className={`marker marker--${this.props.adType}`}
          style={style}
          onMouseEnter={() =>
            this.props.$hover ? this.props.hoverAnimal(this.props.id) : null
          }
          onMouseLeave={() =>
            this.props.$hover ? this.props.hoverAnimal(null) : null
          }>
          <Icon
            icon="mapMarker"
            class={`marker__icon marker--${this.props.adType}__icon`}
            width="30px"
            height="30px"
          />
        </div>
      </Link>
    );
  }
}

function mapStateToProps(state) {
  return {
    hover: state.hover
  };
}

export default connect(mapStateToProps, { hoverAnimal })(Marker);
