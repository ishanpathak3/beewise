import { useState } from 'react';
import { NavLink, Link } from 'react-router-dom';

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen(prev => !prev);

  return (
    <header>
      <Link className="site-logo" to="/">#BeeWise</Link>

      <nav className={menuOpen ? 'open' : ''}>
        <NavLink to="/" end onClick={() => setMenuOpen(false)}>Home</NavLink>
        <NavLink to="/ph1" onClick={() => setMenuOpen(false)}>PH1</NavLink>
        <NavLink to="/ph2" onClick={() => setMenuOpen(false)}>PH2</NavLink>
        <NavLink to="/ph3" onClick={() => setMenuOpen(false)}>PH3</NavLink>
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
