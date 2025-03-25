import React from "react";
import ReactDOM from "react-dom";
import App from "./App/App.jsx";

ReactDOM.render(
  <App isLoggedIn={true} displayDrawer={true} />,
  document.getElementById("root"),
);
