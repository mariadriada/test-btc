import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import configureStore from "./redux/store";
import { Provider } from "react-redux";
import Coins from "./components/Coins";
import "./App.scss";

const store = configureStore();

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Switch>
          <Route exact path="/" exact component={Coins}></Route>
        </Switch>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
