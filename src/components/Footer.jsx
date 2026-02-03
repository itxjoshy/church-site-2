import { Facebook, Instagram, Youtube } from "lucide-react";
import "./footer.css";

const links = {
  about: [
    { label: "About", href: "#about" },
    { label: "Services", href: "#services" },
    { label: "Events", href: "#events" },
    { label: "Connect", href: "#connect" },
    { label: "Visit", href: "#visit" },
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
              <a
                href="https://www.facebook.com/share/17tzAGCpfM/?mibextid=wwXIfr"
                className="footer__social-link"
                aria-label="Facebook"
              >
                <Facebook size={18} />
              </a>
              <a
                href="https://www.instagram.com/rccg_fol_ca?igsh=MW1qNmRyeml2M2JoMQ%3D%3D&utm_source=qr"
                className="footer__social-link"
                aria-label="Instagram"
              >
                <Instagram size={18} />
              </a>
              <a
                href="https://youtube.com/@rccgfountainoflifescarboro8129?si=ndAK1NcQz-MhdKM3"
                className="footer__social-link"
                aria-label="YouTube"
              >
                <Youtube size={18} />
              </a>
            </div>
          </div>

          <div>
            <h4 className="footer__column-title">Links</h4>
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
            <h4 className="footer__column-title">Contact</h4>
            <ul className="footer__links">
              <li>
                <a
                  href="https://www.google.com/maps?sca_esv=7da175bd9b925cd1&output=search&q=510+Coronation+Dr+Unit+17+Scarborough,+ON+M1E+4X6,+Canada&source=lnms&fbs=ADc_l-aN0CWEZBOHjofHoaMMDiKpUrv6YeyJhXfuYqj4Fj6c1SIV4w5e5qANUAPGe3KAH5w2gmh0dDZ_xEy4MjbkwIiDMGHJlMq2O0QTw_sTYWkf5gRCtQt6LjrTXfG2AWvRdE_13HmnAWIGeOrj4do7_lvnhF_ckj34PW7NPgHwMgHRvLq4PKfANfFXQg0nIMS26_kM4IsvHgdPvg8fJPBsXDHz-l5mZA&entry=mc&ved=1t:200715&ictx=111"
                  className="footer__link"
                  target="_blank"
                >
                  510 Coronation Dr Unit 17 Scarborough,
                  <br /> ON M1E 4X6, Canada
                </a>
              </li>
              <li>
                <a href="tel:+2348012345678" className="footer__link">
                  (123) 456-7890
                </a>
              </li>
              <li>
                <a href="mailto:fol_rccg@yahoo.ca" className="footer__link">
                  fol_rccg@yahoo.ca
                </a>
              </li>
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
