import { Component } from "solid-js";

interface DeckProps {
  deckName: string;
}

const Deck: Component<DeckProps> = ({ deckName }) => {
  return (
    <div>
      <h2>{deckName}</h2>
    </div>
  );
};

export default Deck;
