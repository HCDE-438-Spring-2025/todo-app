import { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import About from './pages/About/About';
import Todo from './pages/Todo/Todo';
import Settings from './pages/Settings/Settings';
import Navbar from './components/Navbar';
import './App.css';

function App() {
  const [todos, setTodos] = useState([]);
  const [darkTheme, setDarkTheme] = useState(false);

  // Theme toggling effect
  useEffect(() => {
    if (darkTheme) {
      document.body.classList.add('dark-theme');
    } else {
      document.body.classList.remove('dark-theme');
    }
  }, [darkTheme]);

  return (
    <Router>
      <div className="app">
        <Navbar darkTheme={darkTheme} setDarkTheme={setDarkTheme} />
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