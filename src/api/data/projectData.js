import axios from 'axios';
import firebaseConfig from '../apiKeys';

const baseURL = firebaseConfig.databaseURL;

const getProjects = () => new Promise((resolve, reject) => {
  axios
    .get(`${baseURL}/projects.json`)
    .then((response) => resolve(Object.values(response.data)))
    .catch(reject);
});

const getProjectsInOrder = () => new Promise((resolve) => {
  getProjects().then((projects) => resolve(projects.sort((a, b) => (a.projOrder > b.projOrder ? 1 : -1))));
});

const createProject = (obj) => new Promise((resolve, reject) => {
  axios
    .post(`${baseURL}/projects.json`, obj)
    .then((response) => {
      const firebaseKey = response.data.name;
      axios
        .patch(`${baseURL}/projects/${firebaseKey}.json`, { firebaseKey })
        .then(() => {
          getProjects().then(resolve);
        });
    })
    .catch(reject);
});

const deleteProject = (firebaseKey) => new Promise((resolve, reject) => {
  axios
    .delete(`${baseURL}/projects/${firebaseKey}.json`)
    .then(() => getProjects().then(resolve))
    .catch(reject);
});

const getSingleProject = (firebaseKey) => new Promise((resolve, reject) => {
  axios
    .get(`${baseURL}/projects/${firebaseKey}.json`)
    .then((response) => {
      resolve(response.data);
    })
    .catch(reject);
});

const updateProject = (firebaseKey, updateObj) => new Promise((resolve, reject) => {
  axios
    .patch(`${baseURL}/projects/${firebaseKey}.json`, updateObj)
    .then(() => getProjects().then(resolve))
    .catch(reject);
});

export {
  getProjects,
  getProjectsInOrder,
  createProject,
  deleteProject,
  getSingleProject,
  updateProject,
};
