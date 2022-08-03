import { Component, For, Match, Switch } from "solid-js";
import { collection, getFirestore, doc, setDoc } from "firebase/firestore";
import { useFirestore } from "solid-firebase";
import Deck from "./Deck";

export interface ContentProps {
  uid: string;
}

const Content: Component<ContentProps> = ({ uid }) => {
  const db = getFirestore();
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
          <div class="grid grid-cols-5 gap-2 my-4">
            {decks.data?.map((d) => {
              return <Deck uid={uid} deckName={d.id} />;
            })}
          </div>
        </Match>
      </Switch>
    </div>
  );
};

export default Content;
