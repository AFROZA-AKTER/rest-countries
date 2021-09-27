import React, { useEffect, useState } from 'react';
import Country from '../Country/Country';
import './Countries.css'

const Countries = () => {
        const[countries , setCountries] = useState([])
        useEffect( () =>{
          fetch('https://restcountries.com/v3/all')
          .then(res => res.json())
          .then(data => setCountries(data))
        },[])
    return (
      <div>
        <h1>Let's Travel</h1>
        <h2>Travelling around the world</h2>
        <h4>Countries Available: {countries.length}</h4>
        
            {
                countries.map(country => console.log(country))
            }
        
        <div className="countries-container">
       
       {
           countries.map(country => <Country 
            // for destructuring
            country ={country}
            /* name={country.name.common} 
            capital={country.capital} 
            flag={country.flags[1]} */
            ></Country>)
       }
       </div>
      </div>
    );
};

export default Countries;