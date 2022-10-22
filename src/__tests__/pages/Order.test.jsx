// eslint-disable-next-line no-unused-vars
import * as React from 'react'
import '@testing-library/jest-dom/extend-expect'
import { screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { render } from '../utils/renderWithRouter'
import Order from '../../pages/Order/Order'

const mockedNavigate = jest.fn()

jest.mock('react-router-dom', () => ({
    ...jest.requireActual('react-router-dom'),
    useNavigate: () => mockedNavigate,
}))

describe('<Order />', () => {
    it('should render successfully and match snapshot', () => {
        const { container } = render(<Order />)
        expect(container).toMatchSnapshot()
    })

    it('should have the button and navigate by clicking it', () => {
        render(<Order />)

        const button = screen.getByTestId('button-ready')
        expect(button).toBeInTheDocument()

        userEvent.click(button)
        expect(mockedNavigate).toHaveBeenCalledTimes(1)
    })
})
