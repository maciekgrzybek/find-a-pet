import React, { Component } from 'react';
import { animalListFilter } from '../actions/index';
import { connect } from 'react-redux';

class checkbox extends Component {

	constructor(props) {
		super(props);

		this.handleInputChange = this.handleInputChange.bind(this);
	}

	handleInputChange(e) {
		const target = e.target;
		if(target.checked) {
			this.props.animalListFilter(this.props.title);
		} else {
			this.props.animalListFilter(null);
		}
	}

	render() {
		const { title, value } = this.props;
		return (
			<div className="checkbox">
				<input 
					className="checkbox__input"
					type="checkbox" 
					id={ title } 
					value={ value }
					checked={this.props.title === this.props.filter} 				
					onChange={ this.handleInputChange } />
				<label 
					htmlFor={ title } 
					className="checkbox__fake-box"
					></label>
				<span
					className="checkbox__label"
					>{ value }</span>
			</div>
		)
	}

}

function mapStateToProps(state) {
	return {
		filter: state.animalListFilter
	}
}

export default connect(mapStateToProps, { animalListFilter })(checkbox);