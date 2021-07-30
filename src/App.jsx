import { Route, Switch, Link } from 'react-router-dom';
import React, { useState, useEffect, useContext } from 'react';

// PAGES
import Landing from './pages/Landing'
import Home from './pages/Home'
import Contact from './pages/Contact'
import Roster from './pages/Roster'
import Tours from './pages/Tours'
import Edit from  './pages/Edit'
import Store from './pages/Store';
import StoreArtist from './pages/StoreArtist';
import Support from './pages/Support';
// COMPONENTS
import NavBar from './components/NavBar'
import Footer from './components/Footer'
import "../assets/styles/Custom.scss"
import 'bootstrap/dist/css/bootstrap.min.css';

const App = () => {
	return (
		<div>
			<Route path="/home" component={NavBar}></Route>
			<Route path="/roster" component={NavBar}></Route>
			<Route path="/tours" component={NavBar}></Route>
			<Route path="/edit" component={NavBar}></Route>
			<Switch>
				<Route exact path="/" component={Landing}></Route>
				<Route exact path="/contact" component={Contact}></Route>
				<Route exact path="/store" component={Store}></Route>
				<Route exact path="/home" component={Home}></Route>
				<Route exact path="/roster" component={Roster}></Route>
				<Route exact path="/tours" component={Tours}></Route>
				<Route exact path="/edit" component={Edit}></Route>
				<Route exact path="/store/support" component={Support}></Route>
				<Route exact path="/store/artist/:userId" component={StoreArtist} />
			</Switch>
			<Route path="/home" component={Footer}></Route>
			<Route path="/store" component={Footer}></Route>
			<Route path="/edit" component={Footer}></Route>
			<Route path="/roster" component={Footer}></Route>
			<Route path="/tours" component={Footer}></Route>
			
		</div>
	);
};

export default App;
