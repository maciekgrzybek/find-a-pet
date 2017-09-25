import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class AddType extends Component {
	render() {
		return (
			<div>
				<Link to="/dodaj/znaleziony">Znaleziony</Link>
				<Link to="/dodaj/zgubiony">Zgubiony</Link>
				<Link to="/dodaj/do-adopcji">Do adopcji</Link>
			</div>
		);
	}
}

export default AddType;