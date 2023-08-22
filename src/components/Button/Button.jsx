import PropTypes from 'prop-types';
import { ButtonStyled } from './Button.styled';

export const Button = ({ onChangePage, title }) => {
  return (
    <div>
      <ButtonStyled type="submit" onClick={onChangePage}>
        {title}
      </ButtonStyled>
    </div>
  );
};

Button.propTypes = {
  onChangePage: PropTypes.func,
  title: PropTypes.string,
};
