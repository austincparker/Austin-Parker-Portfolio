import axios from 'axios';
import firebaseConfig from '../apiKeys';

const baseURL = firebaseConfig.databaseURL;

const getTech = () => new Promise((resolve, reject) => {
  axios
    .get(`${baseURL}/tech.json`)
    .then((response) => resolve(Object.values(response.data)))
    .catch(reject);
});

export default getTech;
