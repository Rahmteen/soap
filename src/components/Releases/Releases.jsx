import React, { useState, useEffect, useContext, Fragment } from "react";
import { StateContext } from "../../providers/StateProvider";
import { Link } from "react-router-dom";
import { Container, Col, Row, Image, Button, Card } from "react-bootstrap";

const Releases = () => {
  return (
    <Fragment>
      <p className="text-bebas h2 text-center pb-1 pt-1 mt-3">RELEASES</p>
      <Container className="releases-card">
        <Card className="releases-card">
          <iframe
            src="https://open.spotify.com/embed/album/6F0CBYP35b4VJ1Aq0V7i0R"
            width="100%"
            height="80"
            frameBorder="0"
            allowtransparency="true"
            allow="encrypted-media"
          ></iframe>
          <iframe
            src="https://open.spotify.com/embed/album/6O6b9RbKarXCI1aqlEMWOY"
            width="100%"
            height="80"
            frameBorder="0"
            allowtransparency="true"
            allow="encrypted-media"
          ></iframe>
          <iframe
            src="https://open.spotify.com/embed/track/6d7nbKGqLlidBj6YPmNVfS"
            width="100%"
            height="80"
            frameBorder="0"
            allowtransparency="true"
            allow="encrypted-media"
          ></iframe>
          <iframe
            src="https://open.spotify.com/embed/album/64GkTbaN05AuXfBJMNAETV"
            width="100%"
            height="80"
            frameBorder="0"
            allowtransparency="true"
            allow="encrypted-media"
          ></iframe>
          <iframe
            src="https://open.spotify.com/embed/album/3ooSClWzUQeEELbTrxbADa"
            width="100%"
            height="80"
            frameBorder="0"
            allowtransparency="true"
            allow="encrypted-media"
          ></iframe>
          <iframe
            src="https://open.spotify.com/embed/album/4hMWyaqFk29h7OjOaYCeie"
            width="100%"
            height="80"
            frameBorder="0"
            allowtransparency="true"
            allow="encrypted-media"
          ></iframe>
          <iframe
            src="https://open.spotify.com/embed/album/4gCxVCBV1bThixzOFIkZB0"
            width="100%"
            height="80"
            frameBorder="0"
            allowtransparency="true"
            allow="encrypted-media"
          ></iframe>
          {/* <iframe
          src="https://open.spotify.com/embed/album/3q59LHQOMCPR5DDXOQnnhE"
          width="100%"
          height="80"
          frameBorder="0"
          allowtransparency="true"
          allow="encrypted-media"
        ></iframe> */}
          <div className="mb-3 mt-2 text-left">
            <small>view all</small>
          </div>
        </Card>
      </Container>
    </Fragment>
  );
};

export default Releases;
