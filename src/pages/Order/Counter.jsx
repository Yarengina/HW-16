// eslint-disable-next-line no-unused-vars
import * as React from 'react'

function Counter({ min, max, current, onChange }) {
    function applyCurrent(num) {
        const validNum = Math.max(min, Math.min(max, num))
        onChange(validNum)
    }

    const inc = () => applyCurrent(current + 1)
    const dec = () => applyCurrent(current - 1)

    return (
        <div className="Counter">
            <button className="Buttons Plus" type="button" onClick={dec}>
                Remove item
            </button>
            <p className="Quantity">{current - 1}</p>
            <button className="Buttons Minus" type="button" onClick={inc}>
                Add to cart
            </button>
        </div>
    )
}

export default Counter
