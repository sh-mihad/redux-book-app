import { FILTERS, SEARCHTERM } from "./actionType";
const initialState = {
    filter:"all",
    searchTerm:""
}

const statusReducer = (state=initialState,action)=>{
   switch(action.type){
    case SEARCHTERM:
        return {...state,searchTerm:action.payload}
    case FILTERS:
        return {...state,filter:action.payload}
    default:
        return state;
   }

}


export default statusReducer;