import React, { Component } from "react";
import logo from './logo.svg';
import './App.css';

const App = () => {
  
  const APP_ID = "2ee0676b";
  const APP_KEY = "1ce518b3cfff59137985efdb07ee9cfc";

  const exampleReq = `https://api.edamam.com/search?q=chicken&app_id=${APP_ID}}&app_key=${APP_KEY}`

  return(
    <div className="App">
      <h1>Hello React</h1>
    </div>
  );
};

export default App;
