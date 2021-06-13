import React from 'react';
import Weather from './Weather';
const CountryDetails = ({country}) => {
    return (
        <>
            <h2>{country.name}</h2>
            <h3>Capital: {country.capital}</h3>
            <h3>Population: {country.population}</h3>
            <h3>Languages</h3>
            <ul>
                {
                    country.languages.map(language => <li key={language.name}>{language.name}</li>)
                }
            </ul>
            <img src={country.flag} alt='Flag' style={{width: 150, height: 150}} />
            <Weather country={country} />
        </>
    );
};
export default CountryDetails;
