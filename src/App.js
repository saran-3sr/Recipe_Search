import React, { useEffect } from 'react';
import './App.css';


function App() {

  const useEffect=(()=>{
    getRecipes()
  },[]);
  
  
  const getRecipes=async (e)=>{
  e.preventDefault();
  const response=await fetch(`https://api.edamam.com/api/recipes/v2?type=public&q=chicken&app_id=ed5b0ce6&app_key=a3aca4c75c5fb220d7f4d04e3ae40e1d`);
  
  const data=await response.json()
  console.log(data);
  };
  return (
    <div>
      <h1>Hello</h1>
      <form action="submit">
        <input type="text" name="Search" id="searchBar" />
        <button onClick={getRecipes} action="submit">Search</button>
      </form>

    </div>

  );
}

export default App;
