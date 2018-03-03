import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchAnimal } from "../actions/index";
import Footer from "../components/Footer";
import Icon from "./Icon";
import GoogleMapReact from "google-map-react";
import { GOOGLE_MAPS_API_KEY, GOOGLE_MAPS_LANG } from "../constants/googleMaps";
import createMapOptions from "../helpers/MapStyles";
import Marker from "../components/Marker";
import { capitalizeFirstLetter } from "../helpers/functions";

class SelectedAnimal extends Component {
  componentDidMount() {
    const { id } = this.props.match.params;
    this.props.fetchAnimal(id);
  }
  render() {
    const { animal } = this.props;
    if (!animal) {
      return <div>Loading</div>;
    }
    return (
      <div>
        <div className="selected-container">
          <div className="grid-container">
            <div className="grid-x grid-margin-x">
              <div className="small-12 medium-6 large-5 cell selected-left">
                <div className="selected-image">
                  <img src={animal.url.medium} alt="Zwierzak" />
                </div>
                <div className="selected-map">
                  <div className="content">
                    <GoogleMapReact
                      bootstrapURLKeys={{
                        key: GOOGLE_MAPS_API_KEY,
                        language: GOOGLE_MAPS_LANG
                      }}
                      center={{
                        lat: animal.location.lat,
                        lng: animal.location.lng
                      }}
                      zoom={10}
                      options={createMapOptions}>
                      <Marker
                        id={animal.location.lat}
                        adType={animal.adType}
                        url={animal.url}
                        lat={animal.location.lat}
                        lng={animal.location.lng}
                      />
                    </GoogleMapReact>
                  </div>
                </div>
              </div>
              <div className="small-12 medium-6 large-7 cell  selected-right">
                <h1>{animal.title} </h1>
                <div className="selected-icon-container">
                  <Icon
                    icon="date"
                    class={`card__icon marker__icon marker--${
                      animal.adType
                    }__icon`}
                    width="15px"
                    height="15px"
                  />
                  <p>{animal.date}</p>
                </div>
                <div className="selected-icon-container">
                  <Icon
                    icon="mapMarker"
                    class={`card__icon marker__icon marker--${
                      animal.adType
                    }__icon`}
                    width="15px"
                    height="15px"
                  />
                  <p>
                    {capitalizeFirstLetter(animal.location.city)}{" "}
                    {animal.location.street
                      ? `, ul.
                      ${capitalizeFirstLetter(animal.location.street)}`
                      : null}
                  </p>
                </div>
                <div className="selected-icon-container">
                  <Icon
                    icon="email"
                    class={`card__icon marker__icon`}
                    width="15px"
                    height="15px"
                  />
                  <p>{animal.email}</p>
                </div>
                <div className="selected-icon-container">
                  <Icon
                    icon="phone"
                    class={`card__icon marker__icon`}
                    width="15px"
                    height="15px"
                  />
                  <p>{animal.phone}</p>
                </div>
                <div>
                  <p className="selected-description">{animal.description}</p>
                </div>
                <div />
              </div>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    animal: state.animals[ownProps.match.params.id]
  };
};

export default connect(mapStateToProps, { fetchAnimal })(SelectedAnimal);
