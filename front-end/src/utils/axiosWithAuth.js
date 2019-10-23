import axios from "axios";

export const axiosWithAuth = () => {
  debugger;
  const token = localStorage.getItem( "token" );
  
  return axios.create( {
    baseURL: "https://corporate-event-planner.herokuapp.com/", headers: {
      "Authorization": token,
    },
  } );
};