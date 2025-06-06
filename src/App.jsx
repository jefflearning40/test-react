import Message from "./Message";

const App = () => (
  <div>
    <Message text="Information système" type="info" />
    <Message text="Alerte de sécurité" type="alert" />
    <Message text="Connexion réussie" type="success" />
  </div>
);

export default App;
