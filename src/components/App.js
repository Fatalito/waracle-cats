import React from "react";
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import Upload from "./Upload";
import NavBar from "./NavBar";
import ListingContainer from "./ListingContainer";

function App() {
  return (
    <Router>
      <NavBar />
      <Switch>
        <Route path="/upload">
          <Upload />
        </Route>
        <Route path="/">
          <ListingContainer />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
