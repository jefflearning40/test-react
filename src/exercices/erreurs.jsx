export default function formulaire(){
    function handleSubmit(event){
        event.preventDefault();
        alert("Formulaire catched!")
    }
 return (
    <form onSubmit={handleSubmit}>
      <input type="text" />
      <button type="submit">Envoyer</button>
    </form>
  )
}
