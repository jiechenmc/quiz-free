import type { Component } from "solid-js";
import { Match, Switch } from "solid-js";
import { collection, getFirestore, doc, setDoc } from "firebase/firestore";
import { useFirestore } from "solid-firebase";

export interface ContentProps {
  uid: string;
}

const Content: Component<ContentProps> = ({ uid }) => {
  const db = getFirestore();

  const flashcards = useFirestore(collection(db, `/${uid}`));

  const handleOnClick = () => {
    const tar = document.getElementById("add") as HTMLInputElement;

    setDoc(doc(db, `/${uid}/flashcard`), {
      name: tar.value,
    });
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
        <Match when={flashcards.loading}>
          <p>Loading...</p>
        </Match>
        <Match when={flashcards.error}>
          <p>An error occurred.</p>
        </Match>
        <Match when={flashcards.data}>
          <p>{flashcards?.data[0].name}</p>
        </Match>
      </Switch>
    </div>
  );
};

export default Content;
