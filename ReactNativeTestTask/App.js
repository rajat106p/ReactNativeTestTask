import { NavigationContainer } from "@react-navigation/native";
import React from "react";
import Route from "./src/route";
import { Provider } from "react-redux";
import { store } from "./src/redux/store";

export default function App() {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Route />
      </NavigationContainer>
    </Provider>
  );
}
