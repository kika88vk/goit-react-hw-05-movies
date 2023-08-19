import React, { useState, useEffect } from 'react';
import Searchbar from 'components/SearchBar/Searchbar';
import { fetchMovieSearch } from 'services/api';
import { useSearchParams } from 'react-router-dom';
import { RotatingLines } from 'react-loader-spinner';
import MoviesSearchingList from 'components/MoviesSearchingList/MoviesSearchingList';

const MoviesPage = () => {
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [moviesList, setMoviesList] = useState(null);
  const [page, setPage] = useState(1);
  const [searchParams, setSearchParams] = useSearchParams();

  const queryMovie = searchParams.get('query') ?? '';
  //   const pageMovie = Number(searchParams.get('page') ?? '');

  useEffect(() => {
    async function fetchMovieList() {
      try {
        setIsLoading(true);
        const movies = await fetchMovieSearch(queryMovie, page);
        setMoviesList(movies.results);
      } catch (error) {
        setError(error.message);
      } finally {
        setIsLoading(false);
      }
    }
    fetchMovieList();
  }, [page, queryMovie]);

  console.log('queryMovie', queryMovie);
  console.log('moviesList', moviesList);

  const updateQueryString = query => {
    const nextParams = query !== '' ? { query } : {};
    setSearchParams(nextParams);
  };

  const handleSubmit = evt => {
    evt.preventDefault();
    setPage(1);
  };

  return (
    <main>
      <Searchbar
        value={queryMovie}
        onChange={updateQueryString}
        onSubmit={handleSubmit}
      />
      <div>
        {error !== null && <p>Oops, something went wrong. please, try later</p>}
        {isLoading && (
          <RotatingLines
            strokeColor="grey"
            strokeWidth="5"
            animationDuration="0.75"
            width="96"
            visible={true}
          />
        )}
        {moviesList !== null && <MoviesSearchingList searchList={moviesList} />}
      </div>
    </main>
  );
};

export default MoviesPage;
