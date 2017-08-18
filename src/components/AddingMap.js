import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react';





class AddingMap extends Component {

	constructor() {
		super();
		
		this.showCoordinates = this.showCoordinates.bind(this);
	}

	static defaultProps = {
		center: {
			lat: 45,
			lng: 120
		},
		zoom: 11
	};

	showCoordinates(e) {
		console.log(e.lat)
	}

	render() {
		return (
				 <GoogleMapReact
					defaultCenter={this.props.center}
					defaultZoom={this.props.zoom}
					onClick={(e) => this.showCoordinates(e)}>
				</GoogleMapReact>
		);
	}
}

export default AddingMap;