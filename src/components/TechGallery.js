import React from 'react';
import PropTypes from 'prop-types';
import { Button } from 'reactstrap';
import { deleteTech, getTech } from '../api/data/techData';

export default function TechGalleryItem({ techItem, admin, setTech }) {
  return (
    <div className="m-3">
      <h5>{techItem.name}</h5>
      <img width="100px" src={techItem.imageUrl} alt="Card cap" />
      <div>
        {admin ? (
          <Button
            color="danger"
            onClick={() => deleteTech(techItem.firebaseKey).then(() => getTech().then(setTech))}
          >
            Delete
          </Button>
        ) : (
          ''
        )}
      </div>
    </div>
  );
}

TechGalleryItem.defaultProps = {
  admin: null,
};

TechGalleryItem.propTypes = {
  techItem: PropTypes.shape({
    firebaseKey: PropTypes.string,
    name: PropTypes.string,
    imageUrl: PropTypes.string,
  }).isRequired,
  admin: PropTypes.shape(PropTypes.obj),
  setTech: PropTypes.func.isRequired,
};
