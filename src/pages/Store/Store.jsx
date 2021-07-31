import React, { useState, useEffect, useContext, Fragment } from "react";
import { StateContext } from "../../providers/StateProvider";
import { Link } from "react-router-dom";
import { Container, Col, Row, Navbar, NavDropdown, Nav } from "react-bootstrap";
import axios from "axios";

const Store = () => {
  const [assets, setAssets] = useState([])
  
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

    </Fragment>
  );
};

export default Store;
