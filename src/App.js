import React, { useEffect, useState } from "react";
import Recipe from "./Recipe";
import './App.css';

const App = () => {
  
  const APP_ID = "2ee0676b";
  const APP_KEY = "1ce518b3cfff59137985efdb07ee9cfc";

  const [recipes, setRecipes] = useState([]);

  useEffect(() => {
    getRecipes();
  },[]);

  const getRecipes = async () => {
    const response = await fetch(`https://api.edamam.com/search?q=chicken&app_id=${APP_ID}}&app_key=${APP_KEY}`);
    const data = await response.json();
    setRecipes(data.hits);
  }

  return(
    <div className="App">
      <form className="search-form">
        <input className="search-bar" type="text"/>
        <button className="search-button" type="submit">Search</button>
      </form>
    </div>
  );
};

export default App;
