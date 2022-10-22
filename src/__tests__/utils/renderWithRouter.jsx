// eslint-disable-next-line no-unused-vars
import * as React from 'react'
import { render } from '@testing-library/react'
import { MemoryRouter } from 'react-router-dom'

const renderWithRouter = (component) => <MemoryRouter>{component}</MemoryRouter>

const customRender = (component) => render(renderWithRouter(component))

export * from '@testing-library/react'

export { customRender as render }
