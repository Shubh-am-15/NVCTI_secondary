import React, { useState } from 'react';
import { InputGroup, FormControl, Form, Button } from "react-bootstrap";


function AdminEventForm() {
    const [name, setName] = useState('');
    const [image, setImage] = useState('');
    const [pdf_link, setPdf] = useState('');
    const [form_link, setForm] = useState('');
    const [description, setdescription] = useState('');
    async function addEvent() {
        console.log(name, description, image, pdf_link, form_link);
        const formData=new FormData();
        formData.append('name',name);
        formData.append('image',image);
        formData.append('pdf_link',pdf_link);
        formData.append('form_link',form_link);
        formData.append('description',description);
        let result= await fetch('http://127.0.0.1:8000/api/addEvents',{
            method:'POST',
            body: formData
        });
        alert('Data has been saved');

    }

    return (
        <div className="adminform m-5">
            <InputGroup className="mb-3">
                <InputGroup.Text id="basic-addon1">Name</InputGroup.Text>
                <FormControl
                    placeholder="Name"
                    aria-label="Username"
                    aria-describedby="basic-addon1"
                    onChange={(e) => setName(e.target.value)}
                />
            </InputGroup>


            <InputGroup className="mb-3">
                <InputGroup.Text>Description</InputGroup.Text>
                <FormControl as="textarea" aria-label="With textarea" onChange={(e) => setdescription(e.target.value)}
                />
            </InputGroup>


            <InputGroup className="mb-3">
                <InputGroup.Text id="basic-addon1">Form link</InputGroup.Text>
                <FormControl
                    placeholder="Paste google form link here"
                    aria-label="Username"
                    aria-describedby="basic-addon1"
                    onChange={(e) => setForm(e.target.value)}

                />
            </InputGroup>


            <InputGroup className="mb-3">
                <InputGroup.Text id="basic-addon1">Pdf link</InputGroup.Text>
                <FormControl
                    placeholder="Paste PDF link here"
                    aria-label="Username"
                    aria-describedby="basic-addon1"
                    onChange={(e) => setPdf(e.target.value)}

                />
            </InputGroup>

            <Form.Group controlId="formFile" className="mb-3">
                <Form.Label>Enter Event Image</Form.Label>
                <Form.Control type="file" onChange={(e) => setImage(e.target.files[0])} />
            </Form.Group>
            <Button onClick={addEvent} className="mb-3" variant="outline-success">ADD</Button>{' '}


        </div>

    );
}

export default AdminEventForm;