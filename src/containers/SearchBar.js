import React, {Component} from 'react';
import { fetchAnimals } from '../actions/index';
import { connect } from 'react-redux';

class SearchBar extends Component {
	
	render() {
		return (
			<div>
				<form className="form-inline">
					<input
						className="form-control mr-sm-2"
						type="text"
						placeholder="Miasto..."
						onChange={(e) => this.props.fetchAnimals(e.target.value)}/>
					<button className="btn btn-outline-success" type="submit">Szukaj</button>
	    	</form>
			</div>
		);
	}
}



export default connect(null, { fetchAnimals })(SearchBar);