import React, { useState, useEffect } from 'react';
import Searchbar from 'components/SearchBar/Searchbar';
import { fetchMovieSearch } from 'services/api';
import { useSearchParams } from 'react-router-dom';
import { RotatingLines } from 'react-loader-spinner';
import MoviesSearchingList from 'components/MoviesSearchingList/MoviesSearchingList';
import { useDeferredValue } from 'react';
import { Button } from 'components/Button/Button';

const MoviesPage = () => {
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [moviesList, setMoviesList] = useState(null);
  const [page, setPage] = useState(1);
  const [totalResults, setTotalResults] = useState(null);
  const [searchParams, setSearchParams] = useSearchParams();

  const queryMovie = searchParams.get('query') ?? '';
  //   const pageMovie = Number(searchParams.get('page') ?? '');
  const defferedQuery = useDeferredValue(queryMovie);

  useEffect(() => {
    async function fetchMovieList() {
      try {
        setIsLoading(true);
        const movies = await fetchMovieSearch(defferedQuery, page);
        setMoviesList(movies.results);
        setTotalResults(movies.total_results);
      } catch (error) {
        setError(error.message);
      } finally {
        setIsLoading(false);
      }
    }
    fetchMovieList();
  }, [page, defferedQuery]);

  const updateQueryString = query => {
    const nextParams = query !== '' ? { query } : {};
    setSearchParams(nextParams);
  };

  const handleSubmit = evt => {
    evt.preventDefault();
    setPage(1);
  };
  const handleBtnIncrementPage = () => {
    setPage(prevPage => prevPage + 1);
  };
  const handleBtnDecrementPage = () => {
    if (page !== 1) {
      setPage(prevPage => prevPage - 1);
    }
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
        <p>--Page {page}--</p>
        {moviesList?.length < totalResults / page && (
          <>
            <Button
              onChangePage={handleBtnDecrementPage}
              title="Previous page"
            />
            <Button onChangePage={handleBtnIncrementPage} title="Next page" />
          </>
        )}
      </div>
    </main>
  );
};

export default MoviesPage;
