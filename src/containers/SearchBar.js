import React, {Component} from 'react';

class SearchBar extends Component {
	
	render() {
		return (
			<div>
				<form className="form-inline">
					<input className="form-control mr-sm-2" type="text" placeholder="Miasto..." />
					<button className="btn btn-outline-success" type="submit">Szukaj</button>
	    	</form>
			</div>
		);
	}
}

export default SearchBar;