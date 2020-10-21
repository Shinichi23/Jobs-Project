import axios from 'axios'

const books= axios.create({
    baseURL: 'https://www.googleapis.com/books/v1/volumes',
 })

export default books