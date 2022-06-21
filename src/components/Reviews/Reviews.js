import React, { useState, useEffect } from 'react';
import propTypes from 'prop-types';
import { MovieReviews } from 'services/API';

export default function Reviews(id) {
  const [reviews, setReviews] = useState([]);
  useEffect(() => {
    MovieReviews(id).then(({ results }) => setReviews(results));
  }, [id]);
  if (reviews.length > 0) {
    return (
      <ul>
        {reviews.map(({ id, author, content }) => (
          <li key={id}>
            <h3>Author: {author}</h3>
            <p>{content}</p>
          </li>
        ))}
      </ul>
    );
  } else {
    return <p>We don't have any reviews for this movie.</p>;
  }
}

Reviews.propTypes = {
  id: propTypes.string.isRequired,
};
