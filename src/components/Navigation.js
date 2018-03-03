import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import Icon from "./Icon";
import { connect } from "react-redux";
import NavItem from "../containers/NavItem";
import HamburgerIcon from "../containers/HamburgerIcon";

class Navigation extends Component {
  constructor(props) {
    super(props);
    this.state = {
      topBarClass: ""
    };

    this.navScroll = this.navScroll.bind(this);
  }
  componentDidMount() {
    window.document.body.addEventListener("scroll", this.navScroll);
  }
  componentWillUnmount() {
    window.document.body.removeEventListener("scroll", this.navScroll);
  }
  navScroll() {
    const { scrollTop } = window.document.body;
    if (scrollTop > 25) {
      this.setState({ topBarClass: "top-bar--scroll" });
    } else {
      this.setState({ topBarClass: "" });
    }
  }

  render() {
    const navClass = this.props.navigationVisibility
      ? "navigation--visible"
      : "";

    return (
      <div className="grid-container">
        <div
          className={`grid-x grid-padding-x top-bar ${
            this.state.topBarClass
          } align-middle`}
          ref="topbar">
          <div className="small-4 medium-shrink cell top-bar__logo">
            <NavLink to="/">
              <Icon icon="logo" width="75px" height="40px" />
            </NavLink>
          </div>
          <div className="small-8 medium-auto cell align-self-middle top-bar__menu">
            <HamburgerIcon />
            <ul className={`navigation ${navClass}`}>
              <NavItem>
                <NavLink exact to="/znajdz-zwierzaka">
                  Znajdz zwierzaka
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink exact to="/rodzaj-ogloszenia">
                  Dodaj ogłoszenie{" "}
                </NavLink>
              </NavItem>
              {/* <NavItem>							
									<NavLink exact to="/kontakt">Kontakt</NavLink>
								</NavItem> */}
            </ul>
          </div>
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    navigationVisibility: state.toggleNavigation
  };
}

export default connect(mapStateToProps)(Navigation);
