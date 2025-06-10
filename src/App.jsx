import './App.css';
import messages from './data/messages.json';
import ChatEntry from './components/ChatEntry';

const App = () => {
  return (
    <div id="App">
      <header>
        <h1>Application title</h1>
      </header>
      <main>
        <ChatEntry {...messages[0]} />
      </main>
    </div>
  );
};

export default App;
