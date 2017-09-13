import React, { Component } from 'react';
import { connect } from 'react-redux';
import GoogleMapReact from 'google-map-react';
import Marker from '../components/Marker';
import { fetchAnimals, setMapBounds, animalsInMapBounds } from '../actions/index';
import _ from 'lodash';
import { GOOGLE_MAPS_API_KEY, GOOGLE_MAPS_LANG } from '../constants/googleMaps';

function createMapOptions(maps) {
	return {
		scrollwheel:false
	}
}


class MainMap extends Component {

	constructor(){
		super();

		this._calculateMapBounds = this._calculateMapBounds.bind(this);
	}
	static defaultProps = {
		center: {
			lat: 53,
			lng: 23
		},
		zoom: 13
	};

	componentDidMount() {
		this.props.fetchAnimals(this.props.searchCity);
	}

	_calculateMapBounds(bounds) {
		const mapBounds =[]
		mapBounds[0] = bounds.nw;
		mapBounds[1] = bounds.ne;
		mapBounds[2] = bounds.se;
		mapBounds[3] = bounds.sw;
		this.props.setMapBounds(mapBounds);
	}

	_renderAnimalMarkers() {
		return _.map(this.props.animals, (animal, key) => {
			return (
				<Marker
					key={ key }
					id = { key }
					url={ animal.url }
					lat={ animal.location.lat }
					lng={ animal.location.lng }/>
			)
		})
	} 

	render() {
		if(!this.props.animals) {
			return (
				<div>Loading...</div>
			)
		}

		return (
	 					 <GoogleMapReact
							bootstrapURLKeys={{
								key: GOOGLE_MAPS_API_KEY,
								language: GOOGLE_MAPS_LANG
							}}								
	 	 					defaultCenter={this.props.center}
	 	 					defaultZoom={this.props.zoom}
	 	 					options={createMapOptions}
							on
							onChange={({bounds}) => {
								this._calculateMapBounds(bounds);
								this.props.animalsInMapBounds(this.props.animals, this.props.mapBounds)
							}} >
	 	 					{ this._renderAnimalMarkers() }
	 	 				</GoogleMapReact>
		);
	}
}

function mapStateToProps(state) {
	return {
		animals: state.animals,
		mapBounds: state.mapBounds,
		searchCity: state.search
	}
}

export default connect(mapStateToProps, { fetchAnimals, setMapBounds, animalsInMapBounds })(MainMap);