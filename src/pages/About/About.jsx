import { useEffect } from 'react';
import './About.css';

function About() {
  // Example of useEffect hook
  useEffect(() => {
    // This runs when the component mounts
    document.title = 'About - Todo App';
    
    // This cleanup function runs when the component unmounts
    return () => {
      document.title = 'Todo App';
    };
  }, []); // Empty dependency array means it only runs once on mount

  return (
    <div className="container about-container">
      <h1>About This App</h1>
      
      <div className="about-card">
        <h2>React Concepts Demonstrated</h2>
        
        <ul className="concept-list">
          <li>
            <strong>State Management:</strong> Using React's useState hook to manage todos
          </li>
          <li>
            <strong>Effect Hooks:</strong> Using useEffect for side effects like updating the page title
          </li>
          <li>
            <strong>Component Structure:</strong> Breaking UI into reusable components
          </li>
          <li>
            <strong>Props:</strong> Passing data and functions down to child components
          </li>
          <li>
            <strong>Multi-page Routing:</strong> Using React Router for navigation
          </li>
        </ul>
        
        <p className="about-description">
          This simple todo application demonstrates fundamental React concepts in a
          clean, maintainable structure. Each component is organized with its own
          styles and responsibilities.
        </p>
      </div>
    </div>
  );
}

export default About;