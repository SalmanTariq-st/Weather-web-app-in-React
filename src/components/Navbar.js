import React,{useState} from 'react'

export default function Navbar(props) {

    const [text,setText]=useState('')

    const handleInput=(e)=>
    {
        setText(e.target.value)

    }
    const handleClick=()=>
    {
        props.getTemp(text)
    }
  return (

    <div className='md:flex justify-between my-5 mx-14 font-semibold'> 
      <h1 className='text-4xl md:block flex justify-center text-slate-800 tracking-wider md:my-0 my-8'>Weatherly</h1>
      <div className='md:block flex justify-center md:mt-0 mt-20'>
      <input type='text' placeholder='Search' className='h-10 pl-2 border-solid border-2 w-52 border-slate-800 shadow rounded-lg mr-2' onChange={handleInput}></input>
      <button className='w-20 bg-slate-800 h-10 border-solid border-2 border-slate-900 text-white rounded-lg font-semibold' onClick={handleClick}>Search</button>
      </div>
    </div>
  )
}
