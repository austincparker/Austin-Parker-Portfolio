import React from 'react';
// import PropTypes from 'prop-types';
import { Route, Switch } from 'react-router';
import Home from '../views/Home';
import ProjectView from '../views/ProjectView';
import Contact from '../views/Contact';
import About from '../views/About';
import Technologies from '../views/Technologies';
// import Create from '../views/Create';
// import Edit from '../views/Edit';
import MoreInfo from '../views/MoreInfo';

export default function PublicRoutes() {
  return (
    <div>
      <Switch>
        <Route exact path="/" component={() => <Home />} />
        <Route exact path="/projects" component={() => <ProjectView />} />
        <Route exact path="/about" component={() => <About />} />
        <Route exact path="/technologies" component={() => <Technologies />} />
        <Route exact path="/contact" component={() => <Contact />} />
        {/* <Route exact path="/create" component={() => <Create />} />
        <Route exact path="/edit/:key" component={() => <Edit />} /> */}
        <Route exact path="/projects/:key" component={() => <MoreInfo />} />
      </Switch>
    </div>
  );
}

// PublicRoutes.propTypes = {
//   user: PropTypes.shape(PropTypes.obj),
// };

// PublicRoutes.defaultProps = {
//   user: {},
// };
