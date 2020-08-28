import React, { Component } from 'react';
import Header from './header/header';
import ImageCaurosel from './image-caurosel/image-caurosel';
import {
    Container,
    Row,
    Col
} from 'reactstrap';

const Home = () => {
    return (


        <Container fluid>
            <Row>
                <Col><Header /></Col>
            </Row>
            <Row>
               <Col><ImageCaurosel /></Col> 
            </Row>
        </Container>
    );


}
export default Home;