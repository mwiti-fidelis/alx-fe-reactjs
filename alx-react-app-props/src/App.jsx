import ProfilePage from './ProfilePage';
import UserContext from './UserContext'; // Import the context

function App() {
  const userData = { name: "Jane Doe", email: "jane.doe@example.com" };

  return (
    // Wrap ProfilePage and provide the userData value
    <UserContext.Provider value={userData}>
      <ProfilePage />
    </UserContext.Provider>
  );
}

export default App;