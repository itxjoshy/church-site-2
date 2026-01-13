import { Facebook, Instagram, Youtube } from "lucide-react";
import "./footer.css";

const links = {
  about: [
    { label: "Our Story", href: "#" },
    { label: "Leadership", href: "#" },
    { label: "Beliefs", href: "#" },
    { label: "Careers", href: "#" },
  ],
  connect: [
    { label: "Small Groups", href: "#" },
    { label: "Serve", href: "#" },
    { label: "Give", href: "#" },
    { label: "Contact", href: "#" },
  ],
  resources: [
    { label: "Sermons", href: "#" },
    { label: "Blog", href: "#" },
    { label: "Events", href: "#" },
    { label: "Newsletter", href: "#" },
  ],
};

export const Footer = () => {
  return (
    <footer className="footer">
      <div className="container footer__container">
        <div className="footer__grid">
          <div className="footer__brand">
            <h3 className="footer__logo">Fountain Of Life</h3>
            <p className="footer__tagline">
              A place where everyone belongs. Come experience the love of Christ
              in a welcoming community.
            </p>
            <div className="footer__social">
              <a href="#" className="footer__social-link" aria-label="Facebook">
                <Facebook size={18} />
              </a>
              <a
                href="#"
                className="footer__social-link"
                aria-label="Instagram"
              >
                <Instagram size={18} />
              </a>
              <a href="#" className="footer__social-link" aria-label="YouTube">
                <Youtube size={18} />
              </a>
            </div>
          </div>

          <div>
            <h4 className="footer__column-title">About</h4>
            <ul className="footer__links">
              {links.about.map((link) => (
                <li key={link.label}>
                  <a href={link.href} className="footer__link">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="footer__column-title">Connect</h4>
            <ul className="footer__links">
              {links.connect.map((link) => (
                <li key={link.label}>
                  <a href={link.href} className="footer__link">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="footer__column-title">Resources</h4>
            <ul className="footer__links">
              {links.resources.map((link) => (
                <li key={link.label}>
                  <a href={link.href} className="footer__link">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="footer__bottom">
          <p className="footer__copyright">
            © 2026 Fountain Of Life. All rights reserved.
          </p>
          <div className="footer__legal">
            <a href="#" className="footer__legal-link">
              Privacy
            </a>
            <a href="#" className="footer__legal-link">
              Terms
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};
