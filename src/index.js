import React from "react";
import ReactDOM from "react-dom";
import App from "./App.jsx";
import StateProvider from "./providers/StateProvider";
import { BrowserRouter } from "react-router-dom";

const start = () => {
  global.Buffer = function () {};
  global.Buffer.isBuffer = () => false;
  ReactDOM.render(
    <BrowserRouter>
      <StateProvider>
        <App />
      </StateProvider>
    </BrowserRouter>,
    document.getElementById("root")
  );
};
start()
