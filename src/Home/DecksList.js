import React, { useState, useEffect } from "react";
import { listDecks, deleteDeck } from "../utils/api";
import HomeDeck from "./HomeDeck";

function DecksList() {
  const [decks, setDecks] = useState([]);

  async function getDecks() {
    const data = await listDecks();
    setDecks(data);
  }

  useEffect(() => {
    getDecks();
  }, []);

  const handleDelete = async (deck) => {
    if (
      window.confirm("Delete this deck? You will not be able to recover it.")
    ) {
      await deleteDeck(deck.id);
      getDecks();
    }
  };

  return (
    <div className="mb-4">
      {decks.map((deck) => (
        <HomeDeck deck={deck} key={deck.id} handleDelete={handleDelete} />
      ))}
    </div>
  );
}

export default DecksList;
