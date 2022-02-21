import React from "react";
import Header from "../components/Header";
import Heading from "../components/Heading";

import { Container, Row } from "react-bootstrap";

function AboutMe() {
    return (
        <div>
            <Header />
            <Heading title="about me." />
            <Container>
                <Row>
                    <h2>available soon</h2>
                </Row>
            </Container>
        </div>
    );
};

export default AboutMe;