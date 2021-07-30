import React, { useState, useEffect, useContext, Fragment } from "react";
import { StateContext } from "../../providers/StateProvider";
import { Link } from "react-router-dom";
import { Container, Col, Row, Navbar, NavDropdown, Nav } from "react-bootstrap";
import ShopNav from "../../components/ShopNav";
import ShopContent from "../../components/ShopContent"


const Store = () => {
  return (
    <Fragment>
        <ShopNav />
        <br />
        <br />
        <ShopContent />
    </Fragment>
  );
};

export default Store;
