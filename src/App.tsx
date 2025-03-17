import { useGameStore } from "./store/gameStore";
import "./styles/main.scss";

function App() {
  const { score, increaseScore } = useGameStore();

  return (
    <div className="app">
      <h1>Memory Game</h1>
      <div className="card">
        <button onClick={increaseScore}>Score: {score}</button>
      </div>
    </div>
  );
}

export default App;
