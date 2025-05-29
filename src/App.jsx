

const style = {color:'red' , backgroundColor:'black'}

function App() {


const todos=[
  'Présenter react',
  'Présenter le jsx',
  'Créer des Composants'
]  
 return <>
 
  <Title color="green">Mon Composant color </Title>
  <input type="text"></input>
  <p>
    Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum, pariatur optio! Soluta nostrum veritatis velit quam, maxime suscipit modi? A quasi autem illum atque, veritatis totam quisquam error quos ullam!
  </p>
  <ul>
    {todos.map(todos =>(<li key={todos}>{todos}</li>))}
  </ul>
  </>
}

function Title({color, hidden, children}){
  if (hidden){
    return null
  }
  const props={
    id: 'monid',
    className : 'maclass'
  }
  return <h1 style={{color:color}}{...props}>{children}</h1>
}

export default App
