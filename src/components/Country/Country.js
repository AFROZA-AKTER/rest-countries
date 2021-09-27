import React from 'react';
import './Country.css'

const Country = (props) => {
    // using destructuring
    const {name , capital , flags} = props.country;
    console.log(props.country)
    return (
        <div className="country">
            <h2>Name: {name.common}</h2>
            <p>Capital: {capital}</p>
            <img src={flags[1]} alt="" />
        </div>
    );
};

export default Country;