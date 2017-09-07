import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react';
import AddMarker from './AddMarker';
import { GOOGLE_MAPS_API_KEY, GOOGLE_MAPS_LANG } from '../constants/googleMaps';





class AddingMap extends Component {

	static defaultProps = {
		center: {
			lat: 54,
			lng: 32
		},
		zoom: 6,
		lat: 0,
		lng: 0
	};


	render() {
		return (
				 <GoogleMapReact
					bootstrapURLKeys={{
						key: GOOGLE_MAPS_API_KEY,
						language: GOOGLE_MAPS_LANG
					}}				 
					defaultCenter={this.props.center}
					defaultZoom={this.props.zoom}
					onClick={(e) => this.props.handleClick(e)}>
						<AddMarker
							key={ 1 }
							lat={ this.props.lat }
							lng={ this.props.lng } />
				</GoogleMapReact>
		);
	}
}

export default AddingMap;