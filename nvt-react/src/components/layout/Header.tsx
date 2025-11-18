import { useState } from "react";
import { NavLink } from "react-router-dom";

const Header = () => {
  const [mobileOpen, setMobileOpen] = useState(false);

  const toggleMobileMenu = () => {
    setMobileOpen((prev) => !prev);
  };

  const closeMobileMenu = () => {
    setMobileOpen(false);
  };

  const navLinkClass = ({ isActive }: { isActive: boolean }) =>
    isActive ? "nav-link active" : "nav-link";

  return (
    <header>
      <div className="logo">
        <NavLink to="/" className="logo-link" onClick={closeMobileMenu}>
          <img
            src="/images/logo_primary_optimized.svg"
            alt="New Venture Therapy Logo"
            id="header-logo"
          />
        </NavLink>
      </div>

      <nav className="nav-wrapper">
        <ul className="nav-links">
          <li>
            <NavLink to="/" end className={navLinkClass} onClick={closeMobileMenu}>
              Home
            </NavLink>
          </li>
          {/* About route can be added later if you build that page */}
          {/* <li>
            <NavLink to="/about" className={navLinkClass} onClick={closeMobileMenu}>
              About
            </NavLink>
          </li> */}
          <li>
            <NavLink
              to="/services"
              className={navLinkClass}
              onClick={closeMobileMenu}
            >
              Services
            </NavLink>
          </li>
          <li>
            {/* FAQs are on the home page, so we use an anchor */}
            <a href="/#FAQ-link" className="nav-link" onClick={closeMobileMenu}>
              FAQs
            </a>
          </li>
        </ul>
      </nav>

      <div className="book-now-desktop">
        <NavLink
          to="/contact"
          className="btn-book-now"
          onClick={closeMobileMenu}
        >
          Book Now
        </NavLink>
      </div>

      <div
        className="hamburger-menu"
        aria-label="Menu"
        role="button"
        tabIndex={0}
        onClick={toggleMobileMenu}
        onKeyDown={(e) => {
          if (e.key === "Enter" || e.key === " ") {
            e.preventDefault();
            toggleMobileMenu();
          }
        }}
      >
        <span></span>
        <span></span>
        <span></span>
      </div>

      <div
        className={
          mobileOpen ? "nav-links-mobile nav-open" : "nav-links-mobile"
        }
      >
        <ul>
          <li>
            <NavLink to="/" end className={navLinkClass} onClick={closeMobileMenu}>
              Home
            </NavLink>
          </li>
          {/* <li>
            <NavLink to="/about" className={navLinkClass} onClick={closeMobileMenu}>
              About
            </NavLink>
          </li> */}
          <li>
            <NavLink
              to="/services"
              className={navLinkClass}
              onClick={closeMobileMenu}
            >
              Services
            </NavLink>
          </li>
          <li>
            <a href="/#FAQ-link" className="nav-link" onClick={closeMobileMenu}>
              FAQs
            </a>
          </li>
          <li className="book-now-mobile">
            <NavLink
              to="/contact"
              className="btn-book-now"
              onClick={closeMobileMenu}
            >
              Book Now
            </NavLink>
          </li>
        </ul>
      </div>
    </header>
  );
};

export default Header;
