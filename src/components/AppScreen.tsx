import { Component } from "solid-js";
import NavBar from "./NavBar";
import Content from "./Content";
import DeckPage from "./DeckPage";
import { Routes, Route } from "@solidjs/router";

export interface UserData {
  readonly data: {
    readonly emailVerified: boolean;
    readonly isAnonymous: boolean;
    readonly metadata: {
      readonly creationTime?: string;
      readonly lastSignInTime?: string;
    };
    readonly providerData: readonly {
      readonly displayName: string;
      readonly email: string;
      readonly phoneNumber: string;
      readonly photoURL: string;
      readonly providerId: string;
      readonly uid: string;
    }[];
    readonly refreshToken: string;
    readonly tenantId: string;
    readonly delete: () => Promise<void>;
    readonly getIdToken: (forceRefresh?: boolean) => Promise<string>;
    readonly getIdTokenResult: (
      forceRefresh?: boolean
    ) => Promise<import("firebase/auth").IdTokenResult>;
    readonly reload: () => Promise<void>;
    readonly toJSON: () => object;
    readonly displayName: string;
    readonly email: string;
    readonly phoneNumber: string;
    readonly photoURL: string;
    readonly providerId: string;
    readonly uid: string;
  };
}

const AppScreen: Component<UserData> = (data) => {
  const USER_DATA = data.data;

  return (
    <div class="flex flex-col">
      <NavBar name={USER_DATA.displayName} profile={USER_DATA.photoURL} />
      <Routes>
        <Route
          path="/"
          component={(<Content uid={USER_DATA.uid} />) as Component}
        ></Route>
        <Route
          path="/:uid/deck/:deckName"
          component={DeckPage as Component}
        ></Route>
      </Routes>
    </div>
  );
};
export default AppScreen;
