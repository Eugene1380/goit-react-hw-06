//slack 5-hw
//https://developer.themoviedb.org/reference/trending-movies
//"https://api.themoviedb.org/3/trending"
//const bearer_token = "a28722a8c97664c4233c09ba9786f7fd"; //Ключ API

//https://developer.themoviedb.org/reference/movie-reviews
// const options = {
//   method: 'GET',
//   headers: {
//     accept: 'application/json',
//     Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI3NjljZTRkYmU3Mjk3OGUyZGQ2Y2I3NDhkMTZkNjU1MCIsIm5iZiI6MTcxOTQyNDM2Ny40MDYxODMsInN1YiI6IjY2N2M0OTU3NTUyZDI0ZjliOTJlOTA0ZCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.0pILDGm295CwlFv8qwssRAANIK9ghr3lb34plxy3qwU'
//   }
// };

import axios from "axios";
axios.defaults.baseURL = "https://api.themoviedb.org/3";
const options = {
  headers: {
    accept: "application/json",
    Authorization:
      "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI3NjljZTRkYmU3Mjk3OGUyZGQ2Y2I3NDhkMTZkNjU1MCIsIm5iZiI6MTcxOTQyNDM2Ny40MDYxODMsInN1YiI6IjY2N2M0OTU3NTUyZDI0ZjliOTJlOTA0ZCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.0pILDGm295CwlFv8qwssRAANIK9ghr3lb34plxy3qwU",
  },
};

export const getFilms = async () => {
  //const { data } = await instance.get('/all');
  const response = await axios.get(`/trending/movie/day`, options);
  console.log("response >>", response);
  return response.data;
};

export const getFilmDetails = async (movieId) => {
  const response = await axios.get(`/movie/${movieId}`, options);
  return response.data;
};

export const getSearchFilm = async (query) => {
  const response = await axios.get(`/search/movie?query=${query}`, options);
  return response.data;
};

// export const getMovieCast = async movieId => {
//   const response = await axios.get(`/movie/${movieId}/credits`, options);
//   return response.data;
// };
export const getFilmCast = async (movieId) => {
  const response = await axios.get(`/movie/${movieId}/credits`, options);
  return response.data;
};

export const getFilmReviews = async (movieId) => {
  const response = await axios.get(`/movie/${movieId}/reviews`, options);
  return response.data;
};

//blended-03
//'https://api.themoviedb.org/3/search/movie?query=dog&include_adult=false&language=en-US&page=1', options)
// export const fetchFilm = async moveId => {
//   const { data } = await axios.get(`/name/${id}`);
//   const country = transformCountryData(Object.values(data));

//   return country[0];
// };
