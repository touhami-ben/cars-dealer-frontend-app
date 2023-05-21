import  React  from "react";
import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { Form, Button } from "react-bootstrap";

const API = process.env.REACT_APP_API_URL;


export default function CarNewForm (){
    let navigate = useNavigate();


    const [newCar, setNewCar] = useState({
        name: "",
        image_url: "",
        price: "",
        make: "",
        condition: "",
        is_available: ""
    });
    function handleSubmit(event) {
        event.preventDefault();
        axios
        .post(`${API}/cars`, newCar)
        .then(() => {navigate("/");
    }).catch ((error) => {
        // console.warn("catch", error)
        console.log("error", error);
        navigate("/not-found")
    });
    }

    function handleTextChange(event) {
        setNewCar({...newCar, [event.target.id]: event.target.value })
    }
    function handleCheckboxChange() {
        setNewCar({...newCar, is_available: !newCar.is_available})
    }
    return (
        <div>
            <h2>New Car</h2>
            <Form onSubmit={handleSubmit}>
                <Form.Group className="mb-3" controlId="name">
                    <Form.Label>
                        Model: 
                    </Form.Label>
                    <Form.Control 
                    id="name"
                    type="text"
                    onChange={handleTextChange}
                    required
                    placeholder="Enter name of car"
                    value={newCar.name} />
                    
                </Form.Group>
                <Form.Group className="mb-3" controlId="image_url">
                    <Form.Label>Image_URL</Form.Label>
                    <Form.Control
                        
                        id="image_url"
                        type="text"
                        onChange={handleTextChange}
                        placeholder="Enter url"
                        value={newCar.image_url} />

                </Form.Group>
                <Form.Group className="mb-3" controlId="">

                    <Form.Label>
                        {" "}
                        Price
                    </Form.Label>
                    <Form.Control
                    id="price"
                    type="number"
                    onChange={handleTextChange}
                    value={newCar.price}
                    placeholder="Entre price - no $ sign needed"
                    title="price required"
                    required />

                </Form.Group>

                <Form.Group>
                    <Form.Label>Make</Form.Label>
                    <Form.Control
                        id="make"
                        type="text"
                        onChange={handleTextChange}
                        value={newCar.make}
                        placeholder="Enter make"
                        />

                </Form.Group>

                <Form.Group>
                    <Form.Label>Condition</Form.Label>
                    <Form.Control
                        id="condition"
                        type="text"
                        onChange={handleTextChange}
                        value={newCar.condition}
                    />
                </Form.Group>


                <Form.Group className="mb-3" controlId="is_favorite">
                    <Form.Label>
                        Available 
                    </Form.Label>
                    <Form.Check
                    id="is_available"
                    type="checkbox"
                    onChange={handleCheckboxChange} />
                </Form.Group>

                <div>
                    <div>
                        <Button variant="primary" type="submit" onClick={() => navigate("/")}>Save</Button>
                        <Button  variant="primary" type="button" onClick={()=> navigate("/")}>Cancel</Button>
                        <Button  variant="primary" type="reset" >
                            {" "}
                             Reset
                        </Button>
                    </div>
                </div>
            </Form>
        </div>
    )
}