/* eslint-disable no-case-declarations */
import { GET_COUNTRIES,GET_COUNTRIE, GET_ACTIVITIES,FILTER_COUNTRIES } from "./actions";

const initialState = {
  dataPaises: [],
  allPaises: [],
  actividades: [],
  allActividades: [],
  currentContry: [''],
};

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case GET_COUNTRIES:
        return{
            ...state,
            dataPaises: action.payload,
            allPaises: action.payload
        }
    case GET_COUNTRIE:
        return{
          ...state,
          dataPaises: action.payload
        } 
    case GET_ACTIVITIES:
      return{
        ...state,
        actividades: action.payload,
        allActividades: action.payload
      }
    case FILTER_COUNTRIES:
      const paises = state.allPaises;
      let conFilter;
      let actiFilter;
      let newActis = [];

      if(action.payload.includes('con.')){
        conFilter = action.payload === 'con.ALL' ?
         paises: 
         paises.filter(pais => pais.continents === action.payload.split(".")[1]);
         
         actiFilter = conFilter.filter((e) => e.Activities.length >= 1); ///////Filtrado de actividades
         actiFilter.forEach(e=> newActis.push(e.Activities[0]) );

         /* console.log(newActis); */

      }else{
         conFilter = action.payload === 'act.ALL' ?
          paises.filter(e=> e.Activities.length >= 1  /* && e.name == state.currentContry */) : //
          paises.filter((country)=>country.Activities.find((act)=>act.name == action.payload));

        /* console.log(conFilter); */
      }
    
      return{
        ...state,
        dataPaises: conFilter,
        allActividades: newActis, //Filtrado de actividades
        currentContry: action.payload.split(".")[1]
      }      
    default:
      return { ...state };
  }
}
