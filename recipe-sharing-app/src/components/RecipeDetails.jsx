import { useParams } from 'react-router-dom';
import { useRecipeStore } from '../stores/recipeStore';
import { Link } from 'react-router-dom';
import DeleteRecipeButton from './DeleteRecipeButton'; // 👈 Import

const RecipeDetails = () => {
  const { id } = useParams();
  const recipe = useRecipeStore((state) =>
    state.recipes.find((r) => r.id === parseInt(id))
  );

  if (!recipe) {
    return <div>Recipe not found.</div>;
  }

  return (
    <div>
      <h2>{recipe.title}</h2>
      <p>{recipe.description}</p>
      <Link to={`/edit/${id}`}>Edit Recipe</Link> |{' '}
      <DeleteRecipeButton recipeId={recipe.id} /> {/* 👈 Use component */}
    </div>
  );
};

export default RecipeDetails;