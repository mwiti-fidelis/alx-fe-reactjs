import axios from 'axios';

const GITHUB_SEARCH_URL = "https://api.github.com/search/users?q=";

export const fetchUserData = async (username, location = '', minRepos = '') => {
  let query = username;
  if (location) query += `+location:${location}`;
  if (minRepos) query += `+repos:>=${minRepos}`;

  const response = await axios.get(`${GITHUB_SEARCH_URL}${query}`);
  return response.data;
};
