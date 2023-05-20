import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import { Button, Form} from "react-bootstrap";


 const API = process.env.REACT_APP_API_URL;

export default function CarEditForm (){


    let { id } = useParams();
    let navigate = useNavigate();

    const [editCar, setEditCar] = useState({
        name: "",
        image_url: "",
        price: 0,
        make: "",
        condition: "",
        is_available: ""
    });

    function handleTextChange (event) {
        setEditCar({...editCar, [event.target.id]: event.target.value});

    }

    function handleCheckboxChange(event) {
        setEditCar({...editCar, is_available: event.target.checked});
    }

    useEffect(() => {
        axios
      .get(`${API}/cars/${id}`)
      .then(
        (response) => {
          setEditCar(response.data);
        },
        (error) => navigate(`/not-found`)
      )
      .catch((e) => console.warn("catch", e));
    }, [id, navigate]);

    const updatedCar = (updatedCar) => {
        axios
          .put(`${API}/cars/${id}`, updatedCar)
          .then(() => {
            navigate(`/cars/${id}`);
          })
          .catch((e) => console.warn("catch", e));
      };

     const handleSubmit=(event)=> {
        event.preventDefault();
        updatedCar(editCar);

        
     }



 return(
    <div>
        <h2>Edit Car</h2>
        <Form onSubmit = {handleSubmit} >
            <Form.Group className="mb-3" controlId="name"> 
                <Form.Label>
                    Model:
                </Form.Label>
                <Form.Control
                id= "name"
                type="text"
                required
                placeholder="Enter model"
                onChange= {handleTextChange}
                value={editCar.name} />
            </Form.Group>

            

            <Form.Group className="mb-2" controlId="image_url">
                <Form.Label>
                    Image-Url
                </Form.Label>
                <Form.Control
                id="image_url"
                type="text"
                onChange={handleTextChange}
                placeholder="Enter url"
                value={editCar.image_url} />
            </Form.Group>

            <Form.Group className="mb-2" controlId="price">
                <Form.Label>
                    price:
                </Form.Label>
                <Form.Control
                id="price"
                type="number"
                onChange={handleTextChange}
                value={editCar.price}
                placeholder ="Enter price "
                required />
            </Form.Group>

            <Form.Group className="mb-2">
                <Form.Label>
                    Make:
                </Form.Label>
                <Form.Control
                id="make"
                type= "text"
                placeholder="Enter make"
                onChange={handleTextChange}
                value= {editCar.make} />
            </Form.Group>
            <Form.Group className="mb-3" controlId="condition">
                <Form.Label>
                    Condition:
                </Form.Label>
                <Form.Control
                id="condition"
                type="text"
                onChange={handleSubmit}
                value={editCar.condition}
                />
            </Form.Group>

            <Form.Group className="mb-3" controlId="is_available">
                <Form.Label>
                Is_Available
                </Form.Label>
                <Form.Check
                id="is_available"
                type="checkbox"
                onChange={handleCheckboxChange}
                />
                </Form.Group>

                <div>
                    <Button variant="primary" type="submit" onSubmit={handleSubmit}>Save</Button>
                    <Button  variant="primary" type ="button"  onClick={() => navigate("/")}>Cancel</Button>
                    <Button  variant="primary" type ="reset" >{" "} Reset</Button>

                </div>
            
        </Form>
    </div>
 )   
};