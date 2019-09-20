import React from 'react';
import { Link } from 'react-router';
import CountryFlag from '../presentational/flag.component';

import '../country.css';

const CountryFlagList = (props) => (
    <div className="countries-list mt-5 text-center align-items-center">
        {props.countries.map(country => {
            return (
                <div key={country.id}>
                    <Link className='logo' to={'countries/country/' + country.id}>
                        <CountryFlag country={country} />
                    </Link>
                    <button className='btn btn-danger mt-2' onClick={props.deleteCountry.bind(null, country.id)}>DELETE</button>
                </div>
            )
        })}
    </div>
);

export default CountryFlagList;