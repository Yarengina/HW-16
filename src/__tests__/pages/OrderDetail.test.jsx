// eslint-disable-next-line no-unused-vars
import * as React from 'react'
import '@testing-library/jest-dom/extend-expect'
import { screen } from '@testing-library/react'
import { render } from '../utils/renderWithRouter'
import OrderDetail from '../../pages/Order/OrderDetail'

describe('<OrderDetail />', () => {
    const books = [
        {
            id: 101,
            title: 'Война и мир - Л.Н.Толстой',
            description:
                'Роман-эпопея Льва Николаевича Толстого, описывающий русское общество в эпоху войн против Наполеона в 1805—1812 годах. Эпилог романа доводит повествование до 1820 года.',
            price: 800,
            rest: 10,
            quantity: 1,
        },
    ]

    it('should render book detail with id 101', () => {
        render(<OrderDetail books={books} />)
        const bookElement = screen.getByTestId('todo-101')
        expect(bookElement).toBeInTheDocument()
        expect(bookElement).toHaveTextContent('Война и мир - Л.Н.Толстой')
        expect(bookElement).toHaveTextContent(800)
        expect(bookElement).toContainHTML('href="/101"')
    })

    it('should render successfully and match snapshot', () => {
        const { container } = render(<OrderDetail books={books} />)
        expect(container).toMatchSnapshot()
    })
})
