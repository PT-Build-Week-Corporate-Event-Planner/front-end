import React from 'react';
import {Route} from "react-router-dom"
import Onboard from "./Onboard";
import './App.css';

function App() {
  return (
    <div className="App">
      <Route path="/signUp" component={Onboard} />
    </div>
  );
}

export default App;
