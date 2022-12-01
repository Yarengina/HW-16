// eslint-disable-next-line no-unused-vars
import * as React from 'react'
import { useContext, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import OrderDetail from './OrderDetail'
import OrderInfoContext from '../../contexts/OrderInfoContext'
import './Order.css'
import Navigation from '../../components/Navigation/Navigation'
import { fetchBooks } from '../../redux/thunk'
import { bookListSelector } from '../../redux/selectors'

function Order() {
    const { order, setOrder } = useContext(OrderInfoContext)

    const dispatch = useDispatch()

    const books = useSelector(bookListSelector)

    useEffect(() => {
        dispatch(fetchBooks())
    }, [])

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
        books.map((book) => (book.id !== id ? book : { ...book, quantity }))
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
