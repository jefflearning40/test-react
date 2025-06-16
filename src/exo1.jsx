

export default function listebouton() {
  // Liste des utilisateurs
  const users = ["Alice", "Bob", "Charlie", "David", "Eve"];

  // Fonction pour afficher une alerte avec le nom de l'utilisateur cliqué
  const handleClick = (userName) => {
    alert(`Utilisateur sélectionné : ${userName}`);
  };

  return (
    <div>
      <h1>Liste des utilisateurs</h1>
      <div>
        {users.map((user, index) => (
          <button key={index} onClick={() => handleClick(user)}>
            {user}
          </button>
        ))}
      </div>
    </div>
  );
}
