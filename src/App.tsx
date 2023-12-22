import Container from "react-bootstrap/Container";
import InputForm from "./components/InputForm";
import {Badge, Col, Figure, Row} from "react-bootstrap";

function App() {
    return (
        <Container fluid>
            <Row>
                <Col>
                    <h1>Presentation score calculator</h1>
                    <p>Answer the questions below and get your presentation's score</p>
                </Col>
                <Col></Col>
                <Col>
                    <Badge className="d-flex justify-content-center">
                        <span className="display-1">9.75</span>
                    </Badge>
                </Col>
            </Row>
            <InputForm/>
        </Container>
    );
}

export default App;
