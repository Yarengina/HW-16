// eslint-disable-next-line no-unused-vars
import * as React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { incrementCounter, decrementCounter } from '../../redux/actions'
import { getCounterState } from '../../redux/selectors'

function Counter() {
    const counter = useSelector(getCounterState)
    const dispatch = useDispatch()

    return (
        <div className="Counter">
            <button
                className="Buttons Plus"
                type="button"
                onClick={() => dispatch(decrementCounter)}
            >
                Remove item
            </button>
            <p className="Quantity">{counter}</p>
            <button
                className="Buttons Minus"
                type="button"
                onClick={() => dispatch(incrementCounter)}
            >
                Add to cart
            </button>
        </div>
    )
}

export default Counter
