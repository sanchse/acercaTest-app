import React, {  } from 'react';
import { NavLink } from 'react-router-dom';

const Header = () => {
    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                <a className="navbar-brand" href="#">My App</a>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarColor01" aria-controls="navbarColor01" aria-expanded="true" aria-label="Toggle navigation">
                  <span className="navbar-toggler-icon"></span>
                </button>

                <div className="navbar-collapse collapse show" id="navbarColor01">
                    <ul className="navbar-nav mr-auto">
                        <li className="nav-item">
                            <NavLink to="/" activeClassName="active" className="nav-link">Inicio</NavLink>
                        </li>
                        <li className="nav-item">
                        <NavLink to="/vehicles" activeClassName="active"  className="nav-link">Vehiculos</NavLink>
                        </li>
                    </ul>
                </div>       
            </nav>
        </div>
    );
};

export default Header;
