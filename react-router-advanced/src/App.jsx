import ProtectedRoute from './components/ProtectedRoute';

function App() {
  const isAuth = true; // Simulate authentication status
  return (
    <div>
      <nav>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/profile">Profile</Link></li>
          <li><Link to="/dashboard">Dashboard</Link></li>
        </ul>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/profile" element={<Profile />}>
          <Route path="details" element={<ProfileDetails />} />
          <Route path="settings" element={<ProfileSettings />} />
        </Route>
        <Route path="/blog/:postId" element={<BlogPost />} />
        <Route element={<ProtectedRoute isAuth={isAuth} />}>
          <Route path="/dashboard" element={<h1>Dashboard</h1>} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
