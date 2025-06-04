

export default function ProductCard(props) {
    return (
        <div>
            <h2>{props.nom}</h2>
            <p>Prix {props.prix} €</p>
            <p>{props.description}</p>
        </div>
    );
}