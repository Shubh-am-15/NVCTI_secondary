import React, {useState} from "react";
import {Card,Button,ListGroup,ListGroupItem} from 'react-bootstrap';
function EventCard({id,image,info,price,name}) {
    const [readMore, setReadMore]=useState(false);
    return (
        <div className="carddiv">
            <Card className="EventCard">
                <Card.Img className="cardImage" variant="top" src={image} />
                <Card.Body>
                    <Card.Title className="eventCardTitle">{name}</Card.Title>
                    <Card.Text>
                        {readMore ? info:""}
                    </Card.Text>
                    {
                        readMore? <ListGroup className="list-group-flush">
                        <ListGroupItem><a href="#">Download Pdf</a></ListGroupItem>
                      </ListGroup> : ''
                    }
                    <Button className="eventCardbutton" onClick={()=> setReadMore(!readMore)} variant="outline-primary">{
readMore?'Read Less':'Read More' }</Button>
                    <Button className="eventCardbutton" variant="outline-success">Register</Button>
                </Card.Body>
            </Card>
        </div>
    );
}

export default EventCard;