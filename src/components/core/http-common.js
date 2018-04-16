import axios from 'axios';

export const HTTP = axios.create({
  baseURL: 'http://localhost/api/v1/',
  headers: {
    Accept: 'application/json',
    Bearer: 'Bearer <token>'
  }
});