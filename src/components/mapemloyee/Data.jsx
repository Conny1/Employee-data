import React from 'react'
import './data.css'
import { useState } from 'react';

const Data = ({name,email,occupation,bio, Showmodal,id}) => {
  const [moretext, setmoreText] = useState(false)
  
  
  return (
 
    <div className='data' >
      <div className='info' >
        <p> <b>Name</b>:  {name}</p>
        <p><b>Email</b>: {email}</p>
        <p><b>Occupation</b>:  {occupation}</p>
        <p> <b>Bio</b>:  {moretext?bio:  `${bio.substring(0,10)}...` } <span onClick={()=>setmoreText((prev)=>!prev)} >{moretext?'showless': 'Readmore'}</span>    </p>
        
      </div>
     
      
    </div>
    
  )
}

export default Data
