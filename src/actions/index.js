import axios from 'axios'
export const getGit = () => async (dispatch) => {
    try {
        console.log('Get Git')
        const response = await axios.get(`https://api.github.com/users/n4sunday`)
        const userProfile = await response.data;
        console.log('response: ', userProfile)
        dispatch(getGitSuccess(userProfile))
    } catch (error) {
        console.error(error);
        dispatch(getGitFailed());
    }
}

export const getGitSuccess = userProfile => ({
    type: 'GET_GIT_SUCCESS',userProfile
})
export const getGitFailed = () => ({ type: 'GET_GIT_FAILED'})

