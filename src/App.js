import './App.css';
import { useState } from 'react';
import { searchRecipe } from './api/api';
import Recipe from './components/Recipe';
import SearchInput from './components/SearchInput';
import Loading from './components/Loading';

function App() {
  const [recipes, setRecipes] = useState([]);
  const [loading, setLoading] = useState(false);

  // useEffect(() => {
  //   async function fetchdata(q) {
  //     const response = await searchRecipe(q);
  //     setRecipes(response.data.hits);
  //   }
  //   fetchdata('banana');
  // }, []);

  const handlesearch = async (q) => {
    setLoading(false);
    setRecipes([]);
    setLoading(true);
    const response = await searchRecipe(q);
    setLoading(false);
    setRecipes(response.data.hits);
    console.log(recipes);
  };

  return (
    <div className='container'>
      <SearchInput handlesearch={handlesearch} />
      {loading ? <Loading /> : ' '}
      {recipes.length === 0 && !loading ? (
        <center>Search for recipe</center>
      ) : (
        ' '
      )}
      {recipes.length > 0 &&
        recipes.map(({ recipe }) => (
          <Recipe key={recipe.label} recipe={recipe} />
        ))}
    </div>
  );
}

export default App;
