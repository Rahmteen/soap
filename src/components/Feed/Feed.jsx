import React, { useState, useEffect, useContext, Fragment } from "react";
import { StateContext } from "../../providers/StateProvider";
import { Link } from "react-router-dom";
import {
  Container,
  Col,
  Row,
  Image,
  Button,
  CardDeck,
  Card,
} from "react-bootstrap";

import feed1 from "../../../assets/images/feed/feed1.jpg";

const Feed = () => {
  return (
    <Fragment>
      <p className="text-bebas h2 text-center pb-1 mt-2">NEWS</p>
      <Card style={{ width: "auto" }}>
        <Card.Img variant="top" src={feed1} />
        <Card.Body>
          <Card.Text>
            This is an example of a blog/feed post. You will be able to edit
            this post and the most recent one will be available for anyone
            visiting the site. If they click "see all", they will be taken to a
            page with all posts.
          </Card.Text>
        </Card.Body>
      </Card>
    </Fragment>
  );
};

export default Feed;
