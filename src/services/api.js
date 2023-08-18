import axios from "axios";

const BASE_URL = "https://api.themoviedb.org";
const API_KEY = 'b4322bdf3e2859ea67c5f11069df4ded';
const options = {
    method: 'GET',
    headers: {
        accept: 'application/json',
        Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJiNDMyMmJkZjNlMjg1OWVhNjdjNWYxMTA2OWRmNGRlZCIsInN1YiI6IjY0ZGNhYmJkYjc3ZDRiMTE0MzQ3NWI0NiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.CqbSGDQtmUw3a5Fq7RSi0CObHLk2zkAuH1e2KHzFsMQ'
    }
};


export const fetchTrendingMovies = async () => {
    const { data } = await axios.get(`${BASE_URL}/3/trending/movie/day?language=en-US&api_key=${API_KEY}`, options);
    return data;
}

export const fetchMovieDetails = async (movieId) => {
    const { data } = await axios.get(`${BASE_URL}/3/movie/${movieId}?language=en-US&api_key=${API_KEY}`, options);

    return data;
}

export const fetchMovieCredits = async (movieId) => {
    const { data } = await axios.get(`${BASE_URL}/3/movie/${movieId}/credits?language=en-US&api_key=${API_KEY}`, options);

    return data;
}

export const fetchMovieReviews = async (movieId) => {
    const { data } = await axios.get(`${BASE_URL}/3/movie/${movieId}/reviews?language=en-US&api_key=${API_KEY}`, options);

    return data;
}

