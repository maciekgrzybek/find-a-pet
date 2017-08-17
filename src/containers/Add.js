import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';
import { connect } from 'react-redux';
import { addAnimal } from '../actions/index';
import { Link } from 'react-router-dom';

class Add extends Component {



	renderField(field) {

		const { meta: { touched, error } } = field;

		const className = `form-group ${ touched && error ? 'has-error' : '' }`
		return (
			<div className={ className }>
				<label for={ field.name }>{ field.label }</label>
				<input
					className="form-control"
					{ ...field.input }
					type={ field.type }/>
					{ touched ? error : '' }
			</div>
		)
	}

	onSubmit(values) {
		this.props.addAnimal(values)
	}

	render() {
		const { handleSubmit } = this.props;
		return (
			<div className="container">
				<div className="row">
					<div className="col-md-8">
						<form onSubmit={ handleSubmit(this.onSubmit.bind(this)) }>
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
									<button type="submit" className="btn btn-primary">Dodaj </button>
									<Link to="/" className="btn btn-danger">Cofnij</Link>	
						</form>
					</div>
				</div>
			</div>
		);
	}
}

function validate(values) {

	const errors = {};

	if(!values.city) {
		errors.city = "Podaj miasto";
	}

	return errors;

}

export default reduxForm({
	validate: validate,
	form: 'AddAnimal'
})(
	connect(null, { addAnimal })(Add)
);