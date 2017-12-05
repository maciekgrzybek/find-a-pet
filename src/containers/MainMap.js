import React, { Component } from 'react';
import { connect } from 'react-redux';
import GoogleMapReact from 'google-map-react';
import Marker from '../components/Marker';
import { fetchAnimals, setMapBounds, setMapDimensions } from '../actions/index';
import _ from 'lodash';
import { GOOGLE_MAPS_API_KEY, GOOGLE_MAPS_LANG } from '../constants/googleMaps';
import createMapOptions from '../helpers/MapStyles';



createMapOptions(false,false);


class MainMap extends Component {

	componentDidMount() {
		this.props.fetchAnimals(this.props.searchCity);
	}

	_renderAnimalMarkers() {

		return _.map(this.props.animals, (animal, key) => {
			return (
				<Marker
					key={ key }
					id = { key }
					addType = { animal.addType }
					url={ animal.url }
					lat={ animal.location.lat }
					lng={ animal.location.lng }/>
			)
		})
	} 

	render() {
		// if(!this.props.animals) {
		// 	return (
		// 		<GoogleMapReact
		// 			bootstrapURLKeys={{
		// 				key: GOOGLE_MAPS_API_KEY,
		// 				language: GOOGLE_MAPS_LANG
		// 			}}								
		// 			defaultCenter={this.props.center}
		// 			defaultZoom={this.props.zoom}
		// 			options={createMapOptions}
		// 			onChange={({bounds}) => {
		// 				console.log(bounds)
		// 				this.props.setMapBounds(bounds);
		// 			}} >
		// 		</GoogleMapReact>
		// 	)
		// }
		

		
		
		return (
						<GoogleMapReact
							bootstrapURLKeys={{
								key: GOOGLE_MAPS_API_KEY,
								language: GOOGLE_MAPS_LANG
							}}								
							center={this.props.mapCenter.center}
							zoom={this.props.mapCenter.zoom}
	 	 					options={createMapOptions}
							onChange={({bounds, size}) => {
								this.props.setMapBounds(bounds);
								this.props.setMapDimensions(size);
							}} 
							>
	 	 					{ this._renderAnimalMarkers() }
	 	 				</GoogleMapReact>
		);
	}
}

function mapStateToProps(state) {
	return {
		animals: state.animals,
		mapBounds: state.mapBounds,
		mapCenter: state.mapCenter,
		searchCity: state.search
	}
}

export default connect(mapStateToProps, { fetchAnimals, setMapBounds, setMapDimensions })(MainMap);