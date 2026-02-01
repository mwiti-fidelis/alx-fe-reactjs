import { useState } from 'react';
import { fetchUserData } from '../services/githubService';

const Search = () => {
  const [inputs, setInputs] = useState({ user: '', loc: '', repos: '' });
  const [results, setResults] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleSearch = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError(null);
    try {
      const data = await fetchUserData(inputs.user, inputs.loc, inputs.repos);
      setResults(data.items);
      if (data.items.length === 0) {
        setError("Looks like we can't find the user");
      }
    } catch (err) {
      setError("Looks like we can't find the user");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="p-5 max-w-4xl mx-auto">
      <form onSubmit={handleSearch} className="flex flex-wrap gap-3 bg-white p-6 rounded shadow-lg">
        <input className="border p-2 flex-1" placeholder="Username" onChange={e => setInputs({...inputs, user: e.target.value})} required />
        <input className="border p-2 flex-1" placeholder="Location" onChange={e => setInputs({...inputs, loc: e.target.value})} />
        <input className="border p-2 w-32" type="number" placeholder="Min Repos" onChange={e => setInputs({...inputs, repos: e.target.value})} />
        <button className="bg-blue-600 text-white px-4 py-2 rounded">Search</button>
      </form>

      {loading && <p>Loading...</p>}
      {error && <p>{error}</p>}

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6">
        {results.map(u => (
          <div key={u.id} className="border p-4 rounded flex items-center gap-4 bg-white shadow-sm">
            <img src={u.avatar_url} alt="avatar" className="w-12 h-12 rounded-full" />
            <div>
              <h2 className="font-bold">{u.login}</h2>
              <p>{u.location || 'No location'}</p>
              <p>Repos: {u.public_repos}</p>
              <a href={u.html_url} target="_blank" rel="noreferrer" className="text-blue-500 text-sm">View Profile</a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Search;