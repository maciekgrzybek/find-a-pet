import { createSelector } from 'reselect';
import _ from 'lodash';

const animalsSelector = state => state.animals;
const mapBoundsSelector = state => state.mapBounds;
const animalsListFilterSelector = state => state.animalListFilter;

const getAnimals = (animals, mapBounds, listFilter) => {

	const selectedAnimals =  _.pickBy(animals,(value,key) => {
		const { lat, lng } = value.location;
		const mapArea = new window.google.maps.Polygon({paths: mapBounds});
		const curPosition = new window.google.maps.LatLng(lat, lng);
		if(listFilter) {
			return (window.google.maps.geometry.poly.containsLocation(curPosition, mapArea) && value.adType === listFilter);
		} else {
		return (window.google.maps.geometry.poly.containsLocation(curPosition, mapArea));
		}
	});

	return selectedAnimals;

};

export default createSelector(
	animalsSelector,
	mapBoundsSelector,
	animalsListFilterSelector,
	getAnimals
)