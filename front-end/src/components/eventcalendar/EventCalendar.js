import { ScheduleComponent } from '@syncfusion/ej2-react-schedule';
import { Inject, Month,ViewDirective, ViewsDirective} from '@syncfusion/ej2-react-schedule';
import * as React from 'react';
import '../../../src/App.css';
import testdata from './data';
import { L10n } from '@syncfusion/ej2-base';

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

// Main Calendar Component. 
class EventCalendar extends React.Component {
 
  constructor () {
    super()
    this.data = testdata;

    
    
  } 
  
  render() {
    
    return ( <div className='mainCalendar'>
      
        <h2>Calendar of Events</h2>
      
      <ScheduleComponent currentView='Month' showHeaderBar={true} height='600px' eventSettings={{ dataSource: this.data,
      
      fields: {
          Eventid: 'Id',
          Subject: { name: 'Subject', title: 'Event Name',validation: { required: true }},
          Description: {name: 'Description',title: 'Event Description'},
          StartTime: { name: 'StartTime' },
          EndTime: { name: 'EndTime' },
          attendees: { name: 'attendees' },
          budget: { name: 'budget' },
          user_id: { name: 'user_id' },
          completed: { name: 'completed'}
      }
           
      }}>       
    
  <ViewsDirective>

    <ViewDirective option='Month'/>        
    
  </ViewsDirective>

   <Inject services={[Month]}/>

</ScheduleComponent> </div>)

  }

}

export default EventCalendar;