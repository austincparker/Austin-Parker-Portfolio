import React from 'react';
import PropTypes from 'prop-types';
import {
  Button,
  ButtonGroup,
  Card,
  CardBody,
  CardLink,
  CardSubtitle,
  CardTitle,
} from 'reactstrap';
import styled from 'styled-components';
import { useHistory } from 'react-router-dom';
import { deleteProject, getProjects } from '../api/data/projectData';

const ProjectCard = styled.div`
  max-width: 380px;
  p {
    font-weight: 100;
  }
`;

export default function Project({ project, setProjects, admin }) {
  const history = useHistory();
  const handleButton = (method) => {
    if (method === 'delete') {
      deleteProject(project.firebaseKey).then(() => getProjects().then(setProjects));
    } else if (method === 'edit') {
      history.push(`/edit/${project.firebaseKey}`);
    } else if (method === 'info') {
      history.push(`/projects/${project.firebaseKey}`);
    }
  };

  return (
    <ProjectCard className="m-3">
      <Card>
        <CardBody>
          <CardTitle tag="h5" className="display-6">
            {project.name}
          </CardTitle>
          <CardSubtitle tag="h6" className="mb-2 text-muted">
            {project.languages}
          </CardSubtitle>
          <p>{project.otherTools}</p>
        </CardBody>
        <img width="100%" src={project.imageUrl} alt="Card cap" />
        <CardBody>
          {/* <CardText>{project.description}</CardText> */}
          <CardLink href={project.appLink}>App Link</CardLink>
          <CardLink href={project.githubRepo}>GitHub Repo</CardLink>
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
            <Button color="success" onClick={() => handleButton('info')}>
              More Info
            </Button>
          </div>
        </CardBody>
      </Card>
    </ProjectCard>
  );
}

Project.defaultProps = {
  admin: null,
};

Project.propTypes = {
  project: PropTypes.shape({
    firebaseKey: PropTypes.string,
    name: PropTypes.string,
    description: PropTypes.string,
    appLink: PropTypes.string,
    imageUrl: PropTypes.string,
    githubRepo: PropTypes.string,
    languages: PropTypes.string,
    otherTools: PropTypes.string,
  }).isRequired,
  setProjects: PropTypes.func.isRequired,
  admin: PropTypes.shape(PropTypes.obj),
};
