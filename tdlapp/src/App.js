import "./App.css";
import { useState } from "react";

function App() {
	const [toDonts, setToDonts] = useState([{ id: 101010101010, text: "Be productive", shamed: false, createdOn: new Date() }]);
	const [toDont, setToDont] = useState("");
	const [toDontId, setToDontId] = useState(0);

	const handleSubmit = (e) => {
		e.preventDefault();
		var newToDont = {
			id: toDontId,
			text: toDont,
			shamed: false,
			count: 0,
			createdOn: new Date(),
		};
		setToDontId(toDontId + 1);
		setToDonts([...toDonts, newToDont]);
		setToDont("");
	};
	const handleDelete = (index) => {
		const newToDonts = [...toDonts];
		newToDonts.splice(index, 1);
		setToDonts(newToDonts);
	};
	const handleShame = (id) => {
		const newToDonts = [...toDonts];
		newToDonts.map((toDont) => {
			if (toDont.id === id) {
				toDont.shamed = true;
			}
		});
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
						<li key={index} alt={toDont.id}>
							<div>
							{toDont.text}
							</div>
							<button onClick={() => handleDelete(index)}>Delete</button>
							<button onClick={() => handleShame(toDont.id)}>Shame</button>
						</li>
					))}
				</ul>
			</div>
			<div className="list">
				<h1>Wall of Shame</h1>
				<ul>
					{toDonts.map((toDont, index) => (
						<li key={index} alt={toDont.id}>
							{toDont.shamed ? (
								<div>
									{toDont.text}
									<br></br>
									{toDont.count}
								</div>
							) : (
								""
							)}
						</li>
					))}
				</ul>
			</div>
		</div>
	);
}
export default App;
