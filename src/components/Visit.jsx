import { MapPin, Phone, Mail, Clock } from "lucide-react";
import "./visit.css";

export const Visit = () => {
  return (
    <section id="visit" className="visit">
      <div className="container visit__container">
        <div className="visit__grid">
          {/* LEFT CONTENT */}
          <div>
            <p className="visit__eyebrow">Plan Your Visit</p>
            <h2 className="visit__title">
              We'd Love to <br />
              <span className="visit__title-italic">Meet You</span>
            </h2>
            <p className="visit__description">
              Whether you're new to faith or looking for a church home, you're
              welcome here. Come as you are—we'll save you a seat.
            </p>

            <div className="visit__contact-list">
              <div className="visit__contact-item">
                <div className="visit__contact-icon">
                  <MapPin size={20} />
                </div>
                <div>
                  <h4 className="visit__contact-label">Address</h4>
                  <p className="visit__contact-value">
                    510 Coronation Dr Unit 17
                    <br />
                    Scarborough, ON M1E 4X6, Canada
                  </p>
                </div>
              </div>

              <div className="visit__contact-item">
                <div className="visit__contact-icon">
                  <Clock size={20} />
                </div>
                <div>
                  <h4 className="visit__contact-label">Service Times</h4>
                  <p className="visit__contact-value">Sundays at 10 AM</p>
                </div>
              </div>

              <div className="visit__contact-item">
                <div className="visit__contact-icon">
                  <Phone size={20} />
                </div>
                <div>
                  <h4 className="visit__contact-label">Phone</h4>
                  <p className="visit__contact-value">+1 (289) 387-3964</p>
                </div>
              </div>

              <div className="visit__contact-item">
                <div className="visit__contact-icon">
                  <Mail size={20} />
                </div>
                <div>
                  <h4 className="visit__contact-label">Email</h4>
                  <p className="visit__contact-value">fol_rccg@yahoo.ca</p>
                </div>
              </div>
            </div>
          </div>

          {/* RIGHT MAP CARD */}
          <div className="visit__card visit__map-card">
            <iframe
              title="Church Location"
              src="https://www.google.com/maps?q=510+Coronation+Dr+Unit+17,+Scarborough,+ON+M1E+4X6,+Canada&output=embed"
              loading="lazy"
              allowFullScreen
            />
          </div>
        </div>
      </div>
    </section>
  );
};
