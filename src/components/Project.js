import React from 'react';
import PropTypes from 'prop-types';
import {
  Card,
  CardBody,
  CardLink,
  CardSubtitle,
  CardText,
  CardTitle,
} from 'reactstrap';

export default function Project({ project }) {
  return (
    <div>
      <Card>
        <CardBody>
          <CardTitle tag="h5">{project.name}</CardTitle>
          <CardSubtitle tag="h6" className="mb-2 text-muted">
            Card subtitle
          </CardSubtitle>
        </CardBody>
        <img width="100%" src="/assets/318x180.svg" alt="Card cap" />
        <CardBody>
          <CardText>
            Some quick example text to build on the card title and make up the
            bulk of the cards content.
          </CardText>
          <CardLink href="#">Card Link</CardLink>
          <CardLink href="#">Another Link</CardLink>
        </CardBody>
      </Card>
    </div>
  );
}

Project.propTypes = {
  project: PropTypes.shape({
    name: PropTypes.string,
    description: PropTypes.string,
    languages: PropTypes.string,
    othertools: PropTypes.string,
  }).isRequired,
};
