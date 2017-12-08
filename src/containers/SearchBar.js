import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import { setCenter } from '../actions/index';
import { connect } from 'react-redux';
import Checkbox from '../components/Checkbox';


class SearchBar extends Component {


	constructor(){
		super();
		this.onPlacesChanged = this.onPlacesChanged.bind(this);
	}

  onPlacesChanged(){
		const { mapSize } = this.props;
		var places = this.searchBox.getPlaces();
		
		if(places.length > 0) {
			const nw = {
				lat: places[0].geometry.viewport.f.f,
				lng: places[0].geometry.viewport.b.b
			};
			const se = {
				lat: places[0].geometry.viewport.f.b,
				lng: places[0].geometry.viewport.b.f
			};
	
			this.props.setCenter(nw, se, mapSize.width, mapSize.height);
		}
	}
	
  componentDidMount() {
		var input = ReactDOM.findDOMNode(this.refs.input);
    this.searchBox = new window.google.maps.places.SearchBox(input);
    this.searchBox.addListener('places_changed', this.onPlacesChanged);
	}
	
  componentWillUnmount() {
    window.google.maps.event.clearInstanceListeners('places_changed', this.onPlacesChanged);
	};

  render() {
    return (
			<div className="grid-x grid-padding-x search-bar">
				<div className="small-12 cell">
					<h3 className="search-bar__title">Wyszukaj miasto</h3>
					<input ref="input"  type="text" placeholder="Miasto..." className="search-bar__input"/>
					<form className="h-flex">
						<Checkbox title="lost" value="zgubiony"  />
						<Checkbox title="found" value="znaleziony"  />
						<Checkbox title="adopt" value="do adopcji"  />
					</form>
				</div>
			</div>
		)
	}
}
function mapStateToProps(state) {
	return {
		mapSize: state.mapSize,
	}
}


export default connect(mapStateToProps, { setCenter })(SearchBar);