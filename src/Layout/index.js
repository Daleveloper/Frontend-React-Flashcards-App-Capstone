import React, { useEffect, useState } from "react";
import Header from "./Header";
import NotFound from "./NotFound";
import Home from "./Home";
import { Switch, Route } from "react-router-dom"
import { listDecks } from "../utils/api/index";
import Study from "./Study";
import CreateDeck from "./CreateDeck";
import ViewDeck from "./ViewDeck"
import EditDeck from "./EditDeck";
import AddCard from "./AddCard";
import EditCard from "./EditCard";

function Layout() {
  // const [decks, setDecks] = useState([])

  // useEffect(() => {
  //   const abort = new AbortController();

  //   async function loadDecks() {
  //     try {
  //       const decksData = await listDecks(abort.signal)
  //       setDecks(decksData);
  //     } catch (err) {
  //       console.log(err);
  //     }
  //   }
  //   loadDecks();
  //   return () => abort.abort();
  // }, []);

  //decks={decks} setDecks={setDecks}

  return (
    <>
      <Header />
      <div className="container">
        <Switch>
          <Route exact path="/">
            <Home />                 
          </Route>

          <Route path="/decks/:deckId/cards/new">
            <AddCard />
          </Route>

          <Route path="/decks/:deckId/cards/:cardId/edit">
            <EditCard />
          </Route>

          <Route path="/decks/:deckId/study">
            <Study />
          </Route>

          <Route path="/decks/:deckId/edit">
            <EditDeck />
          </Route>

          <Route path="/decks/new">
            <CreateDeck />
          </Route>

          <Route path="/decks/:deckId">
            <ViewDeck />
          </Route>

          <Route>
            <NotFound />
          </Route>
        </Switch>
      </div>
    </>
  );
}

export default Layout;
