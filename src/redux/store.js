import { configureStore } from '@reduxjs/toolkit'
import thunk from 'redux-thunk'
import booksReducer from './booksReducer'
import counterReducer from './counterReducer'

// eslint-disable-next-line import/prefer-default-export
export const store = configureStore({
    reducer: {
        books: booksReducer,
        counter: counterReducer
    },
    middleware: [thunk],
})
