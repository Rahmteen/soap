import React, { useState, useEffect, useContext, Fragment } from "react";
import { StateContext } from "../../providers/StateProvider";
import { Link } from "react-router-dom";
import { Container, Col, Row, Image, Button } from "react-bootstrap";

const TwitterFeed = () => {
  return (
    <Fragment>
      <Row className="feed-row">
        <Col md={4}>
          <script
            async
            src="https://platform.twitter.com/widgets.js"
            charset="utf-8"
          ></script>
          <blockquote class="twitter-tweet mb-2 mt-2">
            <p lang="en" dir="ltr">
              Check out Grinns on Sat, Aug 7 at{" "}
              <a href="https://twitter.com/SOMAsd?ref_src=twsrc%5Etfw">
                @somasd
              </a>
              ! <a href="https://t.co/a967KTFnhn">https://t.co/a967KTFnhn</a>
            </p>
            &mdash; Postmark Records (@PostmarkSD){" "}
            <a href="https://twitter.com/PostmarkSD/status/1404832219777011712?ref_src=twsrc%5Etfw">
              June 15, 2021
            </a>
          </blockquote>{" "}
        </Col>
      </Row>
    </Fragment>
  );
};

export default TwitterFeed;
