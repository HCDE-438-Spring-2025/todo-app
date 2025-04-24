import { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import About from './pages/About/About';
import Todo from './pages/Todo/Todo';
import Settings from './pages/Settings/Settings';
import Navbar from './components/Navbar';
import './App.css';

function App() {
  const [todos, setTodos] = useState([]);

  return (
    <Router>
      <div className="app">
        <Navbar />
        <Routes>
          <Route path="/" element={<Todo todos={todos} setTodos={setTodos}/>} />
          <Route path="/about" element={<About />} />
          <Route path="/settings" element={<Settings todos={todos} setTodos={setTodos} />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;