/* eslint-disable no-case-declarations */
import { GET_COUNTRIES,GET_COUNTRIE, GET_ACTIVITIES,FILTER_COUNTRIES,ORDER_COUNTRIES, FILTER_ACTIVITIES } from "./actions";

const initialState = {
  dataPaises: [],
  allPaises: [],
  paisDetail: [],
  actividades: [],
  allActividades: [],
  AtivitiesFilter:[],
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
          dataPaises: action.payload,
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

         action.payload === 'con.ALL' ?
         newActis = state.actividades : actiFilter.forEach(e=>{
          for (let i = 0; i < e.Activities.length; i++) {
            newActis.push(e.Activities[i])
          }  
         });
         
      }else{
        
         conFilter = 
          paises.filter((country)=>country.Activities.find((act)=>act.name == action.payload));
          newActis = state.allActividades;
          console.log(newActis);
        
      }
    
      return{
        ...state,
        dataPaises: conFilter,
        allActividades: newActis, 
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

    case FILTER_ACTIVITIES:

      let aux = '';
      let newFilter = [];
      let actividades = state.allActividades.sort((a,b)=>{
        if (a.name < b.name) {
          return -1;
        }
        if (a.name  > b.name) {
          return 1;
        }
        return 0;
      });
      actividades.forEach((a)=>{
        if(aux !== a.name){
          aux = a.name
          newFilter.push(a);
        }
      })
    return{
      ...state,
      AtivitiesFilter: newFilter
    }
    default:
      return { ...state };
  }
}
