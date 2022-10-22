// eslint-disable-next-line no-unused-vars
import * as React from 'react'
import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'
import { MemoryRouter } from 'react-router-dom'
import Navigation from '../../components/Navigation/Navigation'

describe('<Navigation />', () => {
    it('should have Login link', () => {
        render(
            <MemoryRouter initialEntries={['/']}>
                <Navigation />
            </MemoryRouter>
        )
        const loginLink = screen.getByTestId('login-link')
        expect(loginLink).toBeInTheDocument()
    })

    it('should have About link', () => {
        render(
            <MemoryRouter initialEntries={['/about']}>
                <Navigation />
            </MemoryRouter>
        )
        const aboutLink = screen.getByTestId('about-link')
        expect(aboutLink).toBeInTheDocument()
    })

    it('should have Order link', () => {
        render(
            <MemoryRouter initialEntries={['/order']}>
                <Navigation />
            </MemoryRouter>
        )
        const orderLink = screen.getByTestId('order-link')
        expect(orderLink).toBeInTheDocument()
    })
})
