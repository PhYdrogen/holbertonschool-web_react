import React from "react";
import ReactDOM from "react-dom";
import App from "./App/App.jsx";

ReactDOM.render(
  <React.StrictMode>
    <App isLoggedIn={true} displayDrawer={true} />
  </React.StrictMode>,
  document.getElementById("root"),
);
