import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { MovieItemStyled } from './MovieTrendingItem.styled';

const MovieTrendingItem = ({ movieItem }) => {
  return (
    <MovieItemStyled>
      <Link to={`/movies/${movieItem.id}`}>
        <div>
          {movieItem.poster_path === null ? (
            <img
              alt={movieItem.original_title}
              src="https://via.placeholder.com/185x280"
            />
          ) : (
            <img
              alt={movieItem.poster_path}
              src={`http://image.tmdb.org/t/p/w185${movieItem.poster_path}`}
            ></img>
          )}
          <p>{movieItem.original_title}</p>
        </div>
      </Link>
    </MovieItemStyled>
  );
};

export default MovieTrendingItem;

MovieTrendingItem.propType = {
  movieItem: PropTypes.object,
};
