import React, {useEffect, useState} from 'react';
import RecipeCard from './RecipeCard';
import "./App.css"

function App() {
  const APP_ID = "41a123e6"
  const APP_KEY = "4102a6960f90afe8e1f3d4f2ad201ee7"

  const [recipes, setRecipes] = useState([])
  const [search, setSearch] = useState('')
  const [query, setQuery] = useState('chicken')

  useEffect(() => {
    getRecipes()
}, [query])

  const getRecipes = async () => {
      const response = await fetch(`https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}`)
      const data = await response.json();
      setRecipes(data.hits);
      console.log(data.hits)
      console.log(data)
  }

  const onChange = (e) =>{
      setSearch(e.target.value)
  } 

  const getSearch = e => {
    e.preventDefault()
    setQuery(search)
  }

  return (
    <div className="App">
      <form className="searchForm" onSubmit={getSearch}>
          <input className="searchBar" type='text' value={search} onChange={onChange}/>
          <button className="searchButton" type="submit"> Search </button>
      </form>

      <div className="recipes">
      {recipes.map(recipe => (<RecipeCard title={recipe.recipe.label} calories={recipe.recipe.calories} image={recipe.recipe.image} ingredients={recipe.recipe.ingredients}/>))}
      </div>
    </div>
  );
}

export default App;
