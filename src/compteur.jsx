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
<p>compteur :{count}</p>
 <div className="button-container">
<button onClick={increment}>Incremente</button>
<button onClick={decrement}>Decremente</button>
<button onClick={reset}>Reset</button>
</div>
</>
}
export default Compteur;