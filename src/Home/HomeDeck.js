import React from "react";
import Study from "../Study";
import {
  Route,
  Switch,
  Link,
  useRouteMatch,
  useHistory,
} from "react-router-dom";
import { deleteDeck, listDecks } from "../utils/api";
import { useState } from "react";
import { useEffect } from "react";

function HomeDeck({ deck }) {
  const [newDecks, setNewDecks] = useState([]);

  // console.log(newDecks)

  async function getDecks() {
    const data = await listDecks();
    setNewDecks(data);
  }

  useEffect(() => {
    getDecks();
  }, []);

  const history = useHistory();

  const deleteHandler = async () => {
    if (
      window.confirm("Delete this deck? You will not be able to recover it.")
    ) {
      await deleteDeck(deck.id);
      getDecks();
      history.push("/");
    }
  }

  return (
    <div className="border rounded p-3 my-2">
      <div className="d-flex justify-content-between">
        <h4>{deck.name}</h4>
        <p className="text-end">{deck.cards.length} cards</p>
      </div>
      <p>{deck.description}</p>
      <div>
        <Link to={`/decks/${deck.id}`} className="btn btn-secondary mr-2">
          View
        </Link>
        <Link to={`/decks/${deck.id}/study`} className="btn btn-primary">
          Study
        </Link>
        <button
          onClick={deleteHandler}
          type="button"
          className="btn btn-danger float-right"
        >
          Delete
        </button>
      </div>
    </div>
  );
}

export default HomeDeck;
