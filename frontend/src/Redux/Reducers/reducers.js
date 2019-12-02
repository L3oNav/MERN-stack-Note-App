import { combineReducers } from 'redux'
import notesReducer from './notesReducers'
import usersReducer from './userReducers'
export const rootReducers = combineReducers({
   note: notesReducer,
   user: usersReducer
})