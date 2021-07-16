import { combineReducers } from 'redux';

import { pagiCollections, petangCollections } from './collections.js';

export default combineReducers({ pagi: pagiCollections, petang: petangCollections });