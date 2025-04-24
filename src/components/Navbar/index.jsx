import { Link } from 'react-router-dom';

const Navbar = function Navbar() {
  return (
    <nav className="navbar">
        <div className="logo">Todo App</div>
        <ul className="nav-links">
            <li>
                <Link to="/">Home</Link>
            </li>
            <li>
                <Link to="/about">About</Link>
            </li>
            <li>
                <Link to="/settings">Settings</Link>
            </li>
        </ul>
    </nav>
  );
};

export default Navbar;