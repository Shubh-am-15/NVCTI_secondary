import React, { useState, useEffect } from 'react';
import { InputGroup, FormControl, Form, Button, Table } from "react-bootstrap";


function AdminEventForm() {
    const [deleteId,setDeleteId] = useState('');
    const [editBtn, seteditBtn]= useState(false);
    console.log(editBtn);
    const [name, setName] = useState('');
    const [image, setImage] = useState('');
    const [pdf_link, setPdf] = useState('');
    const [form_link, setForm] = useState('');
    const [description, setdescription] = useState('');
    const [category, setCategory] = useState('');
    const [tags, setTags] = useState('');
    async function addEvent() {
        console.log(name, description, image, pdf_link, form_link);
        const formData = new FormData();
        formData.append('name', name);
        formData.append('image', image);
        formData.append('pdf_link', pdf_link);
        formData.append('form_link', form_link);
        formData.append('description', description);
        formData.append('category', category);
        formData.append('tags', tags);
        let result = await fetch('http://127.0.0.1:8000/api/addEvents', {
            method: 'POST',
            body: formData
        });
        alert('Data has been saved');

    }

    const url = 'http://127.0.0.1:8000/api/list';


    const [tours, setTours] = useState([]);
    const fetchTours = async () => {
        try {
            const response = await fetch(url);
            const tours = await response.json();
            setTours(tours);
            console.log(tours);

        } catch (error) {
            console.log(`error: ${error}`);
        }

    };
    useEffect(() => {
        fetchTours();
    }, []);
    

    async function deleteOperation(id){
        let result=await fetch("http://127.0.0.1:8000/api/delete/"+id, { method:'DELETE'});
        result=await result.json();
       console.log(result);
       console.log(id);
       window.location.reload(false);
      
   }
    function editOperation(event){
       console.log(event);
       setName(event.name);
       setdescription(event.description);
       setForm(event.form_link);
       setPdf(event.pdf_link);
       setTags(event.tags);
       setCategory(event.category);
       seteditBtn(true);
       setDeleteId(event.id);
   }
   async function editEvent(){
       console.log(deleteId);
       await deleteOperation(deleteId);
       await addEvent();

   }


    return (
        <div className="adminform m-5">
            <InputGroup className="mb-3">
                <InputGroup.Text id="basic-addon1">Name</InputGroup.Text>
                <FormControl
                    placeholder="Name"
                    aria-label="Username"
                    aria-describedby="basic-addon1"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                />
            </InputGroup>


            <InputGroup className="mb-3">
                <InputGroup.Text>Description</InputGroup.Text>
                <FormControl as="textarea" aria-label="With textarea" value={description} onChange={(e) => setdescription(e.target.value)}
                />
            </InputGroup>


            <InputGroup className="mb-3">
                <InputGroup.Text id="basic-addon1">Form link</InputGroup.Text>
                <FormControl
                    placeholder="Paste google form link here"
                    aria-label="Username"
                    aria-describedby="basic-addon1"
                    value={form_link}
                    onChange={(e) => setForm(e.target.value)}

                />
            </InputGroup>


            <InputGroup className="mb-3">
                <InputGroup.Text id="basic-addon1">Pdf link</InputGroup.Text>
                <FormControl
                    placeholder="Paste PDF link here"
                    aria-label="Username"
                    aria-describedby="basic-addon1"
                    value={pdf_link}

                    onChange={(e) => setPdf(e.target.value)}

                />
            </InputGroup>


            <InputGroup className="mb-3">
                <InputGroup.Text id="basic-addon1">Category</InputGroup.Text>
                <Form.Select aria-label="Default select example" value={category} onChange={(e)=> setCategory(e.target.value)}>
                    <option>Open this select menu</option>
                    <option value="Flagship">Flagship</option>
                    <option value="MIC">MIC</option>
                    <option value="Others">Others</option>
                </Form.Select>
            </InputGroup>


            <InputGroup className="mb-3">
                <InputGroup.Text id="basic-addon1">Tags</InputGroup.Text>
                <Form.Select aria-label="Default select example" value ={tags} onChange={(e)=> setTags(e.target.value)}>
                    <option>Open this select menu</option>
                    <option value="Ongoing">Ongoing</option>
                    <option value="Upcoming">Upcoming</option>
                    <option value="Past">Past</option>
                </Form.Select>
            </InputGroup>

            <Form.Group controlId="formFile" className="mb-3">
                <Form.Label>Enter Event Image</Form.Label>
                <Form.Control type="file" onChange={(e) => setImage(e.target.files[0])} />
            </Form.Group>

            {editBtn ? <Button onClick={()=>{editEvent(); seteditBtn(!editBtn);}} className="mb-3" variant="outline-primary">SAVE CHANGES</Button> :
            <Button onClick={addEvent} className="mb-3" variant="outline-success">ADD</Button> }
            


            {/* events table for admin */}
            <Table striped bordered hover>
                <thead>
                    <tr>
                        <th>Id</th>
                        <th>Name</th>
                        <th>Category</th>
                        <th>Tags</th>
                        <th>Options</th>
                    </tr>
                </thead>
                <tbody>
                    {tours.map((event) => {
                        return (
                            <tr>
                                <td>{event.id}</td>
                                <td>{event.name}</td>
                                <td>{event.category}</td>
                                <td>{event.tags}</td>
                                <td><Button className="mx-3" variant="outline-danger" onClick={()=>{deleteOperation(event.id)}} size="sm">Delete</Button>
                                <Button variant="outline-primary" onClick={()=>{editOperation(event); }} size="sm">Edit</Button></td>
                            </tr>
                        )
                    }
                    )}


                </tbody>
            </Table>


        </div>

    );
}

export default AdminEventForm;