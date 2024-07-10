import React, { useState } from 'react'
import './header.css'
export default function Header({ data, setBooks }) {
    const [searchValue, setSearchValue] = useState("")
    const [sug, setSug] = useState([])
    const searchBook = () => {
        const rs = data.filter(book => book.title.toLowerCase().includes(searchValue.toLowerCase()))
        setBooks(rs)
    }

    const handleSearchInput = (e) => {
        setSearchValue(e.target.value)
        if (e.target.value === '') {
            setSug([])
            return
        }
        const rs = data.filter(book => book.title.toLowerCase().includes(searchValue.toLowerCase()))
        setSug(rs.slice(0, 5))

    }

    return (
        <header>
            <figure>
                <img src="" alt="" />
            </figure>
            <nav>
                <input type="text" name="" id="" value={searchValue} className='search_input' onChange={handleSearchInput} />
                <button onClick={searchBook}>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
                        <path stroke-linecap="round" stroke-linejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
                    </svg>
                </button>
                {sug.length != 0 &&
                    <ul className='option_list'>
                        {sug.map(s =>

                            <li>{s.title}</li>

                        )}
                    </ul>
                }
            </nav>
        </header>
    )
}
/*
 
¿Se espera que el modal se active al dar click en los botones y el input o al pasar el mouse encima (hover)?

"sufriendo con la logica de la busqueda y borrado de inputs
"
 */