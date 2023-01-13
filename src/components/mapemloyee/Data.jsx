import React from 'react'
import './data.css'
import { FaUserAlt } from "react-icons/fa";
import { useState } from 'react';

const Data = ({name,email,occupation,bio, Showmodal,_id}) => {
  const [moretext, setmoreText] = useState(false)
  
  
  return (
 
    <div className='data' >
            <FaUserAlt className='user' />      
      <div className='info' >
        <p> <b>Name</b>:  {name}</p>
        <p><b>Email</b>: {email}</p>
        <p><b>Occupation</b>:  {occupation}</p>
        <p> <b>Bio</b>:  {moretext?bio:  `${bio.substring(0,10)}...` } <span onClick={()=>setmoreText((prev)=>!prev)} >{moretext?'showless': 'Readmore'}</span>    </p>
        <button onClick={()=>Showmodal(_id)} >Update Info</button>
      </div>
     
      
    </div>
    
  )
}

export default Data
