import React, { useState, useEffect, useContext, Fragment } from "react";
import { StateContext } from "../../providers/StateProvider";
import { Link } from "react-router-dom";
import { Container, Col, Modal, Button, Row } from "react-bootstrap";
import axios from "axios";

const AssetModal = ({ show, onHide, name, preview, credits, content_link }) => {
  return (
    <>
      <Modal
        show={show}
        onHide={onHide}
        size="lg"
        style={{ opacity: 1 }}
        aria-labelledby="contained-modal-title-vcenter"
        centered
        animation={true}
      >
        <Modal.Header closeButton onClick={(e) => e.preventDefault && onHide()}>
          <Modal.Title id="contained-modal-title-vcenter">{name}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Container>
            <Row>
              <Col>
                <div class="sketchfab-embed-wrapper">
                  <iframe
                    height="100%"
                    width="100%"
                    title="Flower Pack"
                    frameborder="0"
                    allowfullscreen
                    mozallowfullscreen="true"
                    webkitallowfullscreen="true"
                    allow="fullscreen; autoplay; vr"
                    xr-spatial-tracking
                    execution-while-out-of-viewport
                    execution-while-not-rendered
                    web-share
                    src={content_link}
                  ></iframe>
                </div>
              </Col>
            </Row>
            <Row>
              <Col className="mt-1 mb-1" md={12}>{name}</Col>
              <Col className="mt-1 mb-1" md={12}><i className="fas fa-coin mr-2"></i>{credits}</Col>
              <Col className="mt-1 mb-1" md={12}><Button variant="primary">Redeem</Button></Col>
            </Row>
          </Container>
        </Modal.Body>
        <Modal.Footer></Modal.Footer>
      </Modal>
    </>
  );
};

export default AssetModal;
