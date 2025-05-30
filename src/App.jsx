import {useState} from "react"

function App(){

  const [count,setCount]=useState(0)

    const increment= () => {
      if (count<10){
    setCount(count +1)
  }
  }

  const decrement= ()=> {
    if (count>0){
    setCount(count-1)
  }
  }

  const raz= () => {
   setCount(0)
    
  }
  
  return <>

<p>Compteur :{count}</p>
<button onClick={increment}>Incrementer</button>
<button onClick={decrement}>decrementer</button>
<button onClick={raz}>RAZ</button>
  </>

}
export default App