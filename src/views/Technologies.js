import React, { useEffect, useState } from 'react';
import getTech from '../api/data/techData';
import TechGalleryItem from '../components/TechGallery';

export default function Technologies() {
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
          />
        ))}
      </div>
    </div>
  );
}
