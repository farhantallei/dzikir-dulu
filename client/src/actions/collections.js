import { FETCH_PAGI, FETCH_PETANG } from '../constant/actionTypes.js';
import * as api from '../api';

export const getPagiCollections = () => async (dispatch) => {
    try {
        const { data } = await api.fetchPagiCollections();
    
        dispatch({ type: FETCH_PAGI, payload: data });
    } catch (error) {
        console.log(error);
    }
}

export const getPetangCollections = () => async (dispatch) => {
    try {
        const { data } = await api.fetchPetangCollections();
    
        dispatch({ type: FETCH_PETANG, payload: data });
    } catch (error) {
        console.log(error);
    }
}
