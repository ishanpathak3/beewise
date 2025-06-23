import { useState } from 'react';
import { NavLink, Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import { signOut } from 'firebase/auth';
import { auth } from '../firebase/config';

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const { user } = useAuth();
  const navigate = useNavigate();

  const toggleMenu = () => setMenuOpen(prev => !prev);

  const handleLogout = () => {
    signOut(auth)
      .then(() => navigate('/'))
      .catch((err) => console.error('Logout failed:', err));
  };

  return (
    <header>
      <Link className="site-logo" to="/">#BeeWise</Link>

      <nav className={menuOpen ? 'open' : ''}>
        {user ? (
          <>
            <NavLink to="dashboard" end onClick={() => setMenuOpen(false)}>Dashboard</NavLink>
            <NavLink to="ph1" onClick={() => setMenuOpen(false)}>PH1</NavLink>
            <NavLink to="ph2" onClick={() => setMenuOpen(false)}>PH2</NavLink>
            <NavLink to="ph3" onClick={() => setMenuOpen(false)}>PH3</NavLink>
            <button onClick={handleLogout} className="logout-button">Logout</button>
          </>
        ) : (
          <NavLink to="/login" onClick={() => setMenuOpen(false)}>Login</NavLink>
        )}
      </nav>

      <button
        className="hamburger"
        onClick={toggleMenu}
        aria-label={menuOpen ? "Close menu" : "Open menu"}
        aria-expanded={menuOpen}
      >
        <span />
        <span />
        <span />
      </button>
    </header>
  );
}

export default Header;
