import MovieTrendingItem from 'components/MoviesTrendingList/MovieTrendingItem/MovieTrendingItem';
import PropTypes from 'prop-types';
import { MoviesListStyled } from './MoviesSearchingList.styled';

const MoviesSearchingList = ({ searchList }) => {
  if (searchList === 0) {
    return;
  }

  return (
    <MoviesListStyled>
      {searchList.map(movie => (
        <MovieTrendingItem key={movie.id} movieItem={movie} />
      ))}
    </MoviesListStyled>
  );
};

export default MoviesSearchingList;

MoviesSearchingList.propTypes = {
  searchList: PropTypes.array,
};
