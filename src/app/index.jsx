import React from "react";
import { render } from "react-dom";

import "./../scss/main.scss";

import User from "./components/User.jsx";
import SimpleMap from "./components/SimpleMap.jsx";

class App extends React.Component {
  render() {
    return (
      <div className="home">
       <p> Recommendations based on Hazard level &nbsp; 
		<span className="red">High</span>
		<span className="yellow">Medium</span>
		<span className="green">Low</span>
	   </p>
		<SimpleMap />
        
        
      </div>
    );
  }
}

render(<App />, document.getElementById("app"));
