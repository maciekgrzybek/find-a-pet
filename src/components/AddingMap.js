import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react';





class AddingMap extends Component {

	static defaultProps = {
		center: {
			lat: 45,
			lng: 120
		},
		zoom: 11
	};

	render() {
		return (
				 <GoogleMapReact
					defaultCenter={this.props.center}
					defaultZoom={this.props.zoom}
					onClick={(e) => this.props.handleClick(e)}>
				</GoogleMapReact>
		);
	}
}

export default AddingMap;