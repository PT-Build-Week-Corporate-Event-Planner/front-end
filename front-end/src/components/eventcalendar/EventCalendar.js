import { ScheduleComponent } from '@syncfusion/ej2-react-schedule';
import { Inject, Month,ViewDirective, ViewsDirective} from '@syncfusion/ej2-react-schedule';
import * as React from 'react';
import * as ReactDOM from "react-dom";
import { Ajax } from '@syncfusion/ej2-base';
import '../../../src/App.css';
import { DataManager, UrlAdaptor } from '@syncfusion/ej2-data';
import axios from 'axios';


class EventCalendar extends React.Component {
  constructor () {
    super()
    this.data = [{
      Id: 1,
      Subject: 'Explosion of Betelgeuse Star',
      StartTime: new Date(2019, 9, 15, 9, 30),
      EndTime: new Date(2019, 9, 15, 11, 0)
  }, {
      Id: 2,
      Subject: 'Thule Air Crash Report',
      StartTime: new Date(2019, 9, 12, 12, 0),
      EndTime: new Date(2019, 9, 12, 14, 0)
  }, {
      Id: 3,
      Subject: 'Blue Moon Eclipse',
      StartTime: new Date(2019, 9, 13, 9, 30),
      EndTime: new Date(2019, 9, 13, 11, 0)
  }, {
      Id: 4,
      Subject: 'Meteor Showers in 2018',
      StartTime: new Date(2019, 9, 14, 13, 0),
      EndTime: new Date(2019, 9, 14, 14, 30)
  }];
  } 
  render() {
    
    return ( <div className='mainCalendar'><ScheduleComponent currentView='Month' height='600px' eventSettings={{ dataSource: this.data }}>       
    
  <ViewsDirective>

  <ViewDirective option='Month'/>        
    
  </ViewsDirective>

   <Inject services={[Month]}/>

</ScheduleComponent> </div>)

  }

}

export default EventCalendar;