import React from 'react';
import { Route, Switch } from 'react-router';
import Home from '../views/Home';
import ProjectView from '../views/ProjectView';
import Contact from '../views/Contact';

export default function Routes() {
  return (
    <div>
      <Switch>
        <Route exact path="/" component={() => <Home />} />
        <Route exact path="/projects" component={() => <ProjectView />} />
        <Route exact path="/contact" component={() => <Contact />} />
      </Switch>
    </div>
  );
}
