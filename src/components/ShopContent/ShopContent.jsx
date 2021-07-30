import React, { useState, useEffect, useContext, Fragment } from "react";
import { StateContext } from "../../providers/StateProvider";
import { Link } from "react-router-dom";
import { Container, Col, Row, Image, Button } from "react-bootstrap";
import axios from "axios";

import MerchDisplay from "../MerchDisplay";

const ShopContent = () => {
  const [merch, setMerch] = useState([]);

  useEffect(() => {
    axios
      .post(`/api/item/get/all`)
      .then((res) => {
        console.log("res: ", res.data);
        setMerch(res.data);
      })
      .catch((err) => {
        console.log("err: ", err);
      });
  }, []);

  return (
    <Fragment>
          <Container>
            <Row>
              {merch.length &&
                merch.map((item) => {
                  return (
                    <Col lg={3} md={4}>
                      <MerchDisplay
                        name={item.name}
                        artist={item.artist}
                        price={item.price}
                        image={item.image}
                        kind={item.kind}
                      />
                    </Col>
                  );
                })}
            </Row>
          </Container>
    </Fragment>
  );
};

export default ShopContent;
