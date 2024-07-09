import React from 'react'
import './books.css';
import BookItem from './BookItem';
export default function BookList({ books }) {
    return (
        <ul className='book_list'>

            {books &&
                books.map((book, index) =>

                    <BookItem key={index} book={book} />
                )
            }
        </ul>
    )
}
