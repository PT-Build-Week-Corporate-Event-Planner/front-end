import React from 'react';
import './App.css';
import EventCalendar from './components/eventcalendar/EventCalendar';
//import Connect from './components/eventcalendar/EventCalendarLoader';

function App() {
  return (
    <div className="App">
      <header className="App-header">
      <EventCalendar /> 
      </header>
    </div>
  );
}

export default App;
