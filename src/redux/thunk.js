import axios from 'axios'
import {
    fetchBooksStarted,
    fetchBooksSuccess,
    fetchBooksFailure,
} from './actions'

const BASE_URL = 'https://my-json-server.typicode.com/Yarengina/HW-16/books'

// eslint-disable-next-line import/prefer-default-export
export const fetchBooks = () => async (dispatch) => {
    dispatch(fetchBooksStarted())

    try {
        const { data } = await axios.get(BASE_URL)

        dispatch(fetchBooksSuccess(data))
    } catch (error) {
        dispatch(fetchBooksFailure(error))
    }
}
