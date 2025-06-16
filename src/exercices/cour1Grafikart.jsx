const  todos=[
    'liste 1',
    'liste 2',
    'liste 3'
]


 function Cours1(){

 return (

        <div>
            <input type="text" />
            <Hello color="red">Hello, here is your menu</Hello>
       <ul>
        {todos.map(todo => (<li key={todo}>{todo}</li>))}
       </ul>
    
        </div>
    )
 }

 function Hello({color,children}){
    
    const props={
       id: 'monid',
       className:'maclass'
    }
    
    return (
        <h1 style={{color: color}}{...props}>{children} </h1>
    )
 }
 export default Cours1