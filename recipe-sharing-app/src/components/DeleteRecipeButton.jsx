import { useRecipeStore } from '../stores/recipeStore';

const DeleteRecipeButton = ({ recipeId }) => {
  const deleteRecipe = useRecipeStore((state) => state.deleteRecipe);

  const handleDelete = () => {
    if (confirm('Are you sure you want to delete this recipe?')) {
      deleteRecipe(recipeId);
    }
  };

  return (
    <button onClick={handleDelete}>
      Delete Recipe
    </button>
  );
};

export default DeleteRecipeButton;