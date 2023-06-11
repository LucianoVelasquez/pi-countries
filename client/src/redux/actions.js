import axios from "axios";
export const GET_COUNTRIES = "GET_COUNTRIES";
export const GET_COUNTRIE = "GET_COUNTRIE";
export const GET_ACTIVITIES = "GET_ACTIVITIES";
export const FILTER_COUNTRIES = "FILTER_COUNTRIES";

export const getCountries = () => {
  return async function (dispatch) {
    const data = await axios.get("http://localhost:3001/countries");
    const countries = data.data;
    dispatch({ type: GET_COUNTRIES, payload: countries });
  };
};

export const getCountrie = (id) => {
  return async function (dispatch) {
    try {
      const data = await axios.get(`http://localhost:3001/countries/${id}`);
      const pais = data.data;
      dispatch({ type: GET_COUNTRIE, payload: pais });
    } catch (error) {
      window.alert('Datos incorrectos');
    }
  };
};

export const getActivities = () =>{
  return async function(dispatch){
    const data = await axios.get(`http://localhost:3001/activities`);
    const activities = data.data;
    dispatch({type: GET_ACTIVITIES, payload: activities});
  }
}

export const filterCountries = (value) =>{
  return {
    type: FILTER_COUNTRIES,
    payload: value
  }
}
