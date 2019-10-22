import { ScheduleComponent } from '@syncfusion/ej2-react-schedule';
import { Inject, Month,ViewDirective, ViewsDirective} from '@syncfusion/ej2-react-schedule';
import * as React from 'react';
import * as ReactDOM from "react-dom";
import { Ajax } from '@syncfusion/ej2-base';
import '../../../src/App.css';
import { DataManager, UrlAdaptor } from '@syncfusion/ej2-data';

class EventCalendar extends React.Component {
  
  render() {
    
    return <ScheduleComponent currentView='Month'>
       
    
     <ViewsDirective>

        <ViewDirective option='Month'/>
        
    
    </ViewsDirective>

   <Inject services={[Month]}/>

</ScheduleComponent>

  }

}

export default EventCalendar;