import React, { useEffect } from "react";
import { connect } from "react-redux";
import { getEvents } from "./actions/DataActions";
import EventCalendar from './EventCalendar'; 

const LoadingEvents = ({ getEvents, data, gettingEvents }) => {

  useEffect(() => {
   
    getSmurfs();
  }, [getEvents]);

  if (gettingEvents) {

    return <h3>Fetching Events.....</h3>;
  }

  return (
    
    <div className="myApp">
           
      <EventCalendar data={data}/>
    
    </div>
  
  );

}

const mapProps = state => {
  
  return {
    
    data: state.data,
    gettingEvents: state.gettingEvents,
    error: state.error
  
  }


};

export default connect(
  
  mapProps,

  { getEvents }

)(LoadingEvents);