import React, { useState } from 'react'
import axios from '../axios'
import Book from './Book'
const Books = () => {
    const [search, setSearch] = useState();
    const [books, setBooks] = useState();
    const submit = async(e) => {
        e.preventDefault()
        if(books){
        const answer = await axios.get(`?q=${search}`);
        setBooks(answer.data.items)
    }
    }
    
    return (
        <div>
            <form>
                <input onChange={(e) => setSearch(e.target.value)} type="text" placeholder="Search.." name="search"/>
                <button onClick={(e) => submit(e)} type="submit">Search</button>
            </form>
            <div>
                {books && books.map((item) => <Book info={item} />)}
            </div>
        </div>
    )
}

export default Books
