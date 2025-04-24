import { useState, useEffect } from 'react';
import './Settings.css';

function Settings({ todos, setTodos }) {
  // State for theme preference
  const [darkMode, setDarkMode] = useState(false);
  
  // State for auto-save preference
  const [autoSave, setAutoSave] = useState(true);
  
  // Load preferences from localStorage when component mounts
  useEffect(() => {
    const savedDarkMode = localStorage.getItem('darkMode') === 'true';
    const savedAutoSave = localStorage.getItem('autoSave') !== 'false'; // Default to true
    
    setDarkMode(savedDarkMode);
    setAutoSave(savedAutoSave);
  }, []);
  
  // Save preferences to localStorage whenever they change
  useEffect(() => {
    localStorage.setItem('darkMode', darkMode);
    localStorage.setItem('autoSave', autoSave);
    
    // This would apply the dark mode to the body in a real application
    // document.body.classList.toggle('dark-mode', darkMode);
  }, [darkMode, autoSave]);
  
  // Clear all todos function
  const clearAllTodos = () => {
    if (window.confirm('Are you sure you want to delete all todos?')) {
      setTodos([]);
    }
  };
  
  return (
    <div className="container settings-container">
      <h1>Settings</h1>
      
      <div className="settings-card">
        <div className="setting-item">
          <div className="setting-header">
            <h3>Dark Mode</h3>
            <label className="switch">
              <input
                type="checkbox"
                checked={darkMode}
                onChange={() => setDarkMode(!darkMode)}
              />
              <span className="slider"></span>
            </label>
          </div>
          <p className="setting-description">
            Enable dark mode for better visibility in low-light environments
            (Demo only - not fully implemented)
          </p>
        </div>
        
        <div className="setting-item">
          <div className="setting-header">
            <h3>Auto-Save</h3>
            <label className="switch">
              <input
                type="checkbox"
                checked={autoSave}
                onChange={() => setAutoSave(!autoSave)}
              />
              <span className="slider"></span>
            </label>
          </div>
          <p className="setting-description">
            Automatically save todos to browser storage
            (Demo only - not fully implemented)
          </p>
        </div>
        
        <div className="danger-zone">
          <h3>Danger Zone</h3>
          <button 
            className="clear-button"
            onClick={clearAllTodos}
            disabled={todos.length === 0}
          >
            Clear All Todos ({todos.length})
          </button>
        </div>
      </div>
    </div>
  );
}

export default Settings;