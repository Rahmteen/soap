import React, { useState, useEffect, useContext, Fragment } from 'react';
import { StateContext } from '../../providers/StateProvider';
import { Link } from 'react-router-dom';
import { Container, Col, Row, Image, Button, Navbar, Nav } from "react-bootstrap"
import logo from "../../../assets/images/postmark-logo.png"

const Footer = () => {
    return (
        <Fragment>
            <Container className="footer-container mt-5 pt-5 pb-3">
                <Nav className="footer-nav justify-content-center pt-4 mt-4" activekey="/home">
                    <Nav.Item>
                        <Nav.Link href="/home"><i className="fab fa-twitter"></i></Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link eventkey="link-1"><i className="fab fa-facebook-f"></i></Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link eventkey="link-2"><i className="fab fa-instagram"></i></Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link eventkey="link-3"><i className="fab fa-youtube"></i>
                        </Nav.Link>
                    </Nav.Item>
                </Nav>
                <Nav className="justify-content-center ">
                    <Nav.Item className="m-1" eventkey="link-4">inquiries </Nav.Item> .
                    <Nav.Item className="m-1" eventkey="link-4">submissions </Nav.Item> .
                    <Nav.Item className="m-1" eventkey="link-4">support </Nav.Item>
                </Nav>
                <br />
                <div className="text-center"><small>
                    Copyright © 2011-2018 Postmark Records. All Rights Reserved. <br />
                    Postmark Records is a Trademark of Nammo Enterprises LLC.
                </small>
                </div>
            </Container>
        </Fragment>
    )
}

export default Footer;