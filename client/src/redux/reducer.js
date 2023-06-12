/* eslint-disable no-case-declarations */
import { GET_COUNTRIES,GET_COUNTRIE, GET_ACTIVITIES,FILTER_COUNTRIES,ORDER_COUNTRIES } from "./actions";

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
      }else{
         conFilter = 
          paises.filter((country)=>country.Activities.find((act)=>act.name == action.payload));
          newActis = state.allActividades;
        
      }
    
      return{
        ...state,
        dataPaises: conFilter,
        allActividades: newActis, 
        currentContry: action.payload.split(".")[1],
      }
    case ORDER_COUNTRIES:
      let order;
      if(action.payload === 'des'){
        order = state.dataPaises.sort((a,b)=>{
          if (a.name > b.name) {
            return -1;
          }
        
          if (a.name  < b.name) {
            return 1;
          }
        
          return 0;
        });
      }  
      if(action.payload === 'asc'){
        order = state.dataPaises.sort((a,b)=>{
          if (a.name < b.name) {
            return -1;
          }
        
          if (a.name  > b.name) {
            return 1;
          }
          return 0;
        });
      }
      if(action.payload === 'popu'){
        order = state.dataPaises.sort((a,b)=>{
          if (a.population > b.population) {
            return -1;
          }
        
          if (a.population  < b.population) {
            return 1;
          }
          return 0;
        });
      }
      
      
      
      return{
        ...state,
        dataPaises: order,
      }       
    default:
      return { ...state };
  }
}
