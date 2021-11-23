import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { useHistory } from 'react-router';
import { createTech } from '../api/data/techData';

const initialState = {
  firebaseKey: '',
  name: '',
  imageUrl: '',
};

export default function TechForm({ obj }) {
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

  // const resetForm = () => {
  //   setFormInput(initialState);
  // };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (obj.firebaseKey) {
      console.warn('tech!');
      // updateProject(obj.firebaseKey, formInput).then(() => {
      //   resetForm();
      //   history.push('/technologies');
      // });
    } else {
      createTech({ ...formInput }).then(() => history.push('/technologies'));
    }
  };

  return (
    <div>
      <h1>Tech Form</h1>
      <div
        className="card-body"
        style={{ justifyContent: 'space-between', border: '2px solid black' }}
      >
        <form onSubmit={handleSubmit}>
          <div>
            <div>
              <label htmlFor="name">
                Tech Name
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
          </div>
          <button type="submit">Submit</button>
        </form>
      </div>
    </div>
  );
}

TechForm.propTypes = {
  obj: PropTypes.shape(PropTypes.obj),
};

TechForm.defaultProps = {
  obj: {},
};
