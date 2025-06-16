

function ListeBoutons1() {
  const messages = ["Bonjour", "Comment ça va ?", "Au revoir"];

  function handleClick(message) {
    alert(message);
  }

  return (
    <div>
      {messages.map((message, index) => (
        <button key={index} onClick={() => handleClick(message)}>
          Bouton {index + 1}
        </button>
      ))}
    </div>
  );
}

export default ListeBoutons1;
