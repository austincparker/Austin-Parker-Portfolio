import axios from 'axios';
import firebaseConfig from '../apiKeys';

const baseURL = firebaseConfig.databaseURL;

const getTech = () => new Promise((resolve, reject) => {
  axios
    .get(`${baseURL}/tech.json`)
    .then((response) => resolve(Object.values(response.data)))
    .catch(reject);
});

const createTech = (obj) => new Promise((resolve, reject) => {
  axios
    .post(`${baseURL}/tech.json`, obj)
    .then((response) => {
      const firebaseKey = response.data.name;
      axios
        .patch(`${baseURL}/tech/${firebaseKey}.json`, { firebaseKey })
        .then(() => {
          getTech().then(resolve);
        });
    })
    .catch(reject);
});

export { getTech, createTech };
