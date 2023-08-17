import MovieTrendingItem from 'components/MovieTrendingItem/MovieTrendingItem';
import PropTypes from 'prop-types';

const MoviesTrendingList = ({ movieList }) => {
  console.log(
    '🚀 ~ file: MoviesTrendingList.jsx:4 ~ MoviesTrendingList ~ movieList:',
    movieList
  );
  const movieListArr = Array.isArray(movieList) && movieList > 0;
  return (
    <ul>
      {movieListArr &&
        movieList.map(movie => (
          <MovieTrendingItem key={movie.id} movieItem={movie} />
        ))}
    </ul>
  );
};

export default MoviesTrendingList;

MoviesTrendingList.propTypes = {
  movieList: PropTypes.array.isRequired,
};
