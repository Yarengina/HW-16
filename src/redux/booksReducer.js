import {
    FETCH_BOOKS_STARTED,
    FETCH_BOOKS_SUCCESS,
    FETCH_BOOKS_FAILURE,
} from './actions-types'

const initialState = {
    books: [],
    loading: false,
    error: null,
}

// eslint-disable-next-line default-param-last
export default function booksReducer(state = initialState, action) {
    switch (action.type) {
        case FETCH_BOOKS_STARTED: {
            return {
                ...state,
                loading: true,
            }
        }
        case FETCH_BOOKS_SUCCESS: {
            return {
                ...state,
                loading: false,
                error: null,
                books: [...action.payload.books],
            }
        }
        case FETCH_BOOKS_FAILURE: {
            return {
                ...state,
                loading: false,
                error: action.payload.error,
            }
        }
        default:
            return state
    }
}
