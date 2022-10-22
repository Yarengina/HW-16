// eslint-disable-next-line no-unused-vars
import * as React from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import booksStub from '../../components/booksStub'
import './BookDesc.css'

function BookDesc() {
    const { bookId } = useParams()

    const searchBook = booksStub().find((book) => book.id === Number(bookId))

    const navigate = useNavigate()

    const goBack = () => {
        navigate('/order')
    }

    return (
        <div className="BookDesc">
            <p>
                Книга: <strong>{searchBook.title}</strong>
            </p>
            <p className="Description">
                Описание:
                <br />
                <strong>{searchBook.description}</strong>
            </p>
            <p>
                Цена: <strong>{searchBook.price} руб.</strong>
            </p>
            <button className="ButtonBack" type="button" onClick={goBack}>
                Back
            </button>
        </div>
    )
}

export default BookDesc
