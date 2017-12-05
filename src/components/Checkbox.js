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
			<div>
				<input 
					type="checkbox" 
					id={ title } 
					value={ value }
					checked={this.props.title === this.props.filter} 				
					onChange={ this.handleInputChange } />
				<label htmlFor={ title } >{ value }</label>
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