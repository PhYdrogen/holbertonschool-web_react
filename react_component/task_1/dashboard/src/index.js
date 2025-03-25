import React from "react";
import ReactDOM from "react-dom";
import App from "./App/App.jsx";

function logOut() {
  alert('Logging you out');
}

ReactDOM.render(
  <App isLoggedIn={true} displayDrawer={true}  logOut={logOut()}/>,
  document.getElementById("root"),
);
