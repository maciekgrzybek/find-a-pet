import React, { Component } from 'react';
import { connect } from 'react-redux';
import SelectedAnimalSelector from '../selectors/selectedAnimal';

class SelectedAnimal extends Component {
	render() {
		const { selectedAnimal } = this.props;
		return (
			<div>
				<h1>{ selectedAnimal[0]['id'] } </h1>
				<img src={selectedAnimal[0]['url']} alt="Zwierzak" />
			</div>
		);
	}
}
const mapStateToProps = state => {
	return {
		selectedAnimal: SelectedAnimalSelector(state)
	}
}

export default connect(mapStateToProps)(SelectedAnimal);