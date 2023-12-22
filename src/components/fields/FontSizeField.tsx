import React from "react";
import {Badge, Col, Form, Row} from "react-bootstrap";

const FontSizeField: React.FC = () => {
    const [value, setValue] = React.useState(12)

    return (
        <>
            <Form.Label>What is the minimum font size in your presentation?</Form.Label>
            <Row>
                <Col>
                    <Form.Range min={8} max={30} value={value} onChange={e => setValue(parseInt(e.target.value))}/>
                </Col>
                <Col xs={1}>
                    <h1><Badge>{value}</Badge></h1>
                </Col>
            </Row>
        </>
    );
}

export default FontSizeField;