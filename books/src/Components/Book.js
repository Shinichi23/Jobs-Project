import React from 'react'
import Card from 'react-bootstrap/Card'
import { Button } from 'react-bootstrap';
import { useHistory } from 'react-router-dom';

const Book = (props) => {
  const history = useHistory()
  const navigate = (id) => {
    history.push(`/Books/${id}`)
  }
    return (
        <div>

<Card style={{ width: '18rem' }}>
  <Card.Img variant="top" src={props.info.volumeInfo.imageLinks?.thumbnail} />
  <Card.Body>
    <Card.Title>{props.info.volumeInfo.title}</Card.Title>
    <Button onClick={() => navigate(props.info.id)} variant="primary">See More</Button>
  </Card.Body>
</Card>
            
        </div>
    )
}

export default Book
