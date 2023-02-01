import React from 'react'

export default function TempContainer(props) {
  return (
    <div className='flex justify-center flex-wrap  my-20 '>

      <div className='text-center w-80 h-60 border-2 rounded-md m-3 border-slate-800'>
        <h1 className='bg-slate-800  text-2xl p-2 font-semibold rounded-t  text-white'>Temperatures</h1>
        <div className=' mt-2 flex justify-center'>

          <h2 className='  text-4xl font-bold'>{props.data['temp']}</h2>
          <h5> &#8451;</h5>
        </div>
        <div className='mt-4'>

          <p>Temparture is {props.data['temp']}</p>
          <p>Min Temparture is {props.data['min_temp']}</p>
          <p>Max Temparture is {props.data['max_temp']}</p>
        </div>
        

      </div>


      <div className='text-center w-80 h-60 border-2 rounded-md m-3 border-slate-800'>
        

       <h1 className=' text-2xl p-2 font-semibold rounded-t text-slate-800 border-slate-800 border-b-2 '>Humidity</h1>

       <div className=' mt-2 flex justify-center'>

       <h2 className='  text-4xl font-bold'>{props.data['humidity']} </h2>
       <h5 className=' text-3xl p-1'> %</h5>
       </div>
       <div className='mt-3'>

       <p> Feel Like {props.data['feels_like']}</p>
       <p>Humidity is {props.data['humidity']}</p>
       <p>Wind Degrees {props.data['wind_degrees']}</p>
       </div>

    </div>

    <div className='text-center w-80 h-60 border-2 rounded-md m-3 border-slate-800'>
        <h1 className='bg-slate-800  text-2xl p-2 font-semibold rounded-t  text-white'>Wind</h1>
        <div className=' mt-2 flex justify-center'>

          <h2 className='  text-4xl font-bold'>{props.data['wind_speed']}</h2>
          <h5 className=' text-3xl p-1'> km/hr</h5>
        </div>
        <div className='mt-3'>

          <p>Wind speed is {props.data['wind_speed']}</p>
          <p>Sunrise time is {props.data['sunrise']}</p>
          <p>Sunset time is {props.data['sunset']}</p>
        </div>
        

      </div>




    </div>
  )
}
