import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchAnimal } from '../actions/index';

class SelectedAnimal extends Component {

	componentDidMount() {
		const { id } = this.props.match.params;
		this.props.fetchAnimal(id);
	}
	render() {	

		const {animal} = this.props;
		if(!animal) {
			return (
				<div>Loading</div>
			)
		}
		return (
			<div>
				<h1>{ animal.id } </h1>
				<img src={ animal.url } alt="Zwierzak" />
			</div>
		);
	}
}


const mapStateToProps = (state, ownProps) => {
	return {
		animal: state.animals[ownProps.match.params.id],
	}
}

export default connect(mapStateToProps, { fetchAnimal })(SelectedAnimal);