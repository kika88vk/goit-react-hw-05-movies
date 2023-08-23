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
  const [page, setPage] = useState(1);
  const [totalResults, setTotalResults] = useState(null);
  const [searchParams, setSearchParams] = useSearchParams();
  const [totalPages, setTotalPages] = useState(null);

  const queryMovie = searchParams.get('query') ?? '';
  const pageMovie = Number(searchParams.get('page') ?? '');
  console.log('pageMovie', pageMovie);
  console.log('page', page);

  useEffect(() => {
    async function fetchMovieList() {
      try {
        setIsLoading(true);
        const movies = await fetchMovieSearch(queryMovie, page);
        setMoviesList(movies.results);
        setTotalResults(movies.total_results);
        setTotalPages(movies.total_pages);
      } catch (error) {
        setError(error.message);
      } finally {
        setIsLoading(false);
      }
    }
    fetchMovieList();
  }, [page, queryMovie]);

  const updateQueryString = (query, page) => {
    // const querySearchParams = query !== '' ? { query } : {};
    // const pageSerchParams = page !== '' ? { page } : {};
    if (query === '') {
      return setSearchParams({});
    }
    if (page === 0) {
      return setSearchParams({});
    }

    setPage(1);
    // setSearchParams(querySearchParams, pageSerchParams);
    setSearchParams({ query: query, page: page });
  };

  const handleBtnIncrementPage = () => {
    setPage(prevPage => prevPage + 1);
    // setSearchParams({ page: page });
  };
  const handleBtnDecrementPage = () => {
    if (page !== 1) {
      setPage(prevPage => prevPage - 1);
    }
    // setSearchParams({ page: page });
  };

  return (
    <main>
      <Searchbar onChange={updateQueryString} currentPage={page} />
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
        {totalResults !== 0 && (
          <MoviesSearchTitle>Total pages: {totalPages}</MoviesSearchTitle>
        )}

        {moviesList !== null && <MoviesSearchingList searchList={moviesList} />}
        {totalResults !== 0 && (
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
