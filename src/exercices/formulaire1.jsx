import { useState } from 'react';

function FormulaireSimple() {
    const [prenom, setPrenom] = useState("");

    function handleChange(event) {
        setPrenom(event.target.value);
    }

    return (
        <div>
            <label>Votre prénom :</label>
            <input type="text" value={prenom} onChange={handleChange} />
            <p>Bonjour, {prenom}</p>
        </div>
    );
}

export default FormulaireSimple;
