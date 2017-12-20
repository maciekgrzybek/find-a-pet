import React from 'react';
import { connect } from 'react-redux';
import { toggleNavigation } from '../actions/index';

const HamburgerIcon = ({ toggleNavigation, clicked }) => {
	const hamburgerClass = clicked ? 'hamburger-icon--active' : '';
	return (
		<a className={`hamburger-icon ${hamburgerClass}`} onClick={ toggleNavigation }>
			<span></span>
			<span></span>
			<span></span>
			<span></span>
		</a>
	)
};

function mapStateToProps(state) {
	return {
		clicked: state.toggleNavigation
	}
}
export default connect(mapStateToProps, { toggleNavigation })(HamburgerIcon);