import React, { Component } from 'react';
import { Field, reduxForm, change } from 'redux-form';
import { connect } from 'react-redux';
import { addAnimal, uploadImage } from '../actions/index';
import { Link } from 'react-router-dom';
import AddingMap from '../components/AddingMap';
import Dropzone from 'react-dropzone';
import { storage } from '../constants/firebase';

class Add extends Component {

	constructor() {
		super();
		this.state = { 
			file: null,
			lat: '',
			lng:''
		}
		this.onDrop = this.onDrop.bind(this);
		this.addCoordinates = this.addCoordinates.bind(this);

	}


	
	renderField(field) {

		const { meta: { touched, error } } = field;

		const className = `form-group ${ touched && error ? 'has-error' : '' }`
		return (
			<div className={ className }>
				<label htmlFor={ field.name }>{ field.label }</label>
				<input
					className="form-control"
					{ ...field.input }
					type={ field.type }
					
					/>
					{ touched ? error : '' }
			</div>
		)
	}

	onSubmit(values) {
		// this.props.addAnimal(values);
		this.props.uploadImage(this.state.file, () => { 
			storage.refFromURL(`gs://znajdz-zwierzaka.appspot.com/${this.state.file[0].name}`)
				.getDownloadURL()
				.then((url) => {this.props.addAnimal(Object.assign({}, values, {'url':url}))});
		})
	}

	onDrop(file) {
    this.setState({ file });
	}

	addCoordinates(e) {
		this.setState({
			lat: e.lat,
			lng: e.lng
		}, () => {
			this.props.change('lat', this.state.lat);
			this.props.change('lng', this.state.lng);
		})
		
	}

	render() {
		const { handleSubmit } = this.props;
		return (
			<div className="container">
				<div className="row">
				<div className="col-md-12 map">
						<AddingMap handleClick={this.addCoordinates} />
					</div>
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
								<Field
									name="lat"
									label="Lokalizacja"
									type="hidden"
									value={this.state.lat}
									normalize= { value => value }
									component={ this.renderField } />
								<Field
									name="lng"
									label="Lokalizacja"
									type="hidden"
									value={this.state.lng}
									component={ this.renderField } />

								<Dropzone onDrop={this.onDrop}>
										<p>Try dropping some files here, or click to select files to upload.</p>
								</Dropzone>
								
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

	// if(!values.lat) {
	// 	errors.lat = "Podaj lokalizację";
	// }

	return errors;

}

export default reduxForm({
	validate: validate,
	form: 'AddAnimal'
})(
	connect(null, { addAnimal, uploadImage })(Add)
);