const accessToken = import.meta.env.VITE_APP_ACCESS_TOKEN;
const BASE_URL = "https://api.themoviedb.org";
const GENRE_MOVIE = `${BASE_URL}/3/genre/movie/list?language=en`;
const UPCOMING_MOVIE = `${BASE_URL}/3/movie/upcoming?language=en-US&page=1;`;

const options = {
  method: "GET",
  headers: {
    accept: "application/json",
    Authorization: `Bearer ${accessToken}`,
  },
};

export const getPopularMovie = (page = 1) => {
  const POPULAR_MOVIE = `${BASE_URL}/3/movie/top_rated?language=en-US&page=${page}`;
  const res = fetch(POPULAR_MOVIE, options);
  return res;
};

export const getGenre = () => {
  const res = fetch(GENRE_MOVIE, options);
  return res;
};

export const getUpcomingMovie = () => {
  const res = fetch(UPCOMING_MOVIE, options);
  return res;
};

export const getDetailsMovie = (id) => {
  const DETAILS_MOVIE = `${BASE_URL}/3/movie/${id}`;
  const res = fetch(DETAILS_MOVIE, options);
  return res;
};
