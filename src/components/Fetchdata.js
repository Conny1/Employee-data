import axios from 'axios'
const options = {
    headers: {
        'Content-Type': 'application/json',
        'x-apikey': '63be7360969f06502871ad7f'
    }
  };

 export async function Getdata ( url){
    const data = await axios.get(url,options)
     return data.data
  }

  export async function Patchdata ( url, info){
    await axios.patch(url, info, options).then((resp)=> console.log(resp) )
    
     
  }

