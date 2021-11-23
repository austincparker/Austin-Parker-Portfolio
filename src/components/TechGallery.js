import React from 'react';
import PropTypes from 'prop-types';

export default function TechGalleryItem({ techItem }) {
  return (
    <div>
      <h5>{techItem.firebaseKey}</h5>
      <h5>{techItem.name}</h5>
      <h5>{techItem.firebaseKey}</h5>
      <img width="100px" src={techItem.imageUrl} alt="Card cap" />
    </div>
  );
}

TechGalleryItem.propTypes = {
  techItem: PropTypes.shape({
    firebaseKey: PropTypes.string,
    name: PropTypes.string,
    imageUrl: PropTypes.string,
  }).isRequired,
};
