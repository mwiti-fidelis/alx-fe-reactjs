import { useRecipeStore } from '../stores/recipeStore';

const FavoritesList = () => {
  const favorites = useRecipeStore((state) => state.favorites);
  const recipes = useRecipeStore((state) => state.recipes);

  // Get full recipe objects for favorites
  const favoriteRecipes = favorites.map((id) =>
    recipes.find((recipe) => recipe.id === id)
  ).filter(Boolean); // Remove undefined if recipe was deleted

  if (favoriteRecipes.length === 0) {
    return <p>No favorites yet. Click ❤️ on recipes to save them!</p>;
  }

  return (
    <div>
      <h2>⭐ My Favorites</h2>
      {favoriteRecipes.map((recipe) => (
        <div key={recipe.id} style={{ border: '1px solid #ccc', margin: '10px', padding: '10px' }}>
          <h3>{recipe.title}</h3>
          <p>{recipe.description}</p>
          <button onClick={() => handleRemoveFavorite(recipe.id)}>Remove Favorite</button>
        </div>
      ))}
    </div>
  );
};

const handleRemoveFavorite = (id) => {
  const removeFavorite = useRecipeStore.getState().removeFavorite;
  removeFavorite(id);
};

export default FavoritesList;