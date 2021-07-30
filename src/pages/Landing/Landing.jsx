import React, { useState, useEffect, useContext, Fragment } from 'react';
import { StateContext } from '../../providers/StateProvider';
import { Link } from 'react-router-dom';
import { Container, Col, Row, Image, Button } from "react-bootstrap"
import logo from "../../../assets/images/postmark-logo.png"
import bg from "../../../assets/images/pm-1.jpg"

const Landing = () => {
    return (
        <Fragment>
            <Container className="landing-container">

                <Row className="text-center">
                    <Col><Image className="logo-image" width='200px' src={logo}></Image></Col>
                </Row>

                <Row className="text-center">
                    <Col>
                        <Button as={Link} to="/store" className="button-store mr-1" size="lg" variant="success">
                            store
                        </Button>
                        <Button as={Link} to="/home" className="button-enter ml-1" size="lg" variant="danger">
                            enter
                        </Button>
                    </Col>
                </Row>
            </Container>
        </Fragment>
    )
}

export default Landing;