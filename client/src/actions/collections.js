import * as api from '../api';

export const getCollections = () => async (dispatch) => {
    try {
        const { data } = await api.fetchCollection();
    
        dispatch({ type: 'FETCH_ALL', payload: data });
    } catch (error) {
        console.log(error);
    }
}