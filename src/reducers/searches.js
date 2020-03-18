const searches = (state = [], action) => {
    switch (action.type) {
        case 'RESTORE_STATE':
            return action.payload.searches
        case 'ADD_SEARCH_PARAMS':
            return [ ...state, action.text ]
        default:
            return state
    }
}

export default searches