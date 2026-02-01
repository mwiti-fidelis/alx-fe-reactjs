import Search from './components/Search';

function App() {
  return (
    <div className="min-h-screen bg-gray-100">
      <nav className="bg-slate-900 p-4 text-white text-center text-xl font-bold">
        GitHub User Search
      </nav>
      <Search />
    </div>
  );
}

export default App;
