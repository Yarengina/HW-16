// eslint-disable-next-line no-unused-vars
import * as React from 'react'
import { useRef, useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import useCheckInput from '../../components/useCheckInput'
import UserInfoContext from '../../contexts/UserInfoContext'
import './LoginPass.css'
import Navigation from '../../components/Navigation/Navigation'
import validateLoginPass from './validateLoginPass'

function LoginPass() {
    const { inputValue, onChange, onBlur, isEmailError, isPassError } =
        useCheckInput('')

    const { user, setUser } = useContext(UserInfoContext)

    const navigate = useNavigate()

    const inputEmail = useRef(null)
    const inputPassword = useRef(null)
    const emailError = useRef(null)
    const passwordError = useRef(null)

    const onSubmit = (event) => {
        event.preventDefault()
    }

    const handleClick = () => {
        const userEmail = inputEmail.current.value
        const userPassword = inputPassword.current.value

        if (inputEmail.current.name === 'email' && userEmail === '') {
            inputEmail.current.focus()
            emailError.current.innerText = 'Type your e-mail'
            return
        }

        if (inputPassword.current.name === 'password' && userPassword === '') {
            inputPassword.current.focus()
            passwordError.current.innerText = 'Type your password'
            return
        }

        if (validateLoginPass(userEmail, userPassword)) {
            navigate('/order')
            setUser({
                ...user,
                email: userEmail,
            })
        }
    }

    return (
        <div>
            <Navigation />
            <form className="Form" onSubmit={onSubmit}>
                <div className="Inputs">
                    <input
                        className="Input"
                        id="1"
                        name="email"
                        type="email"
                        placeholder="Enter your email..."
                        value={inputValue.inputEmail}
                        onChange={onChange}
                        onBlur={onBlur}
                        ref={inputEmail}
                    />
                    <span className="Error" ref={emailError}>
                        {isEmailError}
                    </span>
                </div>
                <div className="Inputs">
                    <input
                        className="Input"
                        id="2"
                        name="password"
                        type="password"
                        placeholder="Enter your password..."
                        value={inputValue.inputPassword}
                        onChange={onChange}
                        onBlur={onBlur}
                        ref={inputPassword}
                    />
                    <span className="Error" ref={passwordError}>
                        {isPassError}
                    </span>
                </div>
                <button className="Button" type="button" onClick={handleClick}>
                    Log in
                </button>
            </form>
        </div>
    )
}

export default LoginPass
