import { Route, Switch, Link } from 'react-router-dom';
import React, { useState, useEffect, useContext } from 'react';

// PAGES
import Landing from './pages/Landing'
import Store from './pages/Store';

// COMPONENTS
import "../assets/styles/Custom.scss"
import 'bootstrap/dist/css/bootstrap.min.css';

const App = () => {
	return (
		<div>
			{/* <Route path="/home" component={NavBar}></Route> */}
			<Switch>
				<Route exact path="/" component={Landing}></Route>
				<Route exact path="/contact" component={Contact}></Route>
				<Route exact path="/store" component={Store}></Route>
			</Switch>
			{/* <Route path="/store" component={Footer}></Route> */}
			
		</div>
	);
};

export default App;
