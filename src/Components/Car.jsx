import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";

export default function Car({car}){
    return (
        <Card style ={{width: "18rem"}}>
            <Card.Img variant="top" src = {car.image_url} />
            <Card.Body>
                <Card.Title>
                    {car.name} - {car.make}
                </Card.Title>

                <Card.Text>
                    {car.condition}
                    <br></br>
                    {car.price}$
                </Card.Text>
                <Link to ={`/cars/${car.id}`}>
                    <Button variant="dark">View Car</Button>
                </Link>
            </Card.Body>
        </Card>
    )
}