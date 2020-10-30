// import logo from "./logo.svg";
// import "./App.css";
import "./components/styles/app.scss";
import React from "react";
import HomePage from "./components/HomePage";
import ServiceSelector from "./components/ServiceSelector";
import CarSizeSelector from "./components/CarSizeSelector";
import { BrowserRouter, Route } from "react-router-dom";
function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Route exact path="/" component={HomePage}></Route>
        <Route exact path="/services" component={ServiceSelector}></Route>
        <Route exact path="/carsize" component={CarSizeSelector}></Route>
      </div>
    </BrowserRouter>
  );
}

export default App;
