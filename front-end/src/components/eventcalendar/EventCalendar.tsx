import { ScheduleComponent } from '@syncfusion/ej2-react-schedule';
import { Inject, Month,ViewDirective, ViewsDirective} from '@syncfusion/ej2-react-schedule';
import * as React from 'react';
import * as ReactDOM from "react-dom";
import { Ajax } from '@syncfusion/ej2-base';
import '../../../src/App.css';
import { DataManager, UrlAdaptor } from '@syncfusion/ej2-data';
import axios from 'axios';
import testdata from './data';
import { extend, L10n } from '@syncfusion/ej2-base';

// Event Buttons 
L10n.load({
  'en-US': {
      'schedule': {
          'saveButton': 'Update Event',
          'cancelButton': 'Close Event',
          'deleteButton': 'Remove Event',
          'newEvent': 'Add a new Event',
      },
  }
});



class EventCalendar extends React.Component {
 
  constructor () {
    super()
    this.data = testdata;
    //private dataManager: Object = [];
    //let ajax = new Ajax('https://corporate-event-planner-webeu.herokuapp.com/api/events', 'GET', false);
    //ajax.onSuccess = function (value) {
    //dataManager = value; }
    //console.log(ajax);
  } 
  
  
  render() {
    
    return ( <div className='mainCalendar'>
      
        <h2>Calendar of Events</h2>
      
      <ScheduleComponent currentView='Month' height='600px' ref={t => this.scheduleObj = t} eventSettings={{ dataSource: this.data}}>       
    
  <ViewsDirective>

    <ViewDirective option='Month'/>        
    
  </ViewsDirective>

   <Inject services={[Month]}/>

</ScheduleComponent> </div>)

  }

}

export default EventCalendar;