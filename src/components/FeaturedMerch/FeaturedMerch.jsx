import React, { useState, useEffect, useContext, Fragment } from "react";
import { StateContext } from "../../providers/StateProvider";
import { Link } from "react-router-dom";
import {
  Container,
  Col,
  Card,
  Badge,
  CardDeck,
  Row,
  Image,
  Button,
} from "react-bootstrap";
import axios from "axios";

// import grinnsVinyl from "../../../assets/images/shop/grinns-ltdg-vinyl.jpg";
// import ondrugsVinyl from "../../../assets/images/shop/ondrugs-uf-vinyl.jpg";
// import frightsShirt from "../../../assets/images/shop/thefrights-tshirt-1.jpg";

const FeaturedMerch = () => {
  const [featuredMerch, setFeaturedMerch] = useState([]);

  useEffect(() => {
    axios
      .post(`/api/item/get/all`)
      .then((res) => {
        console.log("res: ", res.data);
        setFeaturedMerch(res.data);
      })
      .catch((err) => {
        console.log("err: ", err);
      });
  }, []);
  return (
    <Fragment>
      <p className="text-bebas h2 text-center pb-1 mt-2">MERCH</p>
      {featuredMerch.length &&
        featuredMerch.map((item) => {
          if (item.featured) {
          return (
            <Card className="mb-3">
              <Card.Img variant="top" src={item.image} />
              <Card.Body>
                <Card.Title>
                  <Badge variant="secondary">{item.kind}</Badge>{" "}
                  <Badge variant="danger">{item.price}</Badge>
                </Card.Title>
                <Card.Title>{item.name}</Card.Title>
                <Card.Subtitle className="mb-2 text-muted">
                  {item.arist}
                </Card.Subtitle>
              </Card.Body>
            </Card>
          );
        }})}
    </Fragment>
  );
};

export default FeaturedMerch;
