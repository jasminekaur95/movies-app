// Importing all constants and urls
import { APP_KEY, BASE_URL } from "../config/api_config";

// Code courtesy: Paul Lam
// Method for getting movies (passing parameter of category of movie)
export const getMovies = async movieTypeCategory => {
  const api_call = await fetch(
    `${BASE_URL}/movie/${movieTypeCategory}?api_key=${APP_KEY}`
  );
  const data = await api_call.json();

  const movies = data.results;

  console.log("Movies", movies);
  return movies;
};

// Method for getting tv shows (passing parameter of category of TV show)
export const getTvShows = async tvShowTypeCategory => {
  const api_call = await fetch(
    `${BASE_URL}/tv/${tvShowTypeCategory}?api_key=${APP_KEY}`
  );
  const data = await api_call.json();

  const tvShows = data.results;

  console.log("TV Shows", tvShows);
  return tvShows;
};

// Method for getting search results (passing parameter of searchName and type)
export const getSearchResults = async (searchName, type) => {
  const api_call = await fetch(
    `${BASE_URL}/search/${type}?api_key=${APP_KEY}&query=${searchName}`
  );
  const data = await api_call.json();

  const results = data.results;

  console.log("Results", results);
  return results;
};
