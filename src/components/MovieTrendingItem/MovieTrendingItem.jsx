import PropTypes from 'prop-types';

const MovieTrendingItem = ({ movieItem }) => {
  console.log('movie in item', movieItem);

  return (
    <li>
      <p>{movieItem.original_title}</p>
    </li>
  );
};

export default MovieTrendingItem;

MovieTrendingItem.propType = {
  movieItem: PropTypes.object,
};
