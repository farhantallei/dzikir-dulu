import axios from 'axios';

const pagiCollectionURL = 'https://dzikir-dulu.herokuapp.com/collections/pagi';
const petangCollectionURL = 'https://dzikir-dulu.herokuapp.com/collections/petang';

export const fetchPagiCollections = () => axios.get(pagiCollectionURL);
export const fetchPetangCollections = () => axios.get(petangCollectionURL);