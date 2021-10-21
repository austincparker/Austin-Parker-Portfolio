import React from 'react';
import { Route, Switch } from 'react-router';
import PropTypes from 'prop-types';
import Home from '../views/Home';
import ProjectView from '../views/ProjectView';
import About from '../views/About';

export default function Routes({ projects, setProjects }) {
  return (
    <div>
      <Switch>
        <Route exact path="/" component={() => <Home />} />
        <Route
          exact
          path="/projects"
          component={() => (
            <ProjectView projects={projects} setProjects={setProjects} />
          )}
        />
        <Route exact path="/about" component={() => <About />} />
      </Switch>
    </div>
  );
}

Routes.propTypes = {
  projects: PropTypes.arrayOf(PropTypes.object).isRequired,
  setProjects: PropTypes.func.isRequired,
};
