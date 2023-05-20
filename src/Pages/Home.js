import { Link } from "react-router-dom";
import Container from "react-bootstrap/Container";
import { Button } from "react-bootstrap";



export default function Home(){
    return <div className="Home">
        <Container>
            <h1>Welcome to Atlantic Cars Dealer </h1>
            <p>This is a Cars list</p>

            <Link to = "/cars">
                <Button variant="dark">View list of Cars</Button>
            </Link>
        </Container>

    </div>
}