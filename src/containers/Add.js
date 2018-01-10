import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';
import { connect } from 'react-redux';
import { addAnimal, uploadImage } from '../actions/index';
import { Link } from 'react-router-dom';
import AddingMap from '../components/AddingMap';
import Dropzone from 'react-dropzone';
import _ from 'lodash';
import update from 'immutability-helper';
import Footer from '../components/Footer';

class Add extends Component {

	constructor() {
		super();
		this.state = { 
			file: null,
			location: {
				lat: null,
				lng: null,
				city: '',
				street: ''
			},
			addType: null
		}
		this.onDrop = this.onDrop.bind(this);
		this.setLocation = this.setLocation.bind(this);
		this._setAddType = this._setAddType.bind(this);
	}

	componentDidMount() {
		this._setAddType()
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
			this.props.uploadImage(this.state.file, (url) => {
				this.props.addAnimal(
					Object.assign(
						{},
						values,
						{'url':url},
						{'location': this.state.location},
						{'addType':this.state.addType}), () => {
							this.props.history.push('/dzieki');
						}
				)
			})
		} else {
			this.props.addAnimal(
				Object.assign(
					{},
					values,
					{'location': this.state.location},
					{'addType':this.state.addType}), () => {
						this.props.history.push('/dzieki');
					}
			);
		}

	}

	onDrop(file) {
		// this.setState({ file });
		// console.log(file[0].preview)
		var imgLoader = new Image();				
		imgLoader.onload = function(data) {
			
			// Desired size
			var max_width = 600;
			var max_height = 600;
			
			// Get image dimensions
			var original_width = imgLoader.width;
			var original_height = imgLoader.height;
			
			// Calculate final dimensions
			if (original_width > original_height) {
				if (original_width > max_width) {
					var ratio = max_width / original_width;
					var new_height = Math.round(original_height * ratio);
					var new_width = max_width;
				} else {
					var new_height = original_height;
					var new_width = original_width;
				}
			} else {
				if (original_height > max_height) {
					var ratio = max_height / original_height;
					var new_width = Math.round(original_width * ratio);
					var new_height = max_height;
				} else {
					var new_height = original_height;
					var new_width = original_width;
				}
			}
			
			// Resizing function
			function resize_step(image, new_width, new_height) {
				
				// Create new canvas
				var canvas = document.createElement('canvas');
				var ctx = canvas.getContext('2d');
			
				// Get incremental image size	
				var half_width = Math.round(image.width / 2);
				var half_height = Math.round(image.height / 2);

				if (half_width > new_width) {
				
					// Resize image	by 50%		
					canvas.width = half_width;
					canvas.height = half_height;
					ctx.drawImage(image, 0, 0, half_width, half_height);
								
					// Resize again
					return resize_step(canvas, new_width, new_height);
								
				} else {

					// Final Resize of Image
					canvas.width = new_width;
					canvas.height = new_height;
					ctx.drawImage(image, 0, 0, new_width, new_height);

					var dataURL = canvas.toDataURL('image/jpg');
					// Return resized image	
					return canvas;
					// return dataURL;

				
				}

			}
			
			// Fire resizing function
			// var resized_image_data_url = resize_step(imgLoader, new_width, new_height);
			var resized_image = resize_step(imgLoader, new_width, new_height);
			
			// Append to body
			document.body.appendChild(resized_image);
			// this.setState({ file });


		};

		// Load image	
		imgLoader.src = file[0].preview;

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

		const dropStyle = {
			'width': 200,
			'height': 200,
			'border': '2px solid red',
			'active': {
				'border': '3px solid blue'
			}
		}


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
	connect(null, { addAnimal, uploadImage })(Add)
);