import React from "react";
import Header from "../components/Header";
import Heading from "../components/Heading";

import {Container, Row, Image} from "react-bootstrap";

import plantImg from "../images/plant-photo.jpg";

function App() {
  return (
    <div>
      <Header />
      <Container>
            <Row>
                <Heading title="hi my name is jason." />
            </Row>
            <Row>
                <Image src={plantImg} fluid="true" alt="Photo by MOHAMED ABDELSADIG from Pexels"/>
            </Row>
            
        </Container>
      
    </div>
  );
}

export default App;
