export default (collections = [], action) => {
    switch (action.type) {
        case 'FETCH_ALL':
            return collections;    
        default:
            return collections;
    }
}