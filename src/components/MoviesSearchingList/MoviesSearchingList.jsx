import MovieTrendingItem from 'components/MoviesTrendingList/MovieTrendingItem/MovieTrendingItem';
import PropTypes from 'prop-types';

const MoviesSearchingList = ({ searchList }) => {
  if (searchList === 0) {
    return;
  }

  return (
    <ul>
      {searchList.map(movie => (
        <MovieTrendingItem key={movie.id} movieItem={movie} />
      ))}
    </ul>
  );
};

export default MoviesSearchingList;

MoviesSearchingList.propTypes = {
  searchList: PropTypes.array,
};
