import  React  from "react";
import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
// import { Form, Button } from "react-bootstrap";

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
        console.log("error", error);
        navigate("/not-found")
    });
    }

    function handleTextChange(event) {
        setNewCar({...newCar, [event.target.id]: event.target.value })
    }
    function handleCheckboxChange(event) {
        setNewCar({...newCar, is_available: event.target.value})
    }
    return (
        <div>
            <form onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="name">
                        name of the car: 
                    </label>
                    <input 
                    id="name"
                    type="text"
                    required
                    placeholder="Enter name of car"
                    value={newCar.name} />
                    
                </div>
                <label htmlFor="image_url">
                    Url (image) Link of the car
                </label>
                <input 
                id="image_url"
                type="text"
                onChange={{handleTextChange}}
                placeholder="Enter url"
                value={newCar.image_url} />
                <div>

                    <label htmlFor="price">
                        {" "}
                        Price
                    </label>
                    <input 
                    id="price"
                    type="number"
                    onChange={handleTextChange}
                    value={newCar.price}
                    placeholder="Entre price - no $ sign needed"
                    title="price required"
                    required />

                </div>
                <div>
                    <label htmlFor="is_available">
                        Available 
                    </label>
                    <input
                    id="is_available"
                    type="checkbox"
                    onChange={handleCheckboxChange} />

                </div>

                <div></div>
            </form>
        </div>
    )
}