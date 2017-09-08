import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';
import { connect } from 'react-redux';
import { addAnimal, uploadImage } from '../actions/index';
import { Link } from 'react-router-dom';
import AddingMap from '../components/AddingMap';
import Dropzone from 'react-dropzone';
import { storage } from '../constants/firebase';
import _ from 'lodash';
import update from 'immutability-helper';

class Add extends Component {

	constructor() {
		super();
		this.state = { 
			file: null,
			location: {
				lat: null,
				lng: null,
				city: null,
				street: null
			}
		}
		this.onDrop = this.onDrop.bind(this);
		this.setLocation = this.setLocation.bind(this);
	}


	renderField(field) {

		const { meta: { touched, error } } = field;
		
		if(field.type === 'radio') {
			const className = `form-check ${ touched && error ? 'has-error' : '' }`;
			return (
				<div className={ className }>
					<label className="form-check-label">
						<input
							className="form-check-input"
							type={ field.type }
							name={ field.name }
							checked
							{ ...field.input } />
							{ field.label }
							{ touched ? error : '' }
					</label>
				</div>
			)
		} else {
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
	}

	onSubmit(values) {
		if(this.state.file) {
			this.props.uploadImage(this.state.file, () => { 
				storage.refFromURL(`gs://znajdz-zwierzaka.appspot.com/${this.state.file[0].name}`)
					.getDownloadURL()
					.then((url) => {this.props.addAnimal(Object.assign({}, values, {'url':url}, {'location': this.state.location}), () => {
						this.props.history.push('/dzieki');
					})});
			})
		} else {
			this.props.addAnimal(Object.assign({}, values, {'location': this.state.location}), () => {
				this.props.history.push('/dzieki');
			});
		}

	}

	onDrop(file) {
		this.setState({ file });
	}

	geoCode(e) {
		const geocoder = new window.google.maps.Geocoder();
		geocoder.geocode({
			'latLng': {
				'lat': e.lat,
				'lng': e.lng
			}
		}, (results, status) => {
				if(status === 'OK') {
					console.log(results[0])
					_.map(results[0]['address_components'], (record) => {
						const { location } = this.state;
						if(record.types[0] === 'route') {
							this.setState({
								location: update(location,{street: {$set: record['long_name']}})
							})
						} else if (record.types[0] === 'locality') {
							this.setState({
								location: update(location,{city: {$set: record['long_name']}})
							})
						}

					})
				}
		});
	}

	setCoordinates(e){
		this.setState({
			location: {
				lat: e.lat,
				lng: e.lng
			}
		}, () => {
			this.props.change('location', true);
		})
	}

	setLocation(e) {
		this.geoCode(e);
		this.setCoordinates(e);
	}


	render() {

		const { handleSubmit } = this.props;

		const dropStyle = {
			'width': 200,
			'height': 200,
			'border': '2px solid red',
			'active': {
				'border': '3px solid blue'
			}
		}


		return (
			<div className='container'>
				<div className="row">
				<div className="col-md-12 map">
						<AddingMap 
							handleClick={this.setLocation}
							lat={this.state.location.lat}
							lng={this.state.location.lng} />
					</div>
					<div className="col-md-8">
						<form onSubmit={ handleSubmit(this.onSubmit.bind(this)) }>
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
								<div>
									<Field
										name="type"
										label="Znaleziony"
										type="radio"
										value="found"
										component={ this.renderField } />
									<Field
										name="type"
										label="Zgubiony"
										type="radio"
										value="lost"
										component={ this.renderField } />
								</div>
								<Field
									name="location"
									type="hidden"
									label="Lokalizacja"
									component={ this.renderField } />

								<Dropzone
									onDrop={this.onDrop}
									style={ dropStyle }
									multiple={ false }
									activeStyle={ dropStyle.active }>
										<p>Fote dawaj tu</p>
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

	if(!values.location) {
		errors.location = "Podaj lokalizację";
	}

	return errors;

}

export default reduxForm({
	validate: validate,
	form: 'AddAnimal'
})(
	connect(null, { addAnimal, uploadImage })(Add)
);