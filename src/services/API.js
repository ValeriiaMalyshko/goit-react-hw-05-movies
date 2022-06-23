import axios from 'axios';

axios.defaults.baseURL = 'https://api.themoviedb.org/3';
const KEY = '044cb4a395576b2afeda8b70ead6e0f2';

export async function MoviesList() {
  const params = {
    api_key: KEY,
  };
  try {
    const response = await axios(`/trending/all/day`, { params });
    return response.data;
  } catch (error) {
    console.error(error);
  }
}

export async function MoviesSearch(searchQuery = '') {
  const params = {
    api_key: KEY,
    query: searchQuery,
  };
  try {
    const response = await axios('/search/movie', { params });
    return response.data;
  } catch (error) {
    console.error(error);
  }
}

export async function Movie(id = '') {
  const params = {
    api_key: KEY,
    // movie_id: id,
  };
  try {
    const response = await axios(`/movie/${id}`, { params });
    return response.data;
  } catch (error) {
    console.error(error);
  }
}

export async function MovieCredits(id = '') {
  const params = {
    api_key: KEY,
    // movie_id: id,
  };
  try {
    const response = await axios(`/movie/${id}/credits`, { params });
    return response.data;
  } catch (error) {
    console.error(error);
  }
}

export async function MovieReviews(id = '') {
  const params = {
    api_key: KEY,
    // movie_id: id,
  };
  try {
    const response = await axios(`/movie/${id}/reviews`, { params });
    return response.data;
  } catch (error) {
    console.error(error);
  }
}
