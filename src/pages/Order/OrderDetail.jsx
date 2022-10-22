// eslint-disable-next-line no-unused-vars
import * as React from 'react'
import { Link } from 'react-router-dom'
import Counter from './Counter'

function OrderDetail({ books, setQuantity }) {
    return (
        <div className="BookField">
            {books.map(({ id, title, price, rest, quantity }) => (
                <div data-testid={`todo-${id}`} className="Book" key={id}>
                    <p className="Title">{title}</p>
                    <p className="Price">{price}</p>
                    <Link className="ReadMoreLink" to={`${id}`}>
                        Read more
                    </Link>
                    <Counter
                        min={1}
                        max={rest + 1}
                        current={quantity}
                        onChange={(bookQuantity) =>
                            setQuantity(id, bookQuantity)
                        }
                    />
                </div>
            ))}
        </div>
    )
}

export default OrderDetail
