import axios from 'axios'
import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import './update.css'
const url = '  https://us-central1-ti-reactjs-test.cloudfunctions.net/app/api/user' 


const Update = () => {
    const [modal, setModal] = useState(false)
    const [val, setVal] = useState({
        name:'',
        email:'',
        occupation:'',
        bio:'',
    })
    const [id, setId] = useState('')
    const [ input, setInput ] = useState( '')
    const [ singleData, setSingleDtal ] = useState( {})
   const employeeData = useSelector((state)=> state)
const SearchUser=(name)=>{
    const data = employeeData.data.filter((item)=> item.name.split(' ').join('') === name  )
    // console.log(employeeData.data.id)
    if( data.length ===0 ){
        return
    }else{
    setId(data[0].id)
        return data[0].id
    }
   
}

 const SingleUserInfo = ()=>{

    let iD =   SearchUser(input.split(' ').join(''))
    
   
   if (iD){
    axios.get(`${url}/${iD}`)
    .then((response) =>setSingleDtal(response.data) )
   }else{
    alert('Sorry, User not found' )
   }
    

 }
function changeValue(e){
    setVal((prev)=>({...prev,  [e.target.name]:e.target.value }))
    
}
    // patching the data
function updateInfo(){

    let data = {
        name:val.name || singleData.name ,
        email:val.email || singleData.email,
        occupation:val.occupation || singleData.occupation ,
        bio: val.bio || singleData.bio ,
        
    }
    

    
    axios.patch(`${url}/${id}`, data)
    .then((response)=> console.log(response) )

}
    


  return ( <>
    <div className='input' >
        <input type="text" placeholder='Search by name' onChange={(e)=> setInput(e.target.value) } />
      <button onClick={SingleUserInfo} > search </button>
    </div>
     <div className='update' >
     <div className=' udateinfo' >
       <p> <b>Name</b>:  {singleData?.name}</p>
       <p><b>Email</b>: { singleData?.email}</p>
       <p><b>Occupation</b>:  { singleData?.occupation}</p>
       <p> <b>Bio</b>: {singleData?.bio} </p>
       <button onClick={()=>{
       
        if(Object.keys(singleData).length !== 0 ) {
            setModal(true)
        }else{
            
            alert('There are is no data to edit')
        }
       }} >Edit</button>
       
     </div>
    
     
   </div>
   {
    modal && <div className='modal' >
        <button className='exitBtn' onClick={()=> setModal(false)} >exit</button>
        <div className='editInput' >
            <div>
                <input type="text" name='name' defaultValue={singleData?.name} onChange={changeValue}  />
            </div>
            <div>
                <input type="text" name='email' defaultValue={singleData?.email} onChange={changeValue} />
            </div>
            <div>
                <input type="text" name='occupation' defaultValue={singleData?.occupation}  onChange={changeValue} />
            </div>
            <div>
                <input id='bio' type="text" name='bio' defaultValue={singleData?.bio} onChange={changeValue} />
            </div>
            <button onClick={updateInfo} >Update</button>
        </div>
       
    </div>
   }
   </>
  )
}

export default Update
