import React, { Component } from "react";
import { Field, reduxForm } from "redux-form";
import { connect } from "react-redux";
import FileAdd from "./FileAdd";
import { addAnimal } from "../actions/index";
import { Link } from "react-router-dom";
import AddingMap from "../components/AddingMap";
import _ from "lodash";
import update from "immutability-helper";
import Footer from "../components/Footer";
import Button from "../components/Button";
import { storage, firebaseConfig } from "../constants/firebase";
import LoadingScreen from "../components/LoadingScreen";

class Add extends Component {
  constructor() {
    super();
    this.state = {
      files: null,
      location: {
        lat: null,
        lng: null,
        city: "",
        street: ""
      },
      adType: null,
      loading: false
    };

    this.setLocation = this.setLocation.bind(this);
    this.setFile = this.setFile.bind(this);
    this._setAdType = this._setAdType.bind(this);
  }

  componentDidMount() {
    this._setAdType();
  }

  setFile(files) {
    this.setState({ files });
  }

  renderField(field) {
    const { meta: { touched, error } } = field;

    if (field.type === "radio") {
      const className = `form-check ${touched && error ? "has-error" : ""}`;
      return (
        <div className={className}>
          <label className="form-check-label">
            <input
              className="form-check-input"
              type={field.type}
              name={field.name}
              checked
              {...field.input}
            />
            {field.label}
            {touched ? error : ""}
          </label>
        </div>
      );
    } else {
      const className = `form-group ${touched && error ? "has-error" : ""}`;
      return (
        <div className={className}>
          <label htmlFor={field.name}>{field.label}</label>
          <input className="form-control" {...field.input} type={field.type} />
          {touched ? error : ""}
        </div>
      );
    }
  }

  onSubmit(values) {
    if (this.state.files) {
      this.uploadImage(this.state.files, values);
    } else {
      this.props.addAnimal(
        Object.assign(
          {},
          values,
          { location: this.state.location },
          { adType: this.state.adType }
        ),
        () => {
          this.props.history.push("/dzieki");
        }
      );
    }
  }

  uploadImage(files, values) {
    var promises = [];
    this.setState({ loading: true });
    for (let key in files) {
      const token = Math.random()
        .toString(36)
        .substr(2);
      const imageRef = storage.ref().child(`${token}`);
      const promise = imageRef.putString(files[key], "data_url").then(() => {
        return storage
          .refFromURL(`${firebaseConfig.storageBucket}/${token}`)
          .getDownloadURL()
          .then(url => {
            return {
              [key]: url
            };
          });
      });
      promises.push(promise);
    }
    Promise.all(promises).then(arr => {
      let urls = {};
      arr.forEach(function(el, i) {
        urls[Object.keys(el)] = el[Object.keys(el)];
      });
      this.props.addAnimal(
        Object.assign(
          {},
          values,
          { url: urls },
          { location: this.state.location },
          { adType: this.state.adType }
        ),
        () => {
          this.props.history.push("/dzieki");
        }
      );
    });
  }

  _setAdType() {
    const { type } = this.props.match.params;
    let adType = null;
    if (type === "znaleziony") {
      adType = "found";
    } else if (type === "zgubiony") {
      adType = "lost";
    } else {
      adType = "adopt";
    }
    this.setState({ adType });
  }

  geoCode(e) {
    const geocoder = new window.google.maps.Geocoder();
    geocoder.geocode(
      {
        latLng: {
          lat: e.lat,
          lng: e.lng
        }
      },
      (results, status) => {
        if (status === "OK") {
          _.map(results[0]["address_components"], record => {
            const { location } = this.state;
            if (record.types[0] === "route") {
              this.setState({
                location: update(location, {
                  street: { $set: record["long_name"].toLowerCase() }
                })
              });
            } else if (record.types[0] === "locality") {
              this.setState({
                location: update(location, {
                  city: { $set: record["long_name"].toLowerCase() }
                })
              });
            }
          });
        }
      }
    );
  }

  setCoordinates(e) {
    const { location } = this.state;
    this.setState(
      {
        location: update(location, {
          lat: { $set: e.lat },
          lng: { $set: e.lng }
        })
      },
      () => {
        this.props.change("location", true);
      }
    );
  }

  setLocation(e) {
    this.geoCode(e);
    this.setCoordinates(e);
  }

  render() {
    const { handleSubmit } = this.props;

    return (
      <div>
        <LoadingScreen loading={this.state.loading} />
        <div className="add-container">
          <div className="grid-container full">
            <div className="grid-x grid-margin-x">
              <div className="small-12 large-7 cell map map--adding">
                <AddingMap
                  handleClick={this.setLocation}
                  lat={this.state.location.lat}
                  lng={this.state.location.lng}
                  adType={this.state.adType}
                />
              </div>
              <div className="small-12 large-5 cell add-form">
                <h1 className="add-form__title">Dodaj Ogłoszenie</h1>
                <p className="add-form__description">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem
                  repellat odit sit dignissimos dolorem ipsa quae incidun.
                </p>
                <form onSubmit={handleSubmit(this.onSubmit.bind(this))}>
                  <Field
                    name="location"
                    type="hidden"
                    label="Lokalizacja"
                    component={this.renderField}
                  />
                  <Field
                    name="title"
                    label="Tytul"
                    type="text"
                    component={this.renderField}
                  />
                  <Field
                    name="date"
                    label="Data"
                    type="date"
                    component={this.renderField}
                  />
                  <Field
                    name="email"
                    label="Email"
                    type="text"
                    component={this.renderField}
                  />
                  <Field
                    name="phone"
                    label="Telefon"
                    type="tel"
                    component={this.renderField}
                  />
                  <Field
                    name="description"
                    label="Opis"
                    type="textarea"
                    component={this.renderField}
                  />

                  <FileAdd
                    onDrop={this.setFile}
                    fileError={this.setFileError}
                  />

                  <Button
                    color="primary"
                    label="Dodaj"
                    style={{ marginRight: 10 }}
                  />
                  <Link to="/">
                    <Button color="alert" label="Cofnij" />
                  </Link>
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

  if (!values.location) {
    errors.location = "Wybierz punkt na mapie";
  }
  if (!values.email) {
    errors.email = "Podaj adres email";
  }
  if (
    !/^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(
      values.email
    )
  ) {
    errors.email = "Podaj prawidlowy email";
  }
  return errors;
}

export default reduxForm({
  validate: validate,
  form: "AddAnimal"
})(connect(null, { addAnimal })(Add));
