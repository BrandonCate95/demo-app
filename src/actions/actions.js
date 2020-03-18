
const userLoginSuccess = true
const userLogoutSuccess = false

export const addSearchParams = text => ({
    type: 'ADD_SEARCH_PARAMS',
    text
})

export const userLogin = () => ({
    type: 'USER_LOGIN_SUCCESS',
    isLoggedIn: userLoginSuccess
})

export const userLogout = () => ({
    type: 'USER_LOGOUT_SUCCESS',
    isLoggedIn: userLogoutSuccess
})

export const restoreState = localState => ({
    type: 'RESTORE_STATE',
    payload: localState
})