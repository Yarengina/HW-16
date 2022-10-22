// eslint-disable-next-line no-unused-vars
import * as React from 'react'
import { useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import UserInfoContext from '../../contexts/UserInfoContext'
import OrderInfoContext from '../../contexts/OrderInfoContext'

function OrderReady() {
    const { user } = useContext(UserInfoContext)
    const { order } = useContext(OrderInfoContext)

    const navigate = useNavigate()

    const goBack = () => {
        navigate('/order')
    }

    return (
        <div className="BookDesc">
            <h1>Receipt</h1>
            <p>
                Name: <strong>{user.name}</strong>
            </p>
            <p>
                Email: <strong>{user.email}</strong>
            </p>
            <p>
                Phone: <strong>{user.phone}</strong>
            </p>
            <p>
                Total Quantity: <strong>{order.quantity}</strong>
            </p>
            <p>
                Total Price: <strong>{order.price} руб.</strong>
            </p>
            <button className="ButtonBack" type="button" onClick={goBack}>
                Back to cart
            </button>
        </div>
    )
}

export default OrderReady
