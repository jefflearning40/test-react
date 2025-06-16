import React from 'react';

function SaisieClavier() {
  function handleKeyDown(event) {
    console.log('Touche pressée :', event.key);
    console.log('Code ASCII :', event.key.charCodeAt(0));

    if (event.key === "Enter") {
      alert("Vous avez validé !");
    } else if (event.key === " ") {
      alert("Vous avez espacé !");
    }
  }

  return (
    <input
      type="text"
      onKeyDown={handleKeyDown}
      placeholder="Tapez quelque chose"
    />
  );
}

export default SaisieClavier;
