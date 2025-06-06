function StatusBox({status}){

    const colorPicker=()=>{
        if(status==='warning'){
            return "yellow";
        }else if (status==='error'){
            return "red";
        }else{
            return "green";
        }
    }

    return (
<button 
style={{
    background:colorPicker(),
}}>EXO 2 STYLE</button>


    );
};





export default  StatusBox;
