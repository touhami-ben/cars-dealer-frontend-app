import axios from "axios";
import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { Container } from "react-bootstrap";
import {Image} from "react-bootstrap";
import {Button }from "react-bootstrap";

export default function CarDetails(){

    const [car, setCar] = useState([]);
    const { id } = useParams();
    const API = process.env.REACT_APP_API_URL;
    const navigate = useNavigate();


    useEffect(() => {
        axios
        .get(`${API}/cars/${id}`)
        .then((response) => {
          setCar(response.data);
        })
        .catch((error) => {
          console.log(error);
        });
    }, [id, API]);

    const deleteCar = () => {
        axios.delete(`${API}/cars/${id}`)
        .then(() => {
            navigate(`/cars`);

        })
        .catch (error => {
            console.log(error)
        });  
    };
    const handleDelete = ()=> {
        deleteCar();
    }

    return(
        <div>
        <Container>
            <p>Name: {car.name}</p>
            <p>Make: {car.make}</p>
            <p>condition: {car.condition}</p>
            
        </Container>
        <Container>
            {car.image_url ? <Image src ={car.image_url} fluid rounded /> : null}
            <Button variant = "dark" onClick={()=> navigate('/cars')}>Back</Button>
            <Button variant ="dark" onClick= {()=> navigate(`/cars/${id}/edit`)} >Edit</Button>
            <Button variant = "dark" onClick= {handleDelete}>Delete</Button>
        </Container>

        </div>
    )

}