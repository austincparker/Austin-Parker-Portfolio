import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { getTech } from '../api/data/techData';
import TechGalleryItem from '../components/TechGallery';

export default function Technologies({ admin }) {
  const [tech, setTech] = useState([]);

  useEffect(() => {
    getTech().then(setTech);
  }, []);

  return (
    <div className="text-center">
      <h1 className="display-4">Technologies</h1>
      <div className="container d-flex justify-content-center flex-wrap">
        {tech.map((techItem) => (
          <TechGalleryItem
            key={techItem.firebaseKey}
            tech={tech}
            setTech={setTech}
            techItem={techItem}
            admin={admin}
          />
        ))}
      </div>
      {admin ? (
        <Link className="" to="/addtech">
          Create a Tech Item
        </Link>
      ) : (
        ''
      )}
    </div>
  );
}

Technologies.defaultProps = {
  admin: null,
};

Technologies.propTypes = {
  admin: PropTypes.shape(PropTypes.obj),
};
