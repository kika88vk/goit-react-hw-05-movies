import { fetchMovieDetails } from 'services/api';
import { RotatingLines } from 'react-loader-spinner';
import { useState, useEffect, useRef } from 'react';
import { useParams } from 'react-router-dom';
import { Link, Outlet, useLocation } from 'react-router-dom';
import {
  MovieCardWrapStyled,
  InfoMovieCardStyled,
  HeadingAddInfoStyled,
  AddInfoWrapStyled,
  ListWrapAddStyled,
  LinkStyled,
} from './MovieDetailsPage.styled';

const MovieDetailsPage = () => {
  const { movieId } = useParams();
  const [movieObject, setMovieObject] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const location = useLocation();
  const goBackRef = useRef(location.state?.from ?? '/');

  useEffect(() => {
    if (!movieId) {
      return;
    }

    async function fetchMovieObject() {
      try {
        setIsLoading(true);
        const movieDetails = await fetchMovieDetails(movieId);
        setMovieObject(movieDetails);
      } catch (error) {
        setError(error.message);
      } finally {
        setIsLoading(false);
      }
    }

    fetchMovieObject();
  }, [movieId]);

  return (
    <div>
      <LinkStyled to={goBackRef.current}> Go back</LinkStyled>
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
      {movieObject !== null && (
        <div>
          <MovieCardWrapStyled>
            {movieObject.poster_path === null ? (
              <img
                alt={movieObject.original_title}
                src="https://via.placeholder.com/250x200"
              />
            ) : (
              <img
                alt={movieObject.poster_path}
                src={`http://image.tmdb.org/t/p/w300${movieObject.poster_path}`}
              ></img>
            )}

            <InfoMovieCardStyled>
              <h2>
                {movieObject.original_title} ({movieObject.release_date})
              </h2>
              <p>Rating: {movieObject.vote_average}</p>
              <div>
                <h3>Overview</h3>
                <p>{movieObject.overview}</p>
              </div>
              <div>
                <h3>Genres</h3>
                <ul>
                  {movieObject.genres.map(genre => (
                    <li key={genre.id}>{genre.name}</li>
                  ))}
                </ul>
              </div>
            </InfoMovieCardStyled>
          </MovieCardWrapStyled>
          <AddInfoWrapStyled>
            <HeadingAddInfoStyled>Additional information</HeadingAddInfoStyled>
            <ListWrapAddStyled>
              <li>
                <Link to="cast">Cast</Link>
              </li>
              <li>
                <Link to="reviews">Reviews</Link>
              </li>
            </ListWrapAddStyled>
            <Outlet />
          </AddInfoWrapStyled>
        </div>
      )}
    </div>
  );
};

export default MovieDetailsPage;
