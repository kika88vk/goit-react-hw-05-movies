import MovieTrendingItem from 'components/MovieTrendingItem/MovieTrendingItem';
import PropTypes from 'prop-types';

const MoviesTrendingList = ({ movieList }) => {
  if (movieList === 0) {
    return;
  }

  return (
    <ul>
      {movieList.map(movie => (
        <MovieTrendingItem key={movie.id} movieItem={movie} />
      ))}
    </ul>
  );
};

export default MoviesTrendingList;

MoviesTrendingList.propTypes = {
  movieList: PropTypes.array.isRequired,
};
