const user = ( state = {isLoggedIn: false} , action ) => {
    switch (action.type) {
        case 'RESTORE_STATE':
            return action.payload.user
        case 'USER_LOGIN_SUCCESS':
            return Object.assign({}, state, {
                isLoggedIn: action.isLoggedIn
            })
        case 'USER_LOGOUT_SUCCESS':
            return Object.assign({}, state, {
                isLoggedIn: action.isLoggedIn
            })
        default:
            return state
    }
}

export default user