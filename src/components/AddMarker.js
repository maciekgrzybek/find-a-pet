import React from 'react';
import Icon from './Icon';

const AddMarker = () => {

	return (
		<div className="marker">
					<Icon 
						icon="mapMarker" 
						// class={`marker__icon marker--${this.props.addType}__icon`} 
						width="30px"
						height="30px"/>
		</div>
	);
}

export default AddMarker;