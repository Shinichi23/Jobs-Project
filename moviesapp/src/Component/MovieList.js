import React,{useState} from 'react';
import { Button } from 'react-bootstrap';
import { Modal } from 'react-bootstrap';
import Movie from './Movies.js'


const MovieList=()=>{

    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => {
      setShow(true);
    };

    const [keyword, setKeyword] = useState("");
    const [search, setSearch] = useState(1);
    const [movieList, setmovieList] = useState([
        {
          name: "One Piece Stampede",
          image: "https://www.play-asia.com/s/1500/xi/one-piece-stampede-original-soundtrack-603125.1.jpg?pvr9tr",
          resume: "Luffy et son équipage sont sur le point de participer au plus grand rassemblement mondial de pirates : le Pirate Fest, organisé par le machiavélique Buena Festa.",
          rating: 4.6,
        },
        {
          name: "Dragon Ball Super: Broly",
          image: "https://fr.web.img3.acsta.net/pictures/19/02/22/16/14/0019120.jpg",
          resume:"La Terre est en paix après le Tournoi du Pouvoir mais Goku continue à s'entraîner, persuadé qu'il y a des forces encore plus fortes dans l'univers. En effet, Goku et Vegeta vont font face à un nouvel ennemi, le Super Saïyen Légendaire Broly, dans un combat explosif pour sauver notre planète.",
          rating: 4.2,
        }
    ])

    
    const [newMovie, setnewMovie] = useState({
        name: "",
        image: "",
        resume:"",
        rating: 0
      });
      const add =()=>{
        setmovieList(movieList.concat({name:newMovie.name,resume:newMovie.resume,image:newMovie.image,rating:newMovie.rating})) 
        alert("movie added")
     }
	 
	 

      const handleChange = (e) => {
        setnewMovie({ ...newMovie, [e.target.name]: e.target.value });
      };

    return(
        <React.Fragment>
            <div className="App" >
                <header>
                    <h1>Movie List</h1>
                </header>
                <section className="searchbox-wrap">
                    <input 
                        type="text" 
                        placeholder="Search for a movie..." 
                        className="searchbox"
                        onChange={(e) => {
                            setKeyword(e.target.value);
                          }}
                    /> 
                 
                    <Button variant="secondary" style={{backgroundColor: 'grey'}} margin="normal" onClick={handleShow}>ADD Movie</Button>
		         </section>   
                <Movie movieList={movieList.filter((el) =>
                    el.name.toUpperCase().includes(keyword.toUpperCase())
                )}  search={search}
               />
            </div>


            <Modal show={show} onHide={handleClose} animation={false}>
                <Modal.Header closeButton>
                <Modal.Title>Add Movie</Modal.Title>
                </Modal.Header>
                <Modal.Body>

                <div className="container-fluid row">
              <div className="col-5">Name: </div>
              <div className="col-8">
                <input type="text" onChange={handleChange} name="name"></input>
              </div>
              <div className="col-5">Image URL: </div>
              <div className="col-8">
                <input type="text" onChange={handleChange} name="image"></input>
              </div>
              <div className="col-5">Rate: </div>
              <div className="col-8">
                <input
                  type="number"
                  onChange={handleChange}
                  name="rating"
                ></input>
              </div>  <div className="col-5">resume: </div> 
              <div className="col-8">
                <input
                  type="text"
                  onChange={handleChange}
                  name="resume"
                ></input>
              </div>
            </div>
                </Modal.Body>
                <Modal.Footer>
                <Button variant="secondary" onClick={handleClose}>
                    Close
                </Button>
                <Button variant="primary" onClick={add}>
                    Add movies
                </Button>
                </Modal.Footer>
            </Modal>
        </React.Fragment>
    )
}

export default MovieList