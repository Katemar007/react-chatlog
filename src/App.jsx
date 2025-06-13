import './App.css';
import entriesData from './data/messages.json';
import ChatLog from './components/ChatLog';
import { useState } from 'react';

const App = () => {
	const [entries, setEntries] = useState(entriesData);
	const toggleLike = (id) => {
		const updatedEntries = entries.map(entry => {
			if (entry.id === id) {
				return { ...entry, liked: !entry.liked } ;
			} else{
				return entry;
			}
		});
		setEntries(updatedEntries);
	};
	const totalLikes = entries.filter((entry) => entry.liked).length;

	return (
		<div id="App">
			<header>
				<h1>Chat between {entries[0].sender} and {entries[1].sender}</h1>
			</header>
			<section id="heartWidget"className="widget">{totalLikes}❤️{totalLikes !== 1 ? 's' : ''}</section>
			<main>
				<ChatLog entries={entries} onToggleLike={toggleLike} />
			</main>
		</div>
	);
};

export default App;
