import './home.css'
import {Getdata} from '../../components/Fetchdata'
import { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { GetEmployeeData } from '../../redux/actions/index'
import Data from '../../components/mapemloyee/Data'

const url = 'https://us-central1-ti-reactjs-test.cloudfunctions.net/app/api/users'


const Home = () => {

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
  
 


  
  return ( <>
 
    <div className='home' >
      {
        emplyeedata?.data?.map((item, index)=>{
          return <Data key={index} {...item}  />
        })
      }
    </div> </>
  )
}

export default Home
