// eslint-disable-next-line no-unused-vars
import * as React from 'react'
import { render } from '../utils/renderWithRouter'
import About from '../../pages/About/About'

describe('<About />', () => {
    it('should render successfully and match snapshot', () => {
        const { container } = render(<About />)
        expect(container).toMatchSnapshot()
    })
})
