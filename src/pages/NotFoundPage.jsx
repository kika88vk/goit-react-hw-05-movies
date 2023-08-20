import React from 'react';
import { Link } from 'react-router-dom';

function NotFoundPage() {
  return (
    <div>
      <h1>404</h1>
      <h2>Oops! This page is not found</h2>
      <Link to="/">
        <button>Home</button>
      </Link>
    </div>
  );
}

export default NotFoundPage;
