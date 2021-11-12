import React, { useState } from "react";
import { Card, Button, ListGroup, ListGroupItem, Modal, Fade, Col,Badge } from 'react-bootstrap';
function EventCard({ id, image_path, description, pdf_link, form_link, name,category, tags }) {
    // const [readMore, setReadMore] = useState(false);
    const [eventModal, setEventModal] = useState(false)
    const OpenEventModal = () => setEventModal(!eventModal)
    const CloseEventModal = () => { setEventModal(!eventModal); console.log(eventModal); }


    
    return (
        // <div className="eventTile" >
        //     <h3 className="justify-center">{name}</h3>
        //     <Button onClick={OpenEventModal} variant="outline-dark">Click for Details</Button>
        //     {console.log(eventModal)}
        <Col

            sm={12}
            lg={6}
            md={6}
            className="justify-center"
            style={{ padding: "5px" }}
        >

            <figure className="article">
                <img src={"http://127.0.0.1:8000/" + image_path} alt="demo-img" />
                <figcaption>
                    <div>
                        <h3 className="cardHoverHeading">{name}</h3>
                        <Button className="my-3" onClick={OpenEventModal} variant="outline-light">Details</Button>
                        
                        
                    </div>
                </figcaption>
            </figure>






            <Modal
                show={eventModal}
                onHide={CloseEventModal}
                size="lg"
                aria-labelledby="contained-modal-title-vcenter"
                centered>
                <Modal.Header closeButton>
                    <Modal.Title id="contained-modal-title-vcenter">
                        Enent Details
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    {/* <div className="carddiv"> */}
                    <Card className="EventCard">
                        <Card.Img className="cardImage" variant="top" src={"http://127.0.0.1:8000/" + image_path} />
                        <Card.Body>
                            <Card.Title className="eventCardTitle">{name}</Card.Title>
                            <Badge className="my-1" bg="primary">{tags}</Badge> 
                            <hr />
                            <Card.Text>
                                {description}
                            </Card.Text>
                            {
                                <ListGroup className="list-group-flush">
                                    <ListGroupItem><a href={pdf_link}>Download Pdf</a></ListGroupItem>
                                </ListGroup>
                            }
                            {/* <Button className="eventCardbutton" onClick={() => setReadMore(!readMore)} variant="outline-primary">{
                                readMore ? 'Read Less' : 'Read More'}</Button> */}
                            <Button className="eventCardbutton" variant="outline-success">Register</Button>
                        </Card.Body>
                    </Card>
                    {/* </div> */}
                </Modal.Body>
            </Modal>
        </Col>

    );
}

export default EventCard;