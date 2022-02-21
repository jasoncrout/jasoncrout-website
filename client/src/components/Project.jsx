import React from "react";
import { Col, Card, Button } from "react-bootstrap";

function Project({ title, content, img, link }) {
    return (
        <Col className="mt-4">
            <Card border="light" bg="black">
                <Card.Body>
                    <Card.Title as="h3">{title}</Card.Title>
                    <Card.Text>
                        {content}
                    </Card.Text>
                    <Card.Img src={img} />
                </Card.Body>
                <Card.Body className="d-grid">
                        <Button href={link} variant="dark" size="lg">see project</Button>
                </Card.Body>
            </Card>
        </Col>
    );
};

export default Project;