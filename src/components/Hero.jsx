import heroImage from "@/assets/hero-church.jpg";
import { ChevronDown } from "lucide-react";
import "./hero.css";
export const Hero = () => {
  return (
    <section className="hero-section">
      {/* Background Image */}
      <div className="hero-img">
        <img src={heroImage} alt="Sunlit church sanctuary" />
        <div className="hero-overlay" />
      </div>

      {/* Content */}
      <div className="hero__content__container">
        <p className="hero__text" style={{ animationDelay: "0.2s" }}>
          Welcome Home To RCCG
        </p>

        <h1 className="hero__title" style={{ animationDelay: "0.4s" }}>
          Fountain <br />
          <span className="italic">Of Life</span>
        </h1>

        <p className="hero__subtitle" style={{ animationDelay: "0.6s" }}>
          Join us for worship every Sunday as we come together in faith, love,
          and community.
        </p>

        <div className="hero-buttons" style={{ animationDelay: "0.8s" }}>
          <button className="hero-button primary">Join Us Sunday</button>
          <button className="hero-button outline">Learn More</button>
        </div>

        {/* Service Times */}
        <div className="hero-services" style={{ animationDelay: "1s" }}>
          <div className="service">
            <p className="day">Sunday</p>
            <p className="time">9:00 & 11:00 AM</p>
          </div>
          <div className="divider" />
          <div className="service">
            <p className="day">Wednesday</p>
            <p className="time">7:00 PM</p>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <a
        href="#about"
        className="scroll-indicator"
        style={{ animationDelay: "1.2s" }}
      >
        <ChevronDown size={32} />
      </a>
    </section>
  );
};
