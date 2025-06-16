import { useState } from 'react';

function InfosUtilisateur() {
    const [prenom, setPrenom] = useState("");
    const [age, setAge] = useState("");

    return (
        <div>
            <label>Prénom</label>
            <input type="text" value={prenom} onChange={e => setPrenom(e.target.value)} />

            <label>Âge</label>
                  <input type="number" value={age} onChange={e => setAge(e.target.value)} />

            <p>Bonjour {prenom}, vous avez {age} ans</p>
        </div>
    );
}

export default InfosUtilisateur;
