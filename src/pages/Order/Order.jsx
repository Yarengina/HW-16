// eslint-disable-next-line no-unused-vars
import * as React from 'react'
import { useState, useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import OrderDetail from './OrderDetail'
import OrderInfoContext from '../../contexts/OrderInfoContext'
import booksStub from '../../components/booksStub'
import './Order.css'
import Navigation from '../../components/Navigation/Navigation'

function Order() {
    const [books, setBooks] = useState(booksStub())
    const { order, setOrder } = useContext(OrderInfoContext)

    const navigate = useNavigate()

    const totalPrice = books.reduce(
        (total, currentBook) =>
            total + currentBook.price * (currentBook.quantity - 1),
        0
    )

    const totalQuantity = books.reduce(
        (total, { quantity }) => total + (quantity - 1),
        0
    )

    const setQuantity = (id, quantity) => {
        setBooks(
            books.map((book) => (book.id !== id ? book : { ...book, quantity }))
        )
    }

    const handleReady = () => {
        setOrder({
            ...order,
            quantity: totalQuantity,
            price: totalPrice,
        })
        navigate('/order/user_order')
    }

    return (
        <>
            <Navigation />
            <OrderDetail books={books} setQuantity={setQuantity} />
            <button
                data-testid="button-ready"
                className="ButtonReady"
                type="button"
                onClick={handleReady}
            >
                Ready
            </button>
        </>
    )
}

export default Order
