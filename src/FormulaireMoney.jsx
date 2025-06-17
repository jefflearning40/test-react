import { useEffect, useState } from "react";

function FormulaireMoney() {
    const [currencyData,setCurrencyData] = useState([])
    const [result,setResult] = useState(null);
    useEffect(()=>{
        fetch("https://grippy.learn.pierre-godino.com/api/mock/react-converter")
        .then((response)=>{
            return response.json()
        })
        .then((data)=>{
         setCurrencyData(data.rates)
        })
        .catch(()=>{
          setResult("erreur de connexion API !")  
        } )
    },[])
   
      
  return (
    <>
      <div>
        <form>

          <label className="ammount">Ammount</label>
          <input type="text" name="Ammount" placeholder="ici.."  min="0" onChange={e=>setCurrencyData(e.target.value)}/>

          <label className="search">Search Currenty</label>
          <input type="text" name="Search Currenty" placeholder="ici..."/>
          <ul className="liste" >

            {currencyData.map((currency,index)=>{
                return <li key={index}>{currency.description} {currency.code} {currency.rate}</li>
            })}
          </ul>
          <div className="result">
            <p>{result}</p>
          </div>
        </form>      
      </div>
    </>             



  );
}
export default FormulaireMoney;



