import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';
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
		this.setCoordinates = this.setCoordinates.bind(this);
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
					.then((url) => {this.props.addAnimal(Object.assign({}, values, {'url':url}), () => {
						this.props.history.push('/dzieki');
					})});
			})
		} else {
			this.props.addAnimal(values, () => {
				this.props.history.push('/dzieki');
			});
		}

	}

	onDrop(file) {
		this.setState({ file });
	}

	setCoordinates(e){
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

		const dropStyle = {
			'width': 200,
			'height': 200,
			'border': '2px solid red',
			'active': {
				'border': '3px solid blue'
			}
		}

		const bodyClass = this.state.loading ? 'loading' : 'not-loading';

		return (
			<div className={`container ${bodyClass}`}>
				<div className="row">
				<div className="col-md-12 map">
						<AddingMap 
							handleClick={this.setCoordinates}
							lat={this.state.lat}
							lng={this.state.lng} />
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
									name="lat"
									type="hidden"
									value={this.state.lat}
									normalize= { value => value }
									component={ this.renderField } />
								<Field
									name="lng"
									type="hidden"
									value={this.state.lng}
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

	if(!values.lat) {
		errors.lat = "Podaj lokalizację";
	}

	return errors;

}

export default reduxForm({
	validate: validate,
	form: 'AddAnimal'
})(
	connect(null, { addAnimal, uploadImage })(Add)
);