import React, { useState, useEffect } from 'react';
import Searchbar from 'components/SearchBar/Searchbar';
import { fetchMovieSearch } from 'services/api';
import { useSearchParams } from 'react-router-dom';
import { RotatingLines } from 'react-loader-spinner';
import MoviesSearchingList from 'components/MoviesSearchingList/MoviesSearchingList';
// import { useDeferredValue } from 'react';
import { Button } from 'components/Button/Button';
import { MoviesSearchListStyled, MoviesSearchTitle } from './MoviesPage.styled';
import { ButtonWrapStyled } from 'components/Button/Button.styled';

const MoviesPage = () => {
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [moviesList, setMoviesList] = useState(null);
  const [totalResults, setTotalResults] = useState(null);
  const [searchParams, setSearchParams] = useSearchParams();
  const [totalPages, setTotalPages] = useState(null);
  const [page, setPage] = useState(Number(searchParams.get('page') ?? ''));
  const [query, setQuery] = useState(searchParams.get('query') ?? '');

  // const queryMovie = searchParams.get('query') ?? '';
  // const pageMovie = Number(searchParams.get('page') ?? '');
  // console.log('pageMovie', pageMovie);
  // console.log('page', page);

  useEffect(() => {
    async function fetchMovieList() {
      try {
        setIsLoading(true);
        const movies = await fetchMovieSearch(query, page);
        setMoviesList(movies.results);
        setTotalResults(movies.total_results);
        setTotalPages(movies.total_pages);
      } catch (error) {
        setError(error.message);
      } finally {
        setIsLoading(false);
      }
    }

    if (!page || !query) {
      setSearchParams({});
    } else {
      fetchMovieList();
      setSearchParams({ query: query, page: page });
    }
  }, [page, query, setSearchParams]);

  const updateQueryString = query => {
    setPage(1);
    setQuery(query);
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
      <Searchbar onChange={updateQueryString} query={query} />
      <MoviesSearchListStyled>
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
        {totalResults && (
          <MoviesSearchTitle>Total pages: {totalPages}</MoviesSearchTitle>
        )}

        {moviesList && <MoviesSearchingList searchList={moviesList} />}
        {totalResults && (
          <MoviesSearchTitle>-- Page {page} --</MoviesSearchTitle>
        )}
        {moviesList?.length < totalResults / page && (
          <ButtonWrapStyled>
            <Button
              onChangePage={handleBtnDecrementPage}
              title="Previous page"
            />
            <Button onChangePage={handleBtnIncrementPage} title="Next page" />
          </ButtonWrapStyled>
        )}
      </MoviesSearchListStyled>
    </main>
  );
};

export default MoviesPage;
