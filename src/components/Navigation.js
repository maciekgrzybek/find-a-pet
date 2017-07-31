import React from 'react';
import { Link } from 'react-router-dom';
import { LinkContainer } from 'react-router-bootstrap';
import { Navbar, Nav, NavItem } from 'react-bootstrap';

const Navigation = () => {
	return (
		<Navbar collapseOnSelect>
			<Navbar.Header>
				<Navbar.Brand>
					<Link to="/">znajdz zwierzaka</Link>
				</Navbar.Brand>
				<Navbar.Toggle />
			</Navbar.Header>
			<Navbar.Collapse>
				<Nav pullRight>
					<LinkContainer exact to="/"><NavItem eventKey={1}>Strona glowna</NavItem></LinkContainer>	
					<LinkContainer to="/dodaj"><NavItem eventKey={2}>Dodaj ogloszenie</NavItem></LinkContainer>
					<LinkContainer to="/kontakt"><NavItem eventKey={3}>Kontakt</NavItem></LinkContainer>
				</Nav>
			</Navbar.Collapse>
		</Navbar>
	);
}

export default Navigation;