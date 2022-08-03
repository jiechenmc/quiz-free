import { Component } from "solid-js";

interface DeckProps {
  deckName: string;
}

const Deck: Component<DeckProps> = ({ deckName }) => {
  return (
    <div>
      <a href={`/${deckName}`}>{deckName}</a>
    </div>
  );
};

export default Deck;
