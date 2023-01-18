export  const GetEmployeeData =(data)=>{
    return{
        type:'GET_DATA',
        payload:data
    }

}
export const Search = (data)=>{
    return{
        type:'SINGLE_DATA',
        payload:data
    }
}

