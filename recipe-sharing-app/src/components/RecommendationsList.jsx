import { useEffect } from 'react';
import { useRecipeStore } from './recipeStore';

const RecommendationsList = () => {
  const recommendations = useRecipeStore((state) => state.recommendations);
  const generateRecommendations = useRecipeStore((state) => state.generateRecommendations);

  // Regenerate recommendations when favorites change
  useEffect(() => {
    generateRecommendations();
  }, [useRecipeStore((state) => state.favorites)]);

  if (recommendations.length === 0) {
    return <p>No recommendations yet. Add some favorites first!</p>;
  }

  return (
    <div>
      <h2>✨ Recommended For You</h2>
      {recommendations.map((recipe) => (
        <div key={recipe.id} style={{ border: '1px solid #ccc', margin: '10px', padding: '10px' }}>
          <h3>{recipe.title}</h3>
          <p>{recipe.description}</p>
          <button onClick={() => handleAddFavorite(recipe.id)}>Add to Favorites</button>
        </div>
      ))}
    </div>
  );
};

const handleAddFavorite = (id) => {
  const addFavorite = useRecipeStore.getState().addFavorite;
  addFavorite(id);
};

export default RecommendationsList;