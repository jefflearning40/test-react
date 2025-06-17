// Fonction qui affiche un bouton, qui, va venir faire une requpete réseau pour récupérer la blague.
// La fonction de requete réseau, est passée en props depuis le parent
const ChuckButton = ({ fetchJoke }) => {
  return <button onClick={fetchJoke}>{">Clique ici<"}</button>;
};

export default ChuckButton;