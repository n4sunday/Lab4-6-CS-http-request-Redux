import gitReducer from './gitReducer'
import {combineReducers} from 'redux'

const rootReducer = combineReducers({
    github: gitReducer
})
export default rootReducer