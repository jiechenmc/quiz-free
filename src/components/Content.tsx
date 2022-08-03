import { Component, Match, Switch } from "solid-js";
import Deck from "./Deck";
import {
  collection,
  getFirestore,
  doc,
  setDoc,
  DocumentData,
} from "firebase/firestore";
import { useFirestore } from "solid-firebase";

export interface ContentProps {
  uid: string;
}

const Content: Component<ContentProps> = ({ uid }) => {
  const db = getFirestore();

  const flashcards = useFirestore(collection(db, `/${uid}/flashcards/CSE214`));
  const decks = useFirestore(collection(db, `/${uid}/flashcards/_decks`));

  const handleOnClick = () => {
    const tar = document.getElementById("add") as HTMLInputElement;

    setDoc(doc(db, `/${uid}/flashcards/_decks`, tar.value), {});
  };

  return (
    <div class="mx-2 my-2">
      <button class="btn btn-info" onClick={handleOnClick}>
        +
      </button>

      <input
        id="add"
        type="text"
        placeholder="Add ..."
        class="input input-bordered input-accent-content w-full max-w-xs"
      />

      <Switch>
        <Match when={decks.loading}>
          <p>Loading...</p>
        </Match>
        <Match when={decks.error}>
          <p>An error occurred.</p>
        </Match>
        <Match when={decks.data}>
          {decks.data?.map((d) => {
            return <Deck deckName={d.id} />;
          })}
        </Match>
      </Switch>
    </div>
  );
};

export default Content;
