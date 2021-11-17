import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { useHistory } from 'react-router';

const initialState = {
  name: '',
  languages: '',
  description: '',
  imageUrl: '',
  firebaseKey: '',
  appLink: '',
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

  const resetForm = () => {
    setFormInput(initialState);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormInput((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.warn({ ...formInput });
    resetForm();
    history.push('/projects');
  };

  return (
    <div>
      <h1>Project Form</h1>
      <form onSubmit={handleSubmit}>
        <label>
          <input
            id="projectName"
            name="projectName"
            value={formInput.name}
            onChange={handleChange}
            required
          />
        </label>
        <button type="submit">Create</button>
      </form>
    </div>
  );
}

ProjectForm.propTypes = {
  obj: PropTypes.shape(PropTypes.obj),
};

ProjectForm.defaultProps = {
  obj: {},
};
