import React, { useState, useEffect, useContext, Fragment } from "react";
import { StateContext } from "../../providers/StateProvider";
import { Link } from "react-router-dom";
import {
  Container,
  Col,
  Row,
  Navbar,
  NavDropdown,
  Nav,
  Card,
} from "react-bootstrap";
import axios from "axios";

import AssetDisplay from "../AssetDisplay/AssetDisplay";

const Assets = () => {
  const [assets, setAssets] = useState([]);

  useEffect(() => {
    axios
      .post(`/api/asset/get/all`)
      .then((res) => {
        console.log("res: ", res.data);
        setAssets(res.data);
      })
      .catch((err) => {
        console.log("err: ", err);
      });
  }, []);

  return (
    <Fragment>
      <Container fluid>
      <Row>
        {assets.length >= 1 &&
          assets.map((item, i) => {
            return (
              <>
                <Col xl={2} lg={3} md={4} className="mt-1 mb-1 p-1" key={(item, i)}>
                  <AssetDisplay
                    name={item.name}
                    credits={item.credits}
                    content_link={item.content_link}
                    preview={item.preview}
                  />
                </Col>
                <Col xl={2} lg={3} md={4} className="mt-1 mb-1 p-1" key={(item, i)}>
                  <AssetDisplay
                    name={item.name}
                    credits={item.credits}
                    content_link={item.content_link}
                    preview={item.preview}
                  />
                </Col>
                <Col xl={2} lg={3} md={4} className="mt-1 mb-1 p-1" key={(item, i)}>
                  <AssetDisplay
                    name={item.name}
                    credits={item.credits}
                    content_link={item.content_link}
                    preview={item.preview}
                  />
                </Col>
                <Col xl={2} lg={3} md={4} className="mt-1 mb-1 p-1" key={(item, i)}>
                  <AssetDisplay
                    name={item.name}
                    credits={item.credits}
                    content_link={item.content_link}
                    preview={item.preview}
                  />
                </Col>
                <Col xl={2} lg={3} md={4} className="mt-1 mb-1 p-1" key={(item, i)}>
                  <AssetDisplay
                    name={item.name}
                    credits={item.credits}
                    content_link={item.content_link}
                    preview={item.preview}
                  />
                </Col>
                <Col xl={2} lg={3} md={4} className="mt-1 mb-1 p-1" key={(item, i)}>
                  <AssetDisplay
                    name={item.name}
                    credits={item.credits}
                    content_link={item.content_link}
                    preview={item.preview}
                  />
                </Col>
              </>
            );
          })}
      </Row>
      </Container>
    </Fragment>
  );
};

export default Assets;
