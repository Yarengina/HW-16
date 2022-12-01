// eslint-disable-next-line no-unused-vars
import * as React from 'react'
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'

import Counter from './Counter'
import {
    bookListLoadingSelector,
    bookListErrorSelector,
} from '../../redux/selectors'

function OrderDetail({ books, setQuantity }) {
    const loading = useSelector(bookListLoadingSelector)
    const error = useSelector(bookListErrorSelector)

    if (loading) {
        return <p className="Loading">Loading...</p>
    }

    if (error) {
        return <p className="Loading">{error.message}</p>
    }

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
