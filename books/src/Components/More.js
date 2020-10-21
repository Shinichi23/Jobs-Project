import React, {useEffect,useState} from 'react'
import { useParams } from 'react-router-dom'
import axios from '../axios'


const More = () => {
    const { id } = useParams() 
    const [book, setbook] = useState();
    useEffect(() => {   
        const getBook = async() => {
            const response = await axios.get(`/${id}`)
            console.log(response.data)
            setbook(response.data)
        }
        getBook()
    },[]);
    return (
        <div>
            <p>Title: {book && book.volumeInfo.title}</p>
            <p>Author: {book && book.volumeInfo.authors}</p>
            <p>Publisher: {book && book.volumeInfo.publisher}</p>
            <p>Published In: {book && book.volumeInfo.publishedDate}</p>
        </div>
    )
}

export default More
