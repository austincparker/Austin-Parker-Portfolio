import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { useHistory } from 'react-router';
import { createProjects } from '../api/data/projectData';

const initialState = {
  firebaseKey: '',
  name: '',
  languages: '',
  description: '',
  imageUrl: '',
  appLink: '',
  githubRepo: '',
  otherTools: '',
};

export default function ProjectForm({ obj }) {
  const [formInput, setFormInput] = useState(initialState);
  const history = useHistory();

  useEffect(() => {
    if (obj.firebaseKey) {
      setFormInput(obj);
    } else {
      setFormInput(initialState);
    }
  }, [obj]);

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormInput((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    createProjects({ ...formInput }).then(() => history.push('/projects'));
  };

  return (
    <div>
      <h1>Project Form</h1>
      <div
        className="card-body"
        style={{ justifyContent: 'space-between', border: '2px solid black' }}
      >
        <form onSubmit={handleSubmit}>
          <div>
            <div>
              <label htmlFor="name">
                Project Name
                <input
                  style={{
                    border: '2px solid black',
                    height: '2.5rem',
                    width: '30rem',
                  }}
                  id="name"
                  name="name"
                  value={formInput.name}
                  onChange={handleChange}
                  required
                  className="m-2"
                />
              </label>
            </div>
            <div>
              <label htmlFor="languages">
                Languages
                <input
                  style={{
                    border: '2px solid black',
                    height: '2.5rem',
                    width: '30rem',
                  }}
                  id="languages"
                  name="languages"
                  value={formInput.languages}
                  onChange={handleChange}
                  required
                  className="m-2"
                />
              </label>
            </div>
            <div>
              <label htmlFor="description">
                Description
                <textarea
                  style={{
                    border: '2px solid black',
                    width: '30rem',
                    height: '6rem',
                  }}
                  id="description"
                  name="description"
                  value={formInput.description}
                  onChange={handleChange}
                  required
                  className="m-2"
                />
              </label>
            </div>
            <div>
              <label htmlFor="imageUrl">
                Image URL
                <input
                  style={{
                    border: '2px solid black',
                    height: '2.5rem',
                    width: '30rem',
                  }}
                  id="imageUrl"
                  name="imageUrl"
                  value={formInput.imageUrl}
                  onChange={handleChange}
                  required
                  className="m-2"
                />
              </label>
            </div>
            <div>
              <label htmlFor="appLink">
                App Link
                <input
                  style={{
                    border: '2px solid black',
                    height: '2.5rem',
                    width: '30rem',
                  }}
                  id="appLink"
                  name="appLink"
                  value={formInput.appLink}
                  onChange={handleChange}
                  required
                  className="m-2"
                />
              </label>
            </div>
            <div>
              <label htmlFor="githubRepo">
                GitHub Repo Link
                <input
                  style={{
                    border: '2px solid black',
                    height: '2.5rem',
                    width: '30rem',
                  }}
                  id="githubRepo"
                  name="githubRepo"
                  value={formInput.githubRepo}
                  onChange={handleChange}
                  required
                  className="m-2"
                />
              </label>
            </div>
            <div>
              <label htmlFor="otherTools">
                Other Tools
                <input
                  style={{
                    border: '2px solid black',
                    height: '2.5rem',
                    width: '30rem',
                  }}
                  id="otherTools"
                  name="otherTools"
                  value={formInput.otherTools}
                  onChange={handleChange}
                  required
                  className="m-2"
                />
              </label>
            </div>
          </div>
          <button type="submit">Submit</button>
        </form>
      </div>
    </div>
  );
}

ProjectForm.propTypes = {
  obj: PropTypes.shape(PropTypes.obj),
};

ProjectForm.defaultProps = {
  obj: {},
};
