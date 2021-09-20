import React from 'react';
import './Country.css';

const Country = (props) => {
    const { name, capital, region, flag, population, timezones } = props.country;
    // console.log(props.country);
    return (
        <div className="div-style">
            <h2>Country: {name}</h2>
            <img src={flag} alt="" />
            <h3>Capital: {capital}</h3>
            <h4>Region: {region}</h4>
            <p>population: {population}</p>
            <p>timezones: {timezones[0]}</p>
        </div>
    );
};

export default Country;