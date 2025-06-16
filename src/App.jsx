import Compteur2 from "../compteur2";
import Compteur from "./compteur";
import Cours1 from "./cour1Grafikart"
import Counter from "./courpg";
import FormulaireSimple from "./formulaire1";
import InfosUtilisateur from "./formulaire2";
import SaisieClavier from "./touches";

 function App(){
return (
    <div>
 <Cours1/>
 <Compteur className="counter"/>
 <Compteur2/>
 <Counter/>
 <FormulaireSimple/>
 <InfosUtilisateur/>
 <SaisieClavier/>
</div>
);
 }
 export default App
