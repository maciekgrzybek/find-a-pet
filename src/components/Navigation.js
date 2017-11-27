import React from 'react';
import { NavLink } from 'react-router-dom';
import Icon from './Icon';


const Navigation = () => {
	return (

			<div className="grid-container">
				<div className="grid-x grid-padding-x top-bar">
					<div className="small-4 medium-8 cell top-bar__logo">
						<NavLink to="/">
							<Icon 
								icon="logo"
								width="75px"
								height="40px" />
						</NavLink>
					</div>
					<div className="small-8 cell align-self-middle top-bar__menu">
	
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