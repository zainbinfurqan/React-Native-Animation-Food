export default (state, action) => {
    switch (action.type) {
        case 'ADD_EXPENSIVE':
            return [...state, action.payload]
        default:
            return state;
    }

}