import React, { useState, useEffect, useContext, Fragment } from "react";
import { StateContext } from "../../providers/StateProvider";
import { Link, useParams } from "react-router-dom";
import { Container, Col, Row, Navbar, NavDropdown, Nav } from "react-bootstrap";
import ShopNav from "../../components/ShopNav";
import { useLocation } from "react-router-dom";
import ShopContent from "../../components/ShopContent";
import MerchDisplay from "../../components/MerchDisplay";
import axios from "axios";
import { ContextExclusionPlugin } from "webpack";

const StoreArtist = () => {
  const location = useLocation();
  const [current, setCurrent] = useState();
  const [merch, setMerch] = useState([]);
  const [artist, setArtist] = useState();

  useEffect(() => {
    setCurrent(location.pathname.split("/store/artist/")[1]);
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

  useEffect(() => {
    axios
      .post(`/api/artist/get/all`)
      .then((res) => {
        console.log("res: ", res.data);
        res.data.map((artist) => {
          console.log(artist.name.toLowerCase().split(" ").join("") == current);
          console.log(current);
        });
        setArtist(res.data);
      })
      .catch((err) => {
        console.log("err: ", err);
      });
  }, [current]);

  return (
    <Fragment>
      <ShopNav />
      <br />
      <Container>
        <Row>
          <Col md={12}>
            {merch.length > 1 &&
              merch.map((item, i) => {
                if (item.artist.split(/\s+/).join("").toLowerCase() == current)
                {
                  
                  if (i == 0) {
                  return (
                    <Col lg={3} md={4}>
                      <p className="h3 text-bebas">{item.artist}</p>
                  
                    </Col>
                  
                  );
                  }
                }
              })}
          </Col>
        </Row>
        <Row>
          {merch.length > 1 &&
            merch.map((item) => {
              if (item.artist.split(/\s+/).join("").toLowerCase() == current) {
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
              }
            })}
        </Row>
      </Container>
    </Fragment>
  );
};

export default StoreArtist;
