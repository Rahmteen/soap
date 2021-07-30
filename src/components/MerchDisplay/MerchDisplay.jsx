import React, { useState, useEffect, useContext, Fragment } from "react";
import { Link } from "react-router-dom";
import { Card, Button, Badge } from "react-bootstrap";
import CornerRibbon from "react-corner-ribbon";
import axios from "axios";

const MerchDisplay = ({ name, artist, price, image, kind }) => {
  return (
    <Fragment>
      <Card className="mb-3">
        <Card.Img className="p-3" variant="top" src={image} />
        <Card.Body>
          <Card.Title>
            <Badge className="mb-1" variant="secondary">{kind}</Badge>{" "}
            <Badge className="mb-1" variant="danger">{price}</Badge>
          </Card.Title>
          <Card.Title className="h6" style={{fontWeight: 600, fontSize: '0.9rem'}}>{name}</Card.Title>
          <Card.Subtitle className="mb-2 text-muted">{artist}</Card.Subtitle>
        </Card.Body>
      </Card>
    </Fragment>
  );
};

export default MerchDisplay;
