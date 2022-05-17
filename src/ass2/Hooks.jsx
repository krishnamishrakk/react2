import React from 'react'
import { useState } from 'react'
import './hooks.css'


export default function Hooks() {
    const[value, setValue]= useState(0)
  return (
    <div className='hooks'>
        <h1>{value}</h1>
       <h1> <button onClick={()=>setValue(value+1)}> Increment</button></h1>
        <h1><button onClick={()=>setValue(value-1)}>Decrement</button></h1>
        <h1><button onClick={()=>setValue(0)}>Reset</button></h1>
    </div>
  )
}
