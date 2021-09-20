import React, { useEffect, useState } from 'react';
import Country from '../Country/Country';
import './Countries.css';

const Countries = () => {
    const [countries, setCountries] = useState([]);
    useEffect(() => {
        fetch('https://restcountries.eu/rest/v2/all')
            .then(res => res.json())
            .then(data => setCountries(data))
    }, [])
    return (
        <div>
            <h1>Called from Countries. And total Data is : {countries.length}</h1>
            {
                // countries.map(country => { console.log(country.name) }) // for show datd
                <div className="grid-container">
                    {
                        countries.map(country => <Country
                            key={country.capital}
                            country={country}

                        ></Country>)
                    }
                </div>
            }

        </div >
    );
};

export default Countries;