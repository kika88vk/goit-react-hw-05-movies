import React from 'react';
import { Link } from 'react-router-dom';
import { ButtonStyled } from 'components/Button/Button.styled';

function NotFoundPage() {
  return (
    <div>
      <h1>404</h1>
      <h2>Oops! This page is not found</h2>
      <Link to="/">
        <ButtonStyled>Go back Home</ButtonStyled>
      </Link>
    </div>
  );
}

export default NotFoundPage;
