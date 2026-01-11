import { useState } from "react";
import { Menu, X } from "lucide-react";
import logo from "@/assets/logo.png";
import "./header.css";
const navLinks = [
  { label: "About", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Events", href: "#events" },
  { label: "Connect", href: "#connect" },
  { label: "Visit", href: "#visit" },
];

export const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="header">
      <div className="header-container">
        <a href="#" className="logo">
          <img src={logo} alt="" />
        </a>

        {/* Desktop Nav */}
        <nav className="nav-desktop">
          {navLinks.map((link) => (
            <a key={link.label} href={link.href} className="nav-link">
              {link.label}
            </a>
          ))}
          <button className="visit-button">Plan Your Visit</button>
        </nav>

        {/* Mobile Menu Toggle */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="menu-toggle"
          aria-label="Toggle menu"
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Nav */}
      {isOpen && (
        <nav className="nav-mobile">
          <div className="nav-mobile-links">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="nav-mobile-link"
              >
                {link.label}
              </a>
            ))}
            <Button className="visit-button-mobile">Plan Your Visit</Button>
          </div>
        </nav>
      )}
    </header>
  );
};
