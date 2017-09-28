import { createSelector } from 'reselect';
import _ from 'lodash';

const animalsSelector = state => state.animals;
const selectedAnimalSelector = state => state.select;

const getSelectedAnimal = (animals, selected) => {
	const selectedAnimal = _.filter(
		animals,
		animal => _.includes(selected, animal.id)
	)

	return selectedAnimal;
}

export default createSelector(
	animalsSelector,
	selectedAnimalSelector,
	getSelectedAnimal
);