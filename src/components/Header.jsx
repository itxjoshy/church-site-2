import { useState } from "react";
import { Menu, X, Facebook, Instagram, Youtube } from "lucide-react";
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
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: 20,
              marginLeft: 10,
            }}
          >
            <a
              href="https://youtube.com/@rccgfountainoflifescarboro8129?si=ndAK1NcQz-MhdKM3"
              target="_blank"
            >
              <Youtube size={20} />
            </a>
            <a
              href="https://www.instagram.com/rccg_fol_ca?igsh=MW1qNmRyeml2M2JoMQ%3D%3D&utm_source=qr"
              target="_blank"
            >
              <Instagram size={18} />
            </a>
            <a
              href="https://www.facebook.com/share/17tzAGCpfM/?mibextid=wwXIfr"
              target="_blank"
            >
              <Facebook size={19} />
            </a>
          </div>
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
            <div
              style={{
                display: "flex",
                alignItems: "center",
                width: "100%",
                justifyContent: "center",
                gap: 20,
                marginLeft: 10,
              }}
            >
              <a
                href="https://youtube.com/@rccgfountainoflifescarboro8129?si=ndAK1NcQz-MhdKM3"
                target="_blank"
              >
                <Youtube size={20} />
              </a>
              <a
                href="https://www.instagram.com/rccg_fol_ca?igsh=MW1qNmRyeml2M2JoMQ%3D%3D&utm_source=qr"
                target="_blank"
              >
                <Instagram size={18} />
              </a>
              <a
                href="https://www.facebook.com/share/17tzAGCpfM/?mibextid=wwXIfr"
                target="_blank"
              >
                <Facebook size={19} />
              </a>
            </div>
          </div>
        </nav>
      )}
    </header>
  );
};
