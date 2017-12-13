import React from 'react';
import Icon from './Icon';
import { NavLink } from 'react-router-dom';


const Footer = () => {

	const currentYear = new Date().getFullYear();

	return (
		<footer className="footer">
			<div className="grid-container">
				<div className="grid-x grid-padding-x align-justify" >
					<div className="small-6 cell">
						<NavLink to="/">
							<Icon 
								icon="logo"
								width="75px"
								height="40px"
								fill="white" />
						</NavLink>
					</div>
					<div className="small-6 medium-shrink  cell footer__menu-block">
						<div>
							<a href="mailto:kontakt@zzwierzaka.pl">kontakt@zzwierzaka.pl</a><br/>
							<a href="tel:+48 987 065 908">+48 987 065 908 </a>
						</div>
					</div>
					<div className="small-6 medium-shrink  cell footer__menu-block">
						<ul>
							<li>								
								<NavLink exact to="/">Strona główna</NavLink>
							</li>
							<li>								
								<NavLink exact to="/rodzaj-ogloszenia">Dodaj ogłoszenie</NavLink>
							</li>
							<li>								
								<NavLink exact to="/kontakt">Kontakt</NavLink>
							</li>
						</ul>
					</div>
					<div className="small-6 medium-shrink cell footer__menu-block">
						<ul>
							<li>								
								<NavLink exact to="/">Facebook</NavLink>
							</li>
							<li>								
								<NavLink exact to="/rodzaj-ogloszenia">Twitter</NavLink>
							</li>
							<li>								
								<NavLink exact to="/kontakt">Instagram</NavLink>
							</li>
						</ul>
					</div>
				</div>
				<div className="grid-x grid-padding-x">
					<div className="small-12 cell">
						<p>{`${currentYear} Znajdź Zwierzaka`}</p>
						<p>Projekt i wykonanie Maciek Grzybek</p>
					</div>
				</div>
			</div>
		</footer>
	)
}

export default Footer;