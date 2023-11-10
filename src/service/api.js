import axios from 'axios';

export const api = axios.create({
  baseURL: `https://cat-fact.herokuapp.com/facts`,
  headers: {
    'Content-Type': 'application/json',
  },
});
