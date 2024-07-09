import React, { useState } from 'react'
import './header.css'
export default function Header({data, setBooks}) {
     const [searchValue, setSearchValue] = useState("")

     const searchBook = () =>{
        const rs = data.filter(book => book.title.toLowerCase().includes(searchValue.toLowerCase()) )
         setBooks(rs)
     }

    return (
        <header>
            <figure>
                <img src="" alt="" />
            </figure>
            <nav>
                <input type="text" name="" id="" className='search_input' onChange={(e)=>setSearchValue(e.target.value)} />
                <button onClick={searchBook}>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
                        <path stroke-linecap="round" stroke-linejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
                    </svg>
                </button>
            </nav>
        </header>
    )
}
