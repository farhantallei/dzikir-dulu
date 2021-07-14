import axios from 'axios';

const url = 'http://localhost:5000/collections';

export const fetchCollection = () => axios.get(url);