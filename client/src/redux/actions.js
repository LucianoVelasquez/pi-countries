import axios from "axios";
import {GET_COUNTRIES,GET_COUNTRIE,GET_ACTIVITIES,FILTER_COUNTRIES,ORDER_COUNTRIES,/* POST_ACTIVITIE, */FILTER_ACTIVITIES, } from './Constants/index'


export const getCountries = () => {
  return async function (dispatch) {
    try{
      const data = await axios.get("http://localhost:3001/countries");
    const countries = data.data;
    dispatch({ type: GET_COUNTRIES, payload: countries });
    }catch(error){
      alert(error.message+ ' getCountries');
    }
  };
};

export const getCountrie = (id) => {
  return async function (dispatch) {
    try {
      const data = await axios.get(`http://localhost:3001/countries/${id}`);
      const pais = data.data;
      dispatch({ type: GET_COUNTRIE, payload: pais });
    } catch (error) {
      alert('Datos incorrectos');
    }
  };
};

export const getActivities = () =>{
  return async function(dispatch){
    try {
      const data = await axios.get(`http://localhost:3001/activities`);
      const activities = data.data;
      dispatch({type: GET_ACTIVITIES, payload: activities});
    } catch (error) {
      alert(error.message+' getActivities');
    }
    
  }
}

export const filterCountries = (value) =>{
  return {
    type: FILTER_COUNTRIES,
    payload: value
  }
}

export const orderCountries = (value) =>{
  return {
    type: ORDER_COUNTRIES,
    payload: value,
  }
}

export const filterActivities = () =>{
  return{
    type: FILTER_ACTIVITIES,
    payload: ''
  }
}
