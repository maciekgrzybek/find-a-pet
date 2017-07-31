import React, { Component } from 'react';
import { connect } from 'react-redux';
import GoogleMapReact from 'google-map-react';
import Marker from '../components/Marker';
import { fetchAnimals } from '../actions/index';
import _ from 'lodash';

function createMapOptions(maps) {
	return {
		scrollwheel:false
	}
}


class MainMap extends Component {

	static defaultProps = {
		center: {
			lat: 45,
			lng: 9
		},
		zoom: 11
	};

	componentDidMount() {
		this.props.fetchAnimals();
	}

	_renderAnimalMarkers() {
		
		return _.map(this.props.animals, animal => {
			return (
				<Marker
					key={ animal.lat }
					url={ animal.sturl }
					lat={ animal.lat }
					lng={ animal.lon } />
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
					defaultCenter={this.props.center}
					defaultZoom={this.props.zoom}
					options={createMapOptions} >
					{ this._renderAnimalMarkers() }
				</GoogleMapReact> 
		);
	}
}

function mapStateToProps(state) {
	return {
		animals: state.animals
	}
}

export default connect(mapStateToProps, { fetchAnimals })(MainMap);