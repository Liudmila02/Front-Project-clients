import axios from 'axios';

export const request = axios.create({
 baseURL: 'https://node-react-clients.herokuapp.com/',
 withCredentials: true,
});