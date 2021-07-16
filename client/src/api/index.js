import axios from 'axios';

const pagiCollectionURL = 'http://localhost:5000/collections/pagi';
const petangCollectionURL = 'http://localhost:5000/collections/petang';

export const fetchPagiCollections = () => axios.get(pagiCollectionURL);
export const fetchPetangCollections = () => axios.get(petangCollectionURL);