import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';
import { connect } from 'react-redux';
import { fetchAnimal } from '../actions/index';

class Add extends Component {

	renderField(field) {
		return (
			<div className="form-group">
				<label for={ field.name }>{ field.label }</label>
				<input
					className="form-control"
					{ ...field.input }
					type={ field.type }/>
			</div>
		)
	}
	render() {
		return (
			<div className="container">
				<div className="row">
					<div className="col-md-8">
						<form>
								<Field
									name="city"
									label="Miasto"
									type="text"
									component={ this.renderField } />
								<Field
									name="date"
									label="Data"
									type="date"
									component={ this.renderField } />
								<Field
									name="email"
									label="Email"
									type="email"
									component={ this.renderField } />
								<Field
									name="phone"
									label="Telefon"
									type="tel"
									component={ this.renderField } />
								<Field
									name="phone"
									label="Telefon"
									type="tel"
									component={ this.renderField } />
						</form>
					</div>
				</div>
			</div>
		);
	}
}

export default reduxForm({
	form: 'AddAnimal'
})(Add);