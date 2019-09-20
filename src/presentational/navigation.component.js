import React from 'react';
import { Link } from 'react-router';
import 'bootstrap/dist/css/bootstrap.css';
const Navigation = props => (
    <div>
        <nav className="navbar navbar-dark bg-dark">
            <div className="container-fluid">
                <div className="navbar-header">
                    <Link className="navbar-brand" to="/">Państwa.js</Link>
                </div>
                <div className="navbar-collapse row">
                    <ul className="nav justify-content-center">

                        <li className='nav-link'>
                            <Link className='text-light' to="/countries">Countries</Link>
                        </li>

                        <li className='nav-link'>
                            <Link className='text-light' to="/continents">Continents</Link>
                        </li>

                        <li className='nav-link'>
                            <Link className='text-light' to="/contact">Contact</Link>
                        </li>
                        
                    </ul>
                </div>
            </div>
        </nav>
        <div className="container-fluid">
            {props.children}
        </div>
    </div>
);

export default Navigation;