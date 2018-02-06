import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react';
import AddMarker from './AddMarker';
import { GOOGLE_MAPS_API_KEY, GOOGLE_MAPS_LANG } from '../constants/googleMaps';
import createMapOptions from '../helpers/MapStyles';




class AddingMap extends Component {

	static defaultProps = {
		center: {
			lat: 51.5,
			lng: 20
		},
		zoom: 7
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
					options={createMapOptions}
					onClick={(e) => this.props.handleClick(e)}>
						<AddMarker
							adType={this.props.adType}
							key={ 1 }
							lat={ this.props.lat }
							lng={ this.props.lng } />
				</GoogleMapReact>
		);
	}
}

export default AddingMap;