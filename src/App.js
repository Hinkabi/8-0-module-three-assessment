import "./App.css";
import React from 'react'
import { Switch, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Movies from "./components/Movies";
import Locations from "./components/Locations";
import People from "./components/People";
import Home from "./components/Home";

class App extends React.Component {
  render() {
    return (
      <div className="app">
        <main>
          <Navbar />
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/locations" component={Locations} />
            <Route path="/people" component={People} />
            <Route path="/movies" component={Movies} />
          </Switch>
        </main>
      </div>
    );
  }
}

export default App;
