import { Component } from "solid-js";

export interface FlashCardInstance {
  id: string;
  definition: string;
}

const Card: Component<FlashCardInstance> = ({ id, definition }) => {
  return (
    <div>
      <h2>{id}</h2>
      <h2>{definition}</h2>
    </div>
  );
};

export default Card;
