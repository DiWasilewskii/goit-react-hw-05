import axios from "axios";

axios.defaults.baseURL = "https://api.themoviedb.org/3";

const options = {
  headers: {
    accept: "application/json",
    Authorization:
      "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI4YTdjNDM5OTRmZTY4MmMwOTIyNzE0MzVkMmRjYjBkYyIsIm5iZiI6MTcyNjkyMjU2NS42MTUzNCwic3ViIjoiNjZlZWJlNWM3MzAwYTViYTIxM2IwODAwIiwic2NvcGVzIjpbImFwaV9yZWFkIl0sInZlcnNpb24iOjF9.pDadkGmpsGDucLg1sYZAeqQldOMb_wPzc4-AykOXJNw",
  },
};

export async function getMoviesTrending() {
  const response = await axios.get(
    "/trending/movie/day?language=en-US",
    options
  );
  return response.data.results;
}

export async function getMoviesDetails(movieId) {
  const response = await axios.get(`/movie/${movieId}?language=en-US`, options);
  return response.data;
}

export async function getMoviesReviews(movieId, param) {
  const response = await axios.get(
    `/movie/${movieId}/${param}?language=en-US`,
    options
  );
  return response.data;
}

export async function getMoviesSearch(moviesSearch) {
  const response = await axios.get(
    `/search/movie?query=${moviesSearch}&include_adult=false&language=en-US&page=1`,
    options
  );
  return response.data;
}