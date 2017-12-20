import React from 'react';
import { connect } from 'react-redux';
import { toggleNavigation } from '../actions/index';

const NavItem = ({ children, toggleNavigation }) => {
	return (
		<li className="navigation__item" onClick={ toggleNavigation }>								
			{ children }
		</li>
	)
};

export default connect(null, { toggleNavigation })(NavItem);