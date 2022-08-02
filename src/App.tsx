import type { Component } from "solid-js";
import { Match, Switch } from "solid-js";
import { GoogleAuthProvider, getAuth, signInWithPopup } from "firebase/auth";
import { useAuth } from "solid-firebase";
import AppScreen from "./components/AppScreen";

const Login = () => {
  const auth = getAuth();
  const signIn = () => signInWithPopup(auth, new GoogleAuthProvider());

  return <button onClick={signIn}>Sign In with Google</button>;
};

const App: Component = () => {
  const auth = getAuth();
  const state = useAuth(auth);

  console.log(state);

  return (
    <Switch>
      <Match when={state.loading}>
        <p>Loading...</p>
      </Match>
      <Match when={state.error || !state.data}>
        <Login />
      </Match>
      <Match when={state.data}>
        <AppScreen />
      </Match>
    </Switch>
  );
};

export default App;
