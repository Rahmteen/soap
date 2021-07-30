import React, { useState, useEffect, useContext, Fragment } from "react";
import { StateContext } from "../../providers/StateProvider";
import { Link } from "react-router-dom";
import {
  Container,
  Col,
  Row,
  Image,
  Button,
  Form,
  InputGroup,
  FormControl,
  Dropdown,
  Badge,
} from "react-bootstrap";

import ShopNav from "../../components/ShopNav";

const Support = () => {
  const [subject, setSubject] = useState(null);

  return (
    <Fragment>
      <ShopNav />
      <br />
      <br />
      <Container className="">
        <Row className="">
          <Col md={12} className="text-center h4 mb-3 pb-2">
            Need help with an order?
          </Col>
        </Row>
        <Row>
          {!subject ? (
            <Col md={12} className="text-center pb-2">
              What is it regarding?
            </Col>
          ) : (
            <Col md={12} className="text-center pb-2">
              <Button
                variant="danger"
                size="sm"
                className="mr-2 p-2"
                onClick={() => setSubject(null)}
              >
                <p>
                  <i class="fas fa-undo-alt"></i>
                </p>
              </Button>

              <span className="h5"><Badge bg="secondary">{subject}</Badge></span>
            </Col>
          )}
        </Row>
        {!subject && (
          <Row className="text-center">
            <Col>
              <Button
                onClick={() => setSubject("Order Failure")}
                variant="outline-primary"
                className="mr-1"
              >
                Order Failure
              </Button>
              <Button
                onClick={() => setSubject("Shipping Delay")}
                variant="outline-info"
                className="mr-1"
              >
                Shipping Delay
              </Button>
              <Button
                onClick={() => setSubject("Item Sold Out")}
                variant="outline-danger"
                className="mr-1"
              >
                Item Sold Out
              </Button>
              <Button
                onClick={() => setSubject("Other")}
                variant="outline-secondary"
                className="mr-1"
              >
                Other
              </Button>
            </Col>
          </Row>
        )}
        {subject ? (
          <Col
            className="animate__animated animate__fadeInDown mx-auto p-0"
            md={6}
          >
            <Form>
              <Form.Group
                className="mb-3"
                controlId="exampleForm.ControlInput1"
              >
                <br />
                <Form.Label>Email address</Form.Label>
                <Form.Control type="email" placeholder="name@example.com" />
                <br />
                <Form.Label>Full Name</Form.Label>
                <Form.Control type="text" placeholder="John Smith" />
              </Form.Group>
              <Form.Group controlId="exampleForm.ControlTextarea1">
                <Form.Label>Comments</Form.Label>
                <Form.Control as="textarea" rows={3} />
              </Form.Group>
              <Button variant="primary">Submit</Button>
            </Form>
            <br />
          </Col>
        ): <div className="block-container-support"></div>}
      </Container>
    </Fragment>
  );
};

export default Support;
