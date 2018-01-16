import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';
import { connect } from 'react-redux';
import FileAdd from './FileAdd';
import { addAnimal } from '../actions/index';
import { Link } from 'react-router-dom';
import AddingMap from '../components/AddingMap';
import _ from 'lodash';
import update from 'immutability-helper';
import Footer from '../components/Footer';
import { storage, firebaseConfig } from '../constants/firebase';

class Add extends Component {

	constructor() {
		super();
		this.state = { 
			files: null,
			location: {
				lat: null,
				lng: null,
				city: '',
				street: ''
			},
			addType: null
		}

		this.setLocation = this.setLocation.bind(this);
		this.setFile = this.setFile.bind(this);
		this._setAddType = this._setAddType.bind(this);
		this.setState = this.setState.bind(this);
	}

	componentDidMount() {
		this._setAddType()
	}

	setFile(files) {
		this.setState({files})
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
		
		this.uploadImage(this.state.files);
	}
	uploadImage(files) {
		
		var promises =[];
	
		for(let key in files) {
			const token = Math.random().toString(36).substr(2);
			const imageRef = storage.ref().child(`${token}`);
			const promise = imageRef.putString(files[key], 'data_url')
				.then(() => {
					return storage.refFromURL(`${firebaseConfig.storageBucket}/${token}`).getDownloadURL()
					.then((url)=> {
						return {
							[key]: url
						}
					})
				});
			promises.push(promise);
		}
		Promise.all(promises)
		.then((arr) => {
			console.log(arr)
		})
	}
	
	_setAddType() {
		const { type } = this.props.match.params
		let addType = null;
		if(type === 'znaleziony') {
			addType = 'found';
		} else if (type === 'zgubiony') {
			addType = 'lost';
		} else {
			addType = 'adopt';
		}
		this.setState({addType})
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
					_.map(results[0]['address_components'], (record) => {
						const { location } = this.state;
						if(record.types[0] === 'route') {
							this.setState({
								location: update(location,{street: {$set: (record['long_name']).toLowerCase()}})
							})
						} else if (record.types[0] === 'locality') {
							this.setState({
								location: update(location,{city: {$set: (record['long_name']).toLowerCase()}})
							})
						}

					})
				}
		});
	}

	setCoordinates(e){
		const { location } = this.state;
		this.setState({
			location: update(location,{ 
				lat: {$set: e.lat},
				lng: {$set: e.lng}
			}) 
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




		return (
			<div>
				<div className="add-container">
					<div className="grid-container full">
						<div className="grid-x grid-margin-x large-margin-collapse">
							<div className="small-12 large-7 cell map">
								<AddingMap 
									handleClick={this.setLocation}
									lat={this.state.location.lat}
									lng={this.state.location.lng} />
							</div>
							<div className="small-12 large-5 cell">
								<form onSubmit={ handleSubmit(this.onSubmit.bind(this)) }>
										<Field
											name="location"
											type="hidden"
											label="Lokalizacja"
											component={ this.renderField } />
										<Field
											name="date"
											label="Data"
											type="date"
											component={ this.renderField } />
										<Field
											name="email"
											label="Email"
											type="text"
											component={ this.renderField } />
										<Field
											name="phone"
											label="Telefon"
											type="tel"
											component={ this.renderField } />
										<Field
											name="description"
											label="Opis"
											type="textarea"
											component={ this.renderField } />

										<FileAdd onDrop={this.setFile} />

		 
										
										<button type="submit" className="btn btn-primary">Dodaj </button>
										<Link to="/" className="btn btn-danger">Cofnij</Link>	
								</form>
							</div>
						</div>
					</div>
				</div>
				<Footer />
			</div>
		);
	}
}

function validate(values) {

	const errors = {};

	if(!values.location) {
		errors.location = "Wybierz punkt na mapie";
	}
	if(!values.email) {
		errors.email = "Podaj adres email";
	}
	if(!(/^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(values.email))){
		errors.email = "Podaj prawidlowy email"
	}
	return errors;

}

export default reduxForm({
	validate: validate,
	form: 'AddAnimal'
})(
	connect(null, { addAnimal })(Add)
);