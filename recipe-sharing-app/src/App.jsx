import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import RecipeList from './components/RecipeList';
import AddRecipeForm from './components/AddRecipeForm';
import RecipeDetails from './components/RecipeDetails';
import EditRecipeForm from './components/EditRecipeForm';

function App() {
  return (
    <Router>
      <div style={{ padding: '20px' }}>
        <h1>Recipe Sharing App</h1>
        <nav>
          <Link to="/">Home</Link> | 
          <Link to="/add">Add Recipe</Link> | 
          <Link to="/favorites">Favorites</Link>
        </nav>

        <Routes>
          <Route path="/" element={<RecipeList />} />
          <Route path="/add" element={<AddRecipeForm />} />
          <Route path="/recipes/:id" element={<RecipeDetails />} />
          <Route path="/edit/:id" element={<EditRecipeForm />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;