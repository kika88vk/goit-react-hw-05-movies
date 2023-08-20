import PropTypes from 'prop-types';

export const Button = ({ onChangePage, title }) => {
  return (
    <div>
      <button type="submit" onClick={onChangePage}>
        {title}
      </button>
    </div>
  );
};

Button.propTypes = {
  onChangePage: PropTypes.func,
  title: PropTypes.string,
};
