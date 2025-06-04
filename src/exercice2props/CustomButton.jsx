export default function CustomButton(props){

    return (
       
        <button style={{
            color : props.color,
            background :props.background,
            border :props.border,
            margin:props.margin,
            borderRadius:"5px"
            }}>{props.text}</button>       
        
        
        
        
        
    )
}