import { useRecipeStore } from '../stores/recipeStore';
import { Link } from 'react-router-dom'; // ✅ Import Link

const RecipeList = () => {
  const recipes = useRecipeStore((state) => state.filteredRecipes.length > 0 
    ? state.filteredRecipes 
    : state.recipes);

  const favorites = useRecipeStore((state) => state.favorites);
  const addFavorite = useRecipeStore((state) => state.addFavorite);
  const removeFavorite = useRecipeStore((state) => state.removeFavorite);

  const toggleFavorite = (id) => {
    if (favorites.includes(id)) {
      removeFavorite(id);
    } else {
      addFavorite(id);
    }
  };

  return (
    <div>
      <h2>Recipes</h2>
      {recipes.length === 0 ? (
        <p>No recipes found.</p>
      ) : (
        recipes.map((recipe) => (
          <div key={recipe.id} style={{ border: '1px solid #ccc', margin: '10px', padding: '10px' }}>
            <h3>{recipe.title}</h3>
            <p>{recipe.description}</p>
            <button onClick={() => toggleFavorite(recipe.id)}>
              {favorites.includes(recipe.id) ? '❤️' : '♡'} Favorite
            </button>
            <Link to={`/recipes/${recipe.id}`}>View Details</Link> {/* ✅ Use Link */}
          </div>
        ))
      )}
    </div>
  );
};

export default RecipeList;