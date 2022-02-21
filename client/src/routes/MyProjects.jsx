import React from "react";
import Header from "../components/Header";
import Heading from "../components/Heading";
import Project from "../components/Project";
import { Container, Row } from "react-bootstrap";

import projects from "../content/projects";

function AboutMe() {
    return (
        <div>
            <Header />
            <Heading title="my projects." />
            <Container>
                <Row className="justify-content-md-center" xs={1} md={2} lg={3}>
                    {projects.map((aProject, index) => {
                        return(<Project key={index} title={aProject.title} content={aProject.content} img={aProject.img} link={aProject.link} />)
                    })}
                </Row>
            </Container>
        </div>
    );
};

export default AboutMe;