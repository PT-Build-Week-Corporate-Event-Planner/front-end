import axios from 'axios';
 
export const START_LOGIN = 'START_LOGIN'
export const SUCCESS_LOGIN = 'SUCCESS_LOGIN'
export const FAILED_LOGIN = 'FAILED_LOGIN'

export const fetchLogin = user => dispatch => {
    dispatch({ type: START_LOGIN })
    return axios
    .post("https://corporate-event-planner.herokuapp.com/api/auth/login", ``, {
      headers: {
        Authorization: "",
        "Content-Type": ""
      }
    })
    .then(res => {
      dispatch({ type: SUCCESS_LOGIN });
      localStorage.setItem("token", res.data.access_token)
      return true;
    })
    .catch(err => {
      dispatch({
        type: FAILED_LOGIN,
        payload: `Incorrect credentials`
      });
      return false;
    });
};