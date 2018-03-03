import React, { Component } from "react";
import { connect } from "react-redux";
import GoogleMapReact from "google-map-react";
import Marker from "../components/Marker";
import { fetchAnimals, setMapBounds, setMapDimensions } from "../actions/index";
import _ from "lodash";
import { GOOGLE_MAPS_API_KEY, GOOGLE_MAPS_LANG } from "../constants/googleMaps";
import createMapOptions from "../helpers/MapStyles";
import animalsSelector from "../selectors/animalsSelector";

createMapOptions(false, false);

class MainMap extends Component {
  componentDidMount() {
    this.props.fetchAnimals();
  }

  _renderAnimalMarkers() {
    return _.map(this.props.animals, (animal, key) => {
      return (
        <Marker
          key={key}
          id={key}
          link={animal.id}
          adType={animal.adType}
          url={animal.url}
          lat={animal.location.lat}
          lng={animal.location.lng}
        />
      );
    });
  }

  render() {
    return (
      <GoogleMapReact
        bootstrapURLKeys={{
          key: GOOGLE_MAPS_API_KEY,
          language: GOOGLE_MAPS_LANG
        }}
        center={this.props.mapCenter.center}
        zoom={this.props.mapCenter.zoom}
        options={createMapOptions}
        onChange={({ bounds, size }) => {
          this.props.setMapBounds(bounds);
          this.props.setMapDimensions(size);
        }}>
        {this._renderAnimalMarkers()}
      </GoogleMapReact>
    );
  }
}

function mapStateToProps(state) {
  return {
    animals: animalsSelector(state),
    mapCenter: state.mapCenter
  };
}

export default connect(mapStateToProps, {
  fetchAnimals,
  setMapBounds,
  setMapDimensions
})(MainMap);
