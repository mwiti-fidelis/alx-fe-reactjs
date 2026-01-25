import { create } from 'zustand';

const useRecipeStore = create((set) => ({
  recipes: [],
  favorites: [], // 👈 New: array of favorite recipe IDs
  searchTerm: '',
  filteredRecipes: [],

  addRecipe: (newRecipe) =>
    set((state) => ({
      recipes: [...state.recipes, newRecipe],
    })),

  updateRecipe: (id, updatedData) =>
    set((state) => ({
      recipes: state.recipes.map((recipe) =>
        recipe.id === id ? { ...recipe, ...updatedData } : recipe
      ),
    })),

  deleteRecipe: (id) =>
    set((state) => ({
      recipes: state.recipes.filter((recipe) => recipe.id !== id),
    })),

  addFavorite: (recipeId) =>
    set((state) => ({
      favorites: [...state.favorites, recipeId],
    })),

  removeFavorite: (recipeId) =>
    set((state) => ({
      favorites: state.favorites.filter((id) => id !== recipeId),
    })),

  setSearchTerm: (term) =>
    set((state) => {
      const filtered = state.recipes.filter((recipe) =>
        recipe.title.toLowerCase().includes(term.toLowerCase())
      );
      return { searchTerm: term, filteredRecipes: filtered };
    }),

  // 👇 Generate recommendations based on favorites
  generateRecommendations: () =>
    set((state) => {
      const recommended = state.recipes.filter((recipe) => {
        // Don't recommend if already favorited
        if (state.favorites.includes(recipe.id)) return false;
        // Mock: 50% chance to recommend (you can improve this later!)
        return Math.random() > 0.5;
      });
      return { recommendations: recommended };
    }),
}));

export default useRecipeStore;