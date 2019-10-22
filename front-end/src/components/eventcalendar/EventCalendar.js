import { ScheduleComponent } from '@syncfusion/ej2-react-schedule';
import { Inject, Month,ViewDirective, ViewsDirective} from '@syncfusion/ej2-react-schedule';
import * as React from 'react';
import * as ReactDOM from "react-dom";
import { Ajax } from '@syncfusion/ej2-base';
import '../../../src/App.css';
import { DataManager, UrlAdaptor } from '@syncfusion/ej2-data';
import axios from 'axios';
import testdata from './data';


//function getThData (UserID,token) {
  function getThData () {
    var thedata;
    var config = {
    
    //headers: {'Authentication': token }
  
    headers: {'Authorization': "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWJqZWN0Ijo0LCJlbWFpbCI6ImNvbGxldHRlQHRlc3QuY29tIiwiaWF0IjoxNTcxNzE4OTk1LCJleHAiOjE1NzE3MjI1OTV9.fiCJ9dBvnETxWWTWx7RljlH1HB_5WA4tezp9KwNpqCQ" }
  
  };
  
  //axios.get('https://corporate-event-planner-webeu.herokuapp.com//api/events/?user_id='+ `${UserID}`, config)

  axios.get('https://corporate-event-planner-webeu.herokuapp.com/api/events/?user_id=3', config)
        .then(response => {
    //console.log(response.data);

          thedata = response.data;
          console.log('the data ' + thedata);
          return thedata;

     })
  .catch(error => {
    console.log(error);
  });

}



class EventCalendar extends React.Component {
  constructor () {
    super()
    this.data = testdata;
    


  } 
  
  render() {
    
    return ( <div className='mainCalendar'>
      
      
      <ScheduleComponent currentView='Month' height='600px' ref={t => this.scheduleObj = t} eventSettings={{ dataSource: this.data}}>       
    
  <ViewsDirective>

  <ViewDirective option='Month'/>        
    
  </ViewsDirective>

   <Inject services={[Month]}/>

</ScheduleComponent> </div>)

  }

}

export default EventCalendar;