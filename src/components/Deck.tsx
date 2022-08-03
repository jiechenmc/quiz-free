import { Component } from "solid-js";

interface DeckProps {
  uid: string;
  deckName: string;
}

const Deck: Component<DeckProps> = ({ uid, deckName }) => {
  return (
    <div class="bg-base-100 shadow-xl image-full">
      <figure>
        <img src="https://placeimg.com/400/225/arch" alt="Shoes" />
      </figure>
      <div class="card-body">
        <h2 class="card-title">{deckName}</h2>
        <p>If a dog chews shoes whose shoes does he choose?</p>
        <div class="card-actions justify-end">
          <a class="btn btn-primary" href={`${uid}/deck/${deckName}`}>
            View
          </a>
        </div>
      </div>
    </div>
  );
};

export default Deck;
