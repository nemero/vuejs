import axios from 'axios';
import { httpMock } from './httpMock'

// export const HTTP = axios.create({
//   baseURL: 'http://localhost/api/v1/',
//   headers: {
//     Accept: 'application/json',
//     Bearer: 'Bearer <token>'
//   }
// });

export const HTTP = httpMock.create({
  baseURL: 'http://localhost/api/v1/',
  headers: {
    Accept: 'application/json',
    Bearer: 'Bearer <token>'
  }
});