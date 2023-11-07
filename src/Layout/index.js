import React from "react";
import Header from "./Header";
import NotFound from "./NotFound";
import Home from "../Home";
import { Route, Switch } from "react-router-dom";
import Study from "../Study";
import Deck from "../Deck";

function Layout() {
  return (
    <React.Fragment>
      <Header />
      <div className="container">
        <Switch>
          <Route path="/" exact>
            <Home />
          </Route>
          <Route path="/decks/:deckId/study">
            <Study />
          </Route>
          <Route path="/decks/:deckId">
            <Deck />
          </Route>
          <Route>
            <NotFound />
          </Route>
        </Switch>
      </div>
    </React.Fragment>
  );
}

export default Layout;
