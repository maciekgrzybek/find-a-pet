import React from 'react';
import { NavLink } from 'react-router-dom';
import Icon from './Icon';


const Navigation = () => {
	return (

			<div className="container">
				<div className="row top-bar">
					<div className="col-xs-4 col-sm-8 col-md-6 col-lg-4 top-bar__logo">
						<NavLink to="/">
							<Icon 
								icon="logo"
								width="75px"
								height="40px" />
						</NavLink>
					</div>
					<div className="col-xs-8 col-sm-8 col-md-6 col-lg-4 top-bar__menu">
	
							<ul className="navigation end-xs">
								<li className="navigation__item">								
									<NavLink exact to="/"><Icon icon="home" /><span>Strona główna</span></NavLink>
								</li>
								<li className="navigation__item">								
									<NavLink exact to="/rodzaj-ogloszenia"><Icon icon="advert" /><span>Dodaj ogłoszenie</span></NavLink>
								</li>
								<li className="navigation__item">								
									<NavLink exact to="/kontakt"><Icon icon="contact" /><span>Kontakt</span></NavLink>
								</li>
							</ul>
	
					</div>
				</div>
			</div>
	);
}

export default Navigation;