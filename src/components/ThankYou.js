import React, { Component } from "react";
import { NavLink } from 'react-router-dom';
import Button from './Button';

class ThankYou extends Component {
  render() {
    return (
      <div className="hero  hero--thank-you">
        <div className="grid-container">
          <div className="grid-x grid-padding-x hero__content">
            <div className="small-12 cell" />
            <div className="medium-8 large-6 large-offset-6 cell">
              <h1 className="hero__title">Twoje ogłoszenie zostalo dodane</h1>
              <p className="hero__text">
                Ogloszenie mozesz natychmiast zobaczyc na glownej mapie. Kliknij
                ponizej i sam zobacz!
              </p>
              <NavLink exact to="/znajdz-zwierzaka">
                <Button color="primary" label="Znajdz Zwierzaka" />
              </NavLink>
            </div>
            <div className="small-12 cell hero__footer">
              <p>Znajdz Zwierzaka 2017</p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default ThankYou;
