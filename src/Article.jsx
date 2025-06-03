export default function Article(props){
    return (
        <article>
            <h2>{props.title}</h2>
            <p>écrit par {props.author}</p>
        </article>
    );
}