import { combineReducers } from 'redux';

import { pagiCollections, petangCollections, tidurCollections } from './collections.js';

export default combineReducers({ pagi: pagiCollections, petang: petangCollections, tidur: tidurCollections });
