import { Routes, Route, Link } from 'react-router-dom';
import Topics from "./pages/topics/Topics.jsx";
import Board from "./pages/board/Board.jsx";

function App() {
  return (
    <div>
      <nav style={{ padding: '1rem', borderBottom: '1px solid #ccc' }}>
        <Link to="/">Topics</Link> | <Link to="/board">Board</Link>
      </nav>

      <Routes>
        <Route path="/" element={<Topics />} />
        <Route path="/board" element={<Board />} />
      </Routes>
    </div>
  );
}

export default App;
