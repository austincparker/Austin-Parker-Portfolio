import React from 'react';
import { useHistory } from 'react-router-dom';
import { ButtonGroup } from 'reactstrap';

export default function Navigation() {
  const history = useHistory();

  return (
    <div className="text-center mb-3">
      <ButtonGroup size="lg">
        <button
          onClick={() => history.push('/')}
          type="button"
          className="btn btn-light border border-dark"
        >
          Home
        </button>
        <button
          onClick={() => history.push('/projects')}
          type="button"
          className="btn btn-light border border-dark"
        >
          Projects
        </button>
        <button
          onClick={() => history.push('/about')}
          type="button"
          className="btn btn-light border border-dark"
        >
          About
        </button>
      </ButtonGroup>
    </div>
  );
}
