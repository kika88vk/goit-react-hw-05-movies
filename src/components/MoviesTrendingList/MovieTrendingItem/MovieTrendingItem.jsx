import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const MovieTrendingItem = ({ movieItem }) => {
  return (
    <li>
      <Link to={`/movies/${movieItem.id}`}>
        <p>{movieItem.original_title}</p>
      </Link>
    </li>
  );
};

export default MovieTrendingItem;

MovieTrendingItem.propType = {
  movieItem: PropTypes.object,
};
