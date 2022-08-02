/* @refresh reload */
import { render } from "solid-js/web";
import { FirebaseProvider } from "solid-firebase";
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

import "./index.css";
import App from "./App";

const env = import.meta.env;

const firebaseConfig = {
  apiKey: env.VITE_apiKey,
  authDomain: env.VITE_authDomain,
  projectId: env.VITE_projectId,
  storageBucket: env.VITE_storageBucket,
  messagingSenderId: env.VITE_messagingSenderId,
  appId: env.VITE_appId,
  measurementId: env.VITE_measurementId,
};

const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);

render(
  () => (
    <FirebaseProvider config={firebaseConfig}>
      <App />
    </FirebaseProvider>
  ),
  document.getElementById("root") as HTMLElement
);
