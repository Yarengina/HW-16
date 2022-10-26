import { combineReducers } from 'redux'
import booksReducer from './booksReducer'
import counterReducer from './counterReducer'

// eslint-disable-next-line import/prefer-default-export
export const rootReducer = combineReducers({
    booksReducer,
    counterReducer,
})
