import { useParams } from "@solidjs/router";
import { getFirestore, collection } from "firebase/firestore";
import { useFirestore } from "solid-firebase";
import { Component } from "solid-js";

const DeckPage: Component = () => {
  const { uid, deckName } = useParams();

  const db = getFirestore();

  const flashcards = useFirestore(collection(db, `/${uid}/flashcards/CSE214`));

  return (
    <div>
      <h2>Set Name: {deckName}</h2>
      <h1>Owner: {uid}</h1>
    </div>
  );
};

export default DeckPage;
