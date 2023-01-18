const initialstate={
    data:[],

}
const GET_DATA = 'GET_DATA'


 const reducer=(state=initialstate , action)=>{
    switch( action.type ){
        case GET_DATA:
            return{ ...state,
            data:action.payload
        }
       
        default:
            return state
    }

}
export default reducer