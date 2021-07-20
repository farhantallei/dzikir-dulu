import axios from 'axios';

const pagiCollectionURL = 'https://dzikir-dulu.herokuapp.com/collections/pagi';
const petangCollectionURL = 'https://dzikir-dulu.herokuapp.com/collections/petang';
const tidurCollectionURL = 'https://dzikir-dulu.herokuapp.com/collections/tidur';

export const fetchPagiCollections = () => axios.get(pagiCollectionURL);
export const fetchPetangCollections = () => axios.get(petangCollectionURL);
export const fetchTidurCollections = () => axios.get(tidurCollectionURL);
