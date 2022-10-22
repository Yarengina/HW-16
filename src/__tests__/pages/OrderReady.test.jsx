// eslint-disable-next-line no-unused-vars
import * as React from 'react'
import { render } from '../utils/renderWithRouter'
import OrderReady from '../../pages/OrderReady/OrderReady'

describe('<OrderReady />', () => {
    it('should render successfully and match snapshot', () => {
        const { container } = render(<OrderReady />)
        expect(container).toMatchSnapshot()
    })
})
