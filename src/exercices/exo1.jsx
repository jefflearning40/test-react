

export default function listebouton() {
 
  const users = ["Nina", "Nino", "Allan", "Alvyn", "moi"];

 
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
