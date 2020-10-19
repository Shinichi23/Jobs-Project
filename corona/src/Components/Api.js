/*import axios from 'axios'

// function Api() {
//     const [data, setData] = useState();
//     useEffect(() => {
//         const getData = async () => {
//             const response = await axios.get('https://disease.sh/v3/covid-19/historical/Algeria?lastdays=100')
//             setData(response.data)
//             console.log(response.data)
//         }
//         getData();
//     }, [])
//     return (
//         <div>
            
//         </div>
//     )
// }

const api = axios.create({
     baseURL: 'https://api.covid19api.com',
  })
export default api
