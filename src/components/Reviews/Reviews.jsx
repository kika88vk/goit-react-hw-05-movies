import React from 'react';
import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { RotatingLines } from 'react-loader-spinner';
import { fetchMovieReviews } from 'services/api';

export const Reviews = () => {
  const { movieId } = useParams();
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [reviews, setReviews] = useState(null);
  const [totalReviews, setTotalReviews] = useState(0);

  useEffect(() => {
    if (!movieId) {
      return;
    }

    async function movieReviews() {
      try {
        setIsLoading(true);
        const fetchReviews = await fetchMovieReviews(movieId);
        setReviews(fetchReviews.results);
        setTotalReviews(fetchReviews.total_results);
      } catch (error) {
        setError(error.message);
      } finally {
        setIsLoading(false);
      }
    }
    movieReviews();
  }, [movieId]);

  return (
    <div>
      {error !== null && <p>Oops, something went wrong. please, try later</p>}
      {isLoading && (
        <RotatingLines
          strokeColor="grey"
          strokeWidth="5"
          animationDuration="0.75"
          width="96"
          visible={true}
        />
      )}
      {reviews !== null && (
        <ul>
          {reviews.map(rev => (
            <li key={rev.id}>
              <p>{rev.author}</p>
              <p>{rev.content}</p>
            </li>
          ))}
        </ul>
      )}
      {totalReviews === 0 && <p>We don't have any reviews for this movie.</p>}
    </div>
  );
};

export default Reviews;
