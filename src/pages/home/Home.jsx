import React,{ useState } from 'react'
import './home.css'
import {Getdata, Patchdata} from '../../components/Fetchdata'
import { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { GetEmployeeData } from '../../redux/actions/index'
import Data from '../../components/mapemloyee/Data'
import { FaTimes } from "react-icons/fa";
const url = 'https://touchinspiration-0ada.restdb.io/rest/sample'


const Home = () => {
  
  const [ modal, setmodal ] = useState(false)
  const [val, setVal] = useState([] )
  const [ inputs, setInputs  ] = useState({
    name:'',
    email:'',
    occupation:'',
    bio:''
  })
  const [ update, setUpdate ] = useState({})
  const emplyeedata = useSelector((state)=>state)
  const dispatch = useDispatch()
   // Fetching data
  const fetchData = async()=>{
    const data = await Getdata(url)
    
    dispatch(GetEmployeeData(data))
  } 
  useEffect(()=>{
    fetchData()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  },[])


  // show Modal
   function Showmodal(element){
    setmodal(true)
      let info = emplyeedata.state.filter((item)=> item._id === element )
      if(info){
        setVal(info)
      }
   }
  //  changing inputs
  const onchangeHandler=(e)=>{
    setInputs((prev)=>({...prev, [e.target.name]:e.target.value }))

  }
  // updating ths data
  
  const updateInfo= async ()=>{
  
    setUpdate(()=>({
      name:inputs.name || val[0].name  ,
      email:inputs.email || val[0].email ,
      occupation:inputs.occupation || val[0].occupation ,
      bio:inputs.bio || val[0].bio,
      
    }))
    
  if( update ){
    
    await Patchdata(`${url}/${val[0]._id}`,update )
    fetchData()   
    
  }
    
   
    
  }
  
 
  

  
  return ( <>
  {/* modal */}
  {  modal &&   <div className='modal' >
    <div className='editInput' >
    <FaTimes  className='cancel' onClick={()=> setmodal(false) } />
     <div> 
     
      <label htmlFor="name"><b>New name</b></label> <br />
      <input type="text" id='name' name='name' defaultValue={val[0].name}  onChange={onchangeHandler } /></div>
<br />
      <div>
      
         <label htmlFor="email"><b>New email</b></label> <br />
      <input type="text" id='email' name='email' defaultValue={val[0].email}  onChange={onchangeHandler } /></div>
<br />
      <div>
    
         <label htmlFor="occupation"><b> New occupation</b></label> <br />
      <input type="text" id='occupation' name='occupation' defaultValue={val[0].occupation} onChange={onchangeHandler } /></div>
<br />
      <div> 
      
        <label htmlFor="bio"><b>New bio</b></label> <br />
      <input type="text" id='bio' name='bio'defaultValue={val[0].bio}   onChange={onchangeHandler} />
      
      </div>
      <button onClick={updateInfo} >submit</button>
    </div> 
    
  </div> }
    <div className='home' >
      {
        emplyeedata.state?.map((item, index)=>{
          return <Data key={index} {...item} Showmodal={Showmodal}  />
        })
      }
    </div> </>
  )
}

export default Home
