import React, { useEffect, useState } from 'react'
import BookList from './components/Books/BookList'
import Header from './components/Header'

export default function App() {
   const [data, setData] = useState([])
   const [books, setBooks] = useState([])
   const getData = async () => {
      const rs = await fetch('books.json')
      const jsonRs = await rs.json();

      setData(jsonRs)
      setBooks(jsonRs)
   }

   useEffect(() => {
      getData()
   }, [])

   return (
      <>
         <Header setBooks={setBooks} data={data} />
         <BookList books={books} />
      </>
   )
}
