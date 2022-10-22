// eslint-disable-next-line no-unused-vars
import * as React from 'react'
import '@testing-library/jest-dom/extend-expect'
import { screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { render } from '../utils/renderWithRouter'
import LoginPass from '../../pages/LoginPass/LoginPass'

describe('<LoginPass />', () => {
    it('should render successfully and match snapshot', () => {
        const { container } = render(<LoginPass />)
        expect(container).toMatchSnapshot()
    })

    it('should test initially empty inputs', () => {
        render(<LoginPass />)
        const inputEmail = screen.getByPlaceholderText(/enter your email.../i)
        const inputPassword = screen.getByPlaceholderText(
            /enter your password.../i
        )

        expect(inputEmail.value).toBe('')
        expect(inputPassword.value).toBe('')
    })

    it('should be able to type an email', () => {
        render(<LoginPass />)
        const inputEmail = screen.getByPlaceholderText(/enter your email.../i)
        userEvent.type(inputEmail, 'user@gmail.com')
        expect(inputEmail.value).toBe('user@gmail.com')
    })

    it('should be able to type a password', () => {
        render(<LoginPass />)
        const inputPassword = screen.getByPlaceholderText(
            /enter your password.../i
        )
        userEvent.type(inputPassword, 'Password!')
        expect(inputPassword.value).toBe('Password!')
    })

    it('should show email error message on invalid email', () => {
        render(<LoginPass />)
        const inputEmail = screen.getByPlaceholderText(/enter your email.../i)
        userEvent.type(inputEmail, 'usergmail.com')

        const logInButton = screen.getByRole('button', { name: /log in/i })
        userEvent.click(logInButton)

        const emailError = screen.getByText(/email is not valid/i)
        expect(emailError).toBeInTheDocument()
    })

    it('should show password error message on invalid password', () => {
        render(<LoginPass />)
        const inputPassword = screen.getByPlaceholderText(
            /enter your password.../i
        )
        userEvent.type(inputPassword, '1234')

        const logInButton = screen.getByRole('button', { name: /log in/i })
        userEvent.click(logInButton)

        const passwordError = screen.getByText(/at least 6 characters/i)
        expect(passwordError).toBeInTheDocument()
    })
})
