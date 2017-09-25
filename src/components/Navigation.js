import React from 'react';
import { Link } from 'react-router-dom';


const Navigation = () => {
	return (

			<div className="row top-bar middle-xs">
				<div className="col-xs-12 col-sm-6 top-bar__logo">
					<Link to="/">znajdz zwierzaka</Link>
				</div>
				<div className="col-xs-12 col-sm-6 top-bar__menu">

						<ul className="navigation end-xs">
							<li className="navigation__item">
								<Link to="/">Strona glowna</Link>	
							</li>
							<li className="navigation__item">
								<Link to="/rodzaj-ogloszenia">Dodaj ogloszenie</Link>
							</li>
							<li className="navigation__item">
								<Link to="/kontakt">Kontakt</Link>
							</li>
						</ul>

				</div>
			</div>
	);
}

export default Navigation;