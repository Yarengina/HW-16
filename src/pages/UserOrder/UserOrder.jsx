// eslint-disable-next-line no-unused-vars
import * as React from 'react'
/* eslint-disable jsx-a11y/label-has-associated-control */
import { useRef, useContext, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import UserInfoContext from '../../contexts/UserInfoContext'
import './UserOrder.css'

function UserOrder() {
    const { user, setUser } = useContext(UserInfoContext)

    const [userPhone, setUserPhone] = useState('')

    const onChangePhone = ({ target: { value } }) => {
        const valueInput = value.replace(/\D+/g, '')

        if (userPhone !== valueInput) {
            setUserPhone(valueInput)
        }
    }

    const emailInputRef = useRef(null)
    const phoneInputRef = useRef(null)
    const nameInputRef = useRef(null)

    const navigate = useNavigate()

    const goBack = () => {
        navigate('/order')
    }

    const handleOrder = () => {
        setUser({
            ...user,
            phone: phoneInputRef.current.value,
            name: nameInputRef.current.value,
        })
        navigate('/order/receipt')
    }

    return (
        <section className="InputData">
            <h1>Input data</h1>
            <div className="UserInputs">
                <label htmlFor="usermail">Email: </label>
                <input
                    data-testid="usermail"
                    className="UserInput"
                    id="usermail"
                    type="email"
                    defaultValue={user.email}
                    ref={emailInputRef}
                />
            </div>
            <div className="UserInputs">
                <label htmlFor="userphone">Phone: </label>
                <input
                    data-testid="userphone"
                    className="UserInput"
                    id="userphone"
                    type="tel"
                    onChange={onChangePhone}
                    value={userPhone}
                    ref={phoneInputRef}
                />
            </div>
            <div className="UserInputs">
                <label htmlFor="username">Name: </label>
                <input
                    className="UserInput"
                    id="username"
                    type="text"
                    ref={nameInputRef}
                />
            </div>
            <div>
                <button className="ButtonBack" type="button" onClick={goBack}>
                    Back to cart
                </button>
                <button
                    className="ButtonSend"
                    type="button"
                    onClick={handleOrder}
                >
                    Send
                </button>
            </div>
        </section>
    )
}

export default UserOrder
