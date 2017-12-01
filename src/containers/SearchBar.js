import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import { setCenter } from '../actions/index';
import { connect } from 'react-redux';


class SearchBar extends React.Component {

  render() {
    return <input ref="input"  type="text"/>;
  }
  onPlacesChanged = () => {
		const { mapSize } = this.props;
		var places = this.searchBox.getPlaces();
		
		// TODO: Coordinates needs to be fixed - works but zoom on wrong place

		const nw = {
			lat: places[0].geometry.viewport.b.f,
			lng: places[0].geometry.viewport.f.b
		};
		const se = {
			lat: places[0].geometry.viewport.b.b,
			lng: places[0].geometry.viewport.f.f
		};
		this.props.setCenter(nw, se, mapSize.width, mapSize.height);

  }
  componentDidMount() {
    var input = ReactDOM.findDOMNode(this.refs.input);
    this.searchBox = new window.google.maps.places.SearchBox(input);
    this.searchBox.addListener('places_changed', this.onPlacesChanged);
  }
  componentWillUnmount() {
    this.searchBox.removeListener('places_changed', this.onPlacesChanged);
  }
}

function mapStateToProps(state) {
	return {
		mapSize: state.mapSize,
	}
}


export default connect(mapStateToProps, { setCenter })(SearchBar);