/* eslint-disable no-case-declarations */
import { GET_COUNTRIES,GET_COUNTRIE, GET_ACTIVITIES,FILTER_COUNTRIES,ORDER_COUNTRIES, FILTER_ACTIVITIES,DELETE_ACTIVITIE } from './Constants/index';
import { functionOrderCountries,funcrionFilterCountries,functionFilterRepeadActivites } from './Functions/index'

const initialState = {
  dataPaises: [],
  allPaises: [],
  actividades: [],
  showActivitiesFilter:[],
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
        actividades: action.payload
      }

    case FILTER_COUNTRIES:
      let countryFilter = funcrionFilterCountries(action.payload,state.allPaises);
      return{
        ...state,
        dataPaises: countryFilter,
      }

    case ORDER_COUNTRIES:
      let order = functionOrderCountries(action.payload,state.dataPaises);
      return{
        ...state,
        dataPaises: order,
      }   

    case FILTER_ACTIVITIES:
      let newFilter = functionFilterRepeadActivites(state.actividades);
    return{
      ...state,
      showActivitiesFilter: newFilter
    }
    case DELETE_ACTIVITIE:

    return{
      ...state,
    }
    default:
      return { ...state};
  }
}
