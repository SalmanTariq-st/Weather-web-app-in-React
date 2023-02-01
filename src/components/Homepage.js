import React from 'react'
import { useState,useEffect } from 'react';
import Navbar from './Navbar';
import TempContainer from './TempContainer';
export default function Homepage() {
    
   const [city,setCity]=useState('Lahore')
   const [data,setdata]=useState('')
   const [isLoading,setLoading]=useState(false)
   const [isError,setError]=useState(false)
   
 
   const getTemp=(userCity)=>
   {
    setError(false)
    setLoading(true)
     
     const axios = require("axios");
     
     const options = {
       method: 'GET',
       url: 'https://weather-by-api-ninjas.p.rapidapi.com/v1/weather',
       params: {city:userCity},
       headers: {
         'X-RapidAPI-Key': '1069818cb81ash937f6cd3z98e92p1e57be8jsnfd768cn99251b0',
         'X-RapidAPI-Host': 'weather-by-api-ninjas.p.rapidapi.com'
        }
      };
      
      
      
      axios.request(options).then(function (response) {
        
        
        setLoading(false)
        setCity(userCity)
        setdata(response.data)
        
    return response.body
    
  }).catch(function (error) {
    setError(true)
    console.error(error);
  });
}

useEffect(() => {
  console.log('effect')
 getTemp(city)
}, [city]

)
  return (
    <div>
       <Navbar getTemp={getTemp} />
       {isError? <div className='flex justify-center text-xl font-medium mt-32'><h1>City not found</h1></div>:
 
  isLoading? <div className='flex justify-center text-xl font-medium mt-32'><h1>Loading</h1></div>:
<div>
   <div className='flex justify-center mt-20' >
  <i className=' text-2xl mt-1 mr-1 fa fa-map-marker text-slate 800'></i>
  <h1 className='text-3xl font-semibold text-slate 800'>{city}</h1>
 </div>
 <TempContainer data={data} />
 </div>
}

    </div>
  )
}
