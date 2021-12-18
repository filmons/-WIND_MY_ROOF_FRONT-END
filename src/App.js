import React from 'react';
import { BrowserRouter as Router, Route, Switch,Redirect, } from "react-router-dom";
import Header from "./components/Header";


import './App.css';

function App() {
  return (
    <div>
			<Header/>
			<Router>
				<Switch>
				
				</Switch>
			</Router>
		</div>
  );
}

export default App;
