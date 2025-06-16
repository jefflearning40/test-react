import {useState} from "react"
import './style.css'
function Compteur(){
const [count, setCount] = useState(0)




const increment=() => {
setCount(count + 1)
}
const decrement=()=> {
    setCount(count - 1)
}
const reset=() =>{
    setCount(0)
}

return <>
<p>Temperature :{count} degré</p>
 <div className="button-container">
<button className="plus" onClick={increment}>Chaud</button>
<button className="moins" onClick={decrement}>Froid</button>
<button className="raz" onClick={reset}>Fermer</button>
</div>
</>
}

export default Compteur;
