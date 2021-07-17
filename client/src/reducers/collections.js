import { FETCH_PAGI, FETCH_PETANG } from '../constant/actionTypes.js';

export const pagiCollections = (collections = [], action) => {
    switch (action.type) {
        case FETCH_PAGI:
            return action.payload;
        default:
            return collections;
    }
}

export const petangCollections = (collections = [], action) => {
    switch (action.type) {
        case FETCH_PETANG:
            return action.payload;
        default:
            return collections;
    }
}
