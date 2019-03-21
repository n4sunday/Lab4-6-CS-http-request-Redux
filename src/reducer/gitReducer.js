const gitReducer = (state = 0, action) => {
    switch (action.type) {
        case 'GET_GIT_SUCCESS':
            console.log('action', action.userProfile)
            return action.userProfile
        case 'GET_GIT_FAILED':
            console.log('action: Failed')
            return action.userProfile
        default:
            return state
    }
}

export default gitReducer