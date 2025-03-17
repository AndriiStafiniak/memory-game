import { GameBoard } from "./components/GameBoard";
import { Stats } from "./components/Stats";
import { GameControls } from "./components/GameControls";
import "./styles/main.scss";

function App() {
  return (
    <div className="app">
      <h1>Memory Game</h1>
      <div className="game-container">
        <Stats />
        <GameBoard />
        <GameControls />
      </div>
    </div>
  );
}

export default App;
