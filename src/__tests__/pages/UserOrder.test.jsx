// eslint-disable-next-line no-unused-vars
import * as React from 'react'
import '@testing-library/jest-dom/extend-expect'
import { screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { render } from '../utils/renderWithRouter'
import UserOrder from '../../pages/UserOrder/UserOrder'

describe('<UserOrder />', () => {
    it('should render successfully and match snapshot', () => {
        const { container } = render(<UserOrder />)
        expect(container).toMatchSnapshot()
    })

    it('should be able to type a phone', () => {
        render(<UserOrder />)
        const inputPhone = screen.getByRole('textbox', { name: /phone:/i })
        expect(inputPhone.value).toBe('')

        userEvent.type(inputPhone, '123')
        expect(inputPhone.value).toBe('123')
    })

    it('should be able to type only numbers', () => {
        render(<UserOrder />)
        const inputPhone = screen.getByRole('textbox', { name: /phone:/i })
        userEvent.type(inputPhone, 'user')
        expect(inputPhone.value).toBe('')
    })
})
