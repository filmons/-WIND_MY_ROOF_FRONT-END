import React from 'react';
import { BrowserRouter as Router, Route, Switch,Redirect, } from "react-router-dom";
import Header from "./components/Header";
import Home from "./pages/Home.js";
import SignUp from './pages/signUp';


import './App.css';

function App() {
  return (
    <div>
			<Header/>
			<Router>
				<Switch>
        <Route exact path="/" component={Home}/>
        <Route exact path="/signup" component={SignUp} />
				
				</Switch>
			</Router>
		</div>
  );
}

export default App;
