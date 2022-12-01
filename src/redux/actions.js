import {
    FETCH_BOOKS_STARTED,
    FETCH_BOOKS_SUCCESS,
    FETCH_BOOKS_FAILURE,
    INCREMENT,
    DECREMENT,
} from './actions-types'

export const fetchBooksStarted = () => ({
    type: FETCH_BOOKS_STARTED,
})

export const fetchBooksSuccess = (books) => ({
    type: FETCH_BOOKS_SUCCESS,
    payload: { books },
})

export const fetchBooksFailure = (error) => ({
    type: FETCH_BOOKS_FAILURE,
    payload: { error },
})

export const incrementCounter = () => ({
    type: INCREMENT,
})

export const decrementCounter = () => ({
    type: DECREMENT,
})
