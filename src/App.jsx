import React from "react";
import ReactDOM from "react-dom/client";
import Message from "./Message";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <div>
    <Message text="Information système" type="info" />
    <Message text="Alerte de sécurité" type="alert" />
    <Message text="Connexion réussie" type="success" />
  </div>
);