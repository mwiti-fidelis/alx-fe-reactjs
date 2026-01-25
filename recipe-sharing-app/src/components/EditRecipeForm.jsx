import { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useRecipeStore } from './recipeStore';

const EditRecipeForm = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const recipe = useRecipeStore((state) =>
    state.recipes.find((r) => r.id === parseInt(id))
  );

  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');

  useEffect(() => {
    if (recipe) {
      setTitle(recipe.title);
      setDescription(recipe.description);
    }
  }, [recipe]);

  const updateRecipe = useRecipeStore((state) => state.updateRecipe);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!title.trim() || !description.trim()) return;

    updateRecipe(parseInt(id), { title, description });
    navigate(`/recipes/${id}`);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        required
      />
      <textarea
        placeholder="Description"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        required
      />
      <button type="submit">Update Recipe</button>
    </form>
  );
};

export default EditRecipeForm;