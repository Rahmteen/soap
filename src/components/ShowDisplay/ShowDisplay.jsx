import React, { useState, useEffect, useContext, Fragment } from "react";
import { Link } from "react-router-dom";
import { Card, Button } from "react-bootstrap";
import CornerRibbon from "react-corner-ribbon";
import axios from "axios";

const ShowDisplay = ({ date, poster, venue, city, link }) => {
  return (
    <Fragment>
      <Card className="mb-3" body="false" bg="white" text="muted">
        <div style={{ position: "relative" }}>
          <CornerRibbon
            position="top-left"
            fontColor="white"
            backgroundColor="red"
            containerStyle={{}}
            style={{ fontWeight: "500" }}
            className=""
          >
            {date}
          </CornerRibbon>
          <Card.Img
            className="poster-1"
            width="800px"
            variant="top"
            src={poster}
          ></Card.Img>
        </div>
        <Card.Footer className="card-body-text text-center">
          <Card.Body>
            <Card.Title>{city}</Card.Title>
            <Card.Text>{venue}</Card.Text>
            <br />
            <Button as={Link} to={link} className="" size="sm">
              TICKETS
            </Button>
          </Card.Body>
        </Card.Footer>
      </Card>
    </Fragment>
  );
};

export default ShowDisplay;
