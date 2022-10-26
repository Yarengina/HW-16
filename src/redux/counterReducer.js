import { INCREMENT, DECREMENT } from './actions-types'

const initialState = {
    counter: 0,
}

// eslint-disable-next-line default-param-last
export default function counterReducer(state = initialState, action) {
    switch (action.type) {
        case INCREMENT:
            return {
                ...state,
                counter: state.counter + 1,
            }
        case DECREMENT:
            return {
                ...state,
                counter: state.counter - 1,
            }
        default:
            return state
    }
}
