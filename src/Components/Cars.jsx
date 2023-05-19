import axios from "axios";
import { useState, useEffect } from "react";
import Car from "./Car";
import {Container, Row} from "react-bootstrap";

export default function Cars(){
    const [cars, setCars] = useState([]);
    const API =process.env.REACT_APP_API_URL;

    useEffect(() => {
        axios
        .get(`${API}/cars`)
        .then((response) => {
            setCars(response.data);
        })
        .catch((error) => console.log(error));
    }, [API]);
    return (
        <div>
            <h1>List of cars</h1>
            <p>Thank you for  Shopping with us</p>
            <Container>
                <Row>
                    {cars.map((car) => {
                        return <Car key={car.id} car={car} />
                    })}
                </Row>
            </Container>
        </div>
    )
}