import "./App.css";
import { useState } from "react";

function App() {
	const [toDonts, setToDonts] = useState([]);
	const [toDont, setToDont] = useState("");

	const handleSubmit = (e) => {
		e.preventDefault();
		setToDonts([...toDonts, toDont]);
		setToDont("");
	};

	const handleDelete = (index) => {
		const newToDonts = [...toDonts];
		newToDonts.splice(index, 1);
		setToDonts(newToDonts);
	};
	return (
		<div className="App">
			<div>
				<h1>To-Don't List</h1>
				<p>
					Ever need a constant reminder NOT to do something??<br></br>
					<br></br>
				</p>
				<h3>well now you can!</h3>
				<p>
					just type in the box below and click the button to add it to the list
				</p>
				<p>
					if you do this item, click the shame button to add a counter to the
					item and add it to the wall of shame.
				</p>
				<p>
					if you no longer need to be reminded not to do this item, click the
					delete button to remove it from the list
				</p>
				{/* <a href="">To-Don't list</a> */}
				<br></br>
				{/* <a href="">Wall of Shame</a> */}
				<br></br>
				<br></br>
				<form onSubmit={handleSubmit}>
					<input
						type="text"
						value={toDont}
						onChange={(e) => setToDont(e.target.value)}
					/>
					<button type="submit">Add to list</button>
				</form>
				<ul>
					{toDonts.map((toDont, index) => (
						<li key={index}>
							{toDont}
							<button onClick={() => handleDelete(index)}>Delete</button>
						</li>
					))}
				</ul>
			</div>
			{/* <div className="list">
				<h2>My To-Don't list</h2>
				<ul className="home-list">
					<li>Make silly apps</li>
					<li>be cool</li>
					<li>use my time efficiently</li>
					<li>be productive</li>
				</ul>
			</div> */}
		</div>
	);
}
export default App;
