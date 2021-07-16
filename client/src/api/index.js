import axios from 'axios';

const pagiCollectionURL = 'http://172.20.10.2:5000/collections/pagi';
const petangCollectionURL = 'http://172.20.10.2:5000/collections/petang';

export const fetchPagiCollections = () => axios.get(pagiCollectionURL);
export const fetchPetangCollections = () => axios.get(petangCollectionURL);