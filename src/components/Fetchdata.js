import axios from 'axios'


 export async function Getdata ( url){
    const data = await axios.get(url)
     return data.data
  }

  

