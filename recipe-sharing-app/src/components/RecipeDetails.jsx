import { useParams } from 'react-router-dom';
import { useRecipeStore } from '../stores/recipeStore';
import { Link } from 'react-router-dom';

const RecipeDetails = () => {
  const { id } = useParams();
  const recipe = useRecipeStore((state) =>
    state.recipes.find((r) => r.id === parseInt(id))
  );

  const favorites = useRecipeStore((state) => state.favorites);
  const addFavorite = useRecipeStore((state) => state.addFavorite);
  const removeFavorite = useRecipeStore((state) => state.removeFavorite);

  const toggleFavorite = () => {
    if (favorites.includes(parseInt(id))) {
      removeFavorite(parseInt(id));
    } else {
      addFavorite(parseInt(id));
    }
  };

  if (!recipe) {
    return <div>Recipe not found.</div>;
  }

  return (
    <div>
      <h2>{recipe.title}</h2>
      <p>{recipe.description}</p>
      <button onClick={toggleFavorite}>
        {favorites.includes(parseInt(id)) ? '❤️' : '♡'} Toggle Favorite
      </button>
      <br /><br />
      <Link to={`/edit/${id}`}>Edit Recipe</Link> |{' '}
      <button onClick={() => handleDelete(recipe.id)}>Delete Recipe</button>
    </div>
  );
};

const handleDelete = (id) => {
  if (confirm('Are you sure?')) {
    const deleteRecipe = useRecipeStore.getState().deleteRecipe;
    deleteRecipe(id);
  }
};

export default RecipeDetails;