import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import { fetchAnimals } from '../actions/index';
import { connect } from 'react-redux';

// class SearchBar extends Component {
	
// 	render() {
// 		return (
// 			<div>
// 				<form className="form-inline">
// 					<input
// 						className="form-control mr-sm-2"
// 						type="text"
// 						placeholder="Miasto..."
// 						onChange={(e) => this.props.fetchAnimals(e.target.value)}/>
// 					{/* <button className="btn btn-outline-success" type="submit">Szukaj</button> */}
// 	    	</form>
// 			</div>
// 		);
// 	}
// }
export default class SearchBox extends React.Component {

  render() {
    return <input ref="input" {...this.props} type="text"/>;
  }
  onPlacesChanged = () => {
		// TODO : SEARCHING FUNCTIONALITY
		var places = this.searchBox.getPlaces();
		console.log(places)
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



// export default connect(null, { fetchAnimals })(SearchBar);