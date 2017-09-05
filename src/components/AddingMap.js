import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react';
import AddMarker from './AddMarker';





class AddingMap extends Component {

	static defaultProps = {
		center: {
			lat: 45,
			lng: 120
		},
		zoom: 11,
		lat: 0,
		lng: 0
	};


	render() {
		return (
				 <GoogleMapReact
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