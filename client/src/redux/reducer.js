import { GET_COUNTRIES,GET_COUNTRIE, GET_ACTIVITIES } from "./actions";
const initialState = {
  dataPaises: [],
  actividades: [],
};

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case GET_COUNTRIES:
        return{
            ...state,
            dataPaises: action.payload
        }
    case GET_COUNTRIE:
        return{
          ...state,
          dataPaises: action.payload
        } 
    case GET_ACTIVITIES:
      return{
        ...state,
        actividades: action.payload
      }        
    default:
      return { ...state };
  }
}
