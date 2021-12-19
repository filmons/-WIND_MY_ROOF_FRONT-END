import React from "react";
import "./App.css";
import {
	BrowserRouter as Router,
	Route,
	Switch,
	Redirect,
} from "react-router-dom";
import Header from "./components/Header";
import Home from "./pages/Home.js";
import SignUp from "./pages/signUp";
import Login from "./pages/Login";
import Admine from "./pages/Admin";
import Client from "./pages/client";
import page_not_found from "./components/page_not_found";

function PrivateRoute(props) {
	if (localStorage.getItem("token")) {
		return <Route exact path={props.path} component={props.component} />;
	} else {
		return <Route render={() => <Redirect to="/login" />}/>;
	}
}

function App() {
	return (
		<div>
			<Header />
			<Router>
				<Switch>
					<Route exact  path="/" component={Home} />
					<Route exact  path="/signup" component={SignUp} />
					<Route exact  path="/login" component={Login} />
					<PrivateRoute path="/admin" component={Admine} />
					<PrivateRoute path="/client" component={Client} />
					<Route exact  path="*" component={page_not_found} />
				</Switch>
			</Router>
		</div>
	);
}

export default App;
