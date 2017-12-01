import { fitBounds } from 'google-map-react/utils';

const bounds = {
	nw: {
			lat: 39.4646593,
			lng: -97.74710249999998
	},
	se: {
			lat: 37.6239079,
			lng: -122.38159239999999
	}
};
const size = {
	width: 640, // Map width in pixels
	height: 380, // Map height in pixels
};

const findZoomAndCenter = () => {

		const {center, zoom} = fitBounds(bounds, size);
		return {
			center,
			zoom,
		};
}
// TODO: USE THIS TO CENTER MAP ON SEARCH
export default findZoomAndCenter;

