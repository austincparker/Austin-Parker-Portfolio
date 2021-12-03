import React from 'react';
import PropTypes from 'prop-types';
import { Link, useHistory } from 'react-router-dom';
import {
  Button,
  ButtonGroup,
  Card,
  CardBody,
  CardLink,
  CardSubtitle,
  CardText,
  CardTitle,
} from 'reactstrap';
import { deleteProject } from '../api/data/projectData';

export default function SingleProject({ obj, admin }) {
  const history = useHistory();
  const handleButton = (method) => {
    if (method === 'delete') {
      deleteProject(obj.firebaseKey).then(() => history.push('/projects'));
    } else if (method === 'edit') {
      history.push(`/edit/${obj.firebaseKey}`);
    }
  };
  return (
    <div className="text-center">
      <Card>
        <img
          className="m-auto"
          width="80%"
          src={obj.screenShot}
          alt="Card cap"
        />
        <CardBody>
          <CardTitle tag="h5" className="display-6">
            {obj.name}
          </CardTitle>
          <CardSubtitle tag="h6" className="mb-2 text-muted">
            {obj.languages}
          </CardSubtitle>
          <p>{obj.otherTools}</p>
          <CardText>{obj.description}</CardText>
          <CardLink href={obj.appLink}>App Link</CardLink>
          <CardLink href={obj.githubRepo}>GitHub Repo</CardLink>
          <div>
            <div>
              {admin ? (
                <ButtonGroup>
                  <Button color="info" onClick={() => handleButton('edit')}>
                    Edit
                  </Button>
                  <Button color="danger" onClick={() => handleButton('delete')}>
                    Delete
                  </Button>
                </ButtonGroup>
              ) : (
                ''
              )}
            </div>
          </div>
        </CardBody>
        <Link to="/projects">Back to Projects</Link>
      </Card>
    </div>
    // <div className="m-auto text-center">
    //   <img width="666px" alt={obj.name} src={obj.imageUrl} />
    //   <h1>{obj.name}</h1>
    //   <h5>{obj.description}</h5>
    //   <h5>{obj.languages}</h5>
    //   <h5>{obj.otherTools}</h5>

  // </div>
  );
}

SingleProject.propTypes = {
  obj: PropTypes.shape(PropTypes.obj),
  admin: PropTypes.shape(PropTypes.obj),
};

SingleProject.defaultProps = {
  obj: {},
  admin: null,
};
