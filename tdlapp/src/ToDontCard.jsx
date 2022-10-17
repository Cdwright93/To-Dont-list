import "./App.css";

const cryingEmoji = "😭";
const ToDontCard = (props) => {
    return (
        <div className="card">
        <h3>{props.toDont.text}</h3>
        {props.toDont.shamed ? "❌" : "✅   keep it up!"}
        {props.toDont.shamed ? "Shame Count: " + props.toDont.count : null}
        {[...Array(props.toDont.count)].map((e, i) => cryingEmoji)}
        <br />
        <button onClick={() => props.handleDelete(props.index)}>Delete</button>
        <button onClick={() => props.handleShame(props.toDont.id)}>Shame</button>
        </div>
    );
};

export default ToDontCard;