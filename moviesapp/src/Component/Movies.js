import React,{useState} from 'react';
import Modal from "react-bootstrap/Modal";
import Row from "react-bootstrap/Row";
import StarRatingComponent from 'react-star-rating-component';




const Movies=(props)=>{

  const [show, setShow] = useState(false);
  const [titre, setTitre]=useState([])
  const [photo, setPhoto]=useState([])
  const [resume, setResume]=useState([])
  const [rating, setRating]=useState(2)

  const handleClose = () => {
      setShow(false);
     
    };
  const handleShow = (el) => {
      setShow(true);
      setTitre(el.name)
      setPhoto(el.image);
      setResume(el.resume);
      setRating(el.rating);
    };
   
     
    
    return(
        <React.Fragment>
             <section className="results" >
                {props.movieList.map((el,index) => {
                        return(
                            <React.Fragment key={index}>
                                <div className="result"  onClick={()=>handleShow(el)}>
                                    <img src={el.image} style={{height: 'auto', width: 250, alignItems:'center'}} />
                                    <h3>{el.name}</h3>
                                </div> 
                                <div>
                            <StarRatingComponent
                            name="ratel"
                            value={el.rating}
                            starCount={5}
                            starColor={"#ffb400"}
                             emptyStarColor={"#333"}
                              />
                              </div>
                            </React.Fragment >
                        );
                    })
                }
             </section>
             
             <Modal show={show} onHide={handleClose} >
                <Modal.Header closeButton>
                    <Modal.Title>
                        <p> {titre}</p>
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Row> 
                        <img src={photo} style={{width:150}}/>
                        <br></br>
                       <div style={{marginLeft:10,marginTop:20}}>
                           <b style={{color: 'BLACK'}}>Rating:</b>
                       <StarRatingComponent precision={0.5} value={rating} name="retel" style={{marginTop:50,marginLeft:-30  }}/>
                       </div>
                    </Row>
                   <p><b style={{color: 'BLACK'}}>resume:</b> {resume}</p>
                </Modal.Body>
             </Modal>
        </React.Fragment>

    );
}

export default Movies;