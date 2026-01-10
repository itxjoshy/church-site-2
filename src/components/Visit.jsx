import { MapPin, Phone, Mail, Clock } from "lucide-react";
import "./visit.css";

export const Visit = () => {
  return (
    <section id="visit" className="visit">
      <div className="container visit__container">
        <div className="visit__grid">
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
                    123 Faith Avenue, Grace Valley, CA 90210
                  </p>
                </div>
              </div>

              <div className="visit__contact-item">
                <div className="visit__contact-icon">
                  <Clock size={20} />
                </div>
                <div>
                  <h4 className="visit__contact-label">Service Times</h4>
                  <p className="visit__contact-value">
                    Sundays at 9:00 AM & 11:00 AM
                  </p>
                </div>
              </div>

              <div className="visit__contact-item">
                <div className="visit__contact-icon">
                  <Phone size={20} />
                </div>
                <div>
                  <h4 className="visit__contact-label">Phone</h4>
                  <p className="visit__contact-value">(555) 123-4567</p>
                </div>
              </div>

              <div className="visit__contact-item">
                <div className="visit__contact-icon">
                  <Mail size={20} />
                </div>
                <div>
                  <h4 className="visit__contact-label">Email</h4>
                  <p className="visit__contact-value">
                    hello@gracecommunity.church
                  </p>
                </div>
              </div>
            </div>

            <button className="btn btn-primary btn-lg">
              Plan Your First Visit
            </button>
          </div>

          <div className="visit__card">
            <h3 className="visit__card-title">What to Expect</h3>
            <div className="visit__steps">
              <div className="visit__step">
                <span className="visit__step-number">1</span>
                <div>
                  <h4 className="visit__step-title">Warm Welcome</h4>
                  <p className="visit__step-description">
                    Friendly greeters will help you find your way and answer any
                    questions.
                  </p>
                </div>
              </div>

              <div className="visit__step">
                <span className="visit__step-number">2</span>
                <div>
                  <h4 className="visit__step-title">Inspiring Worship</h4>
                  <p className="visit__step-description">
                    Contemporary and traditional music that uplifts the soul.
                  </p>
                </div>
              </div>

              <div className="visit__step">
                <span className="visit__step-number">3</span>
                <div>
                  <h4 className="visit__step-title">Relevant Teaching</h4>
                  <p className="visit__step-description">
                    Biblical messages that apply to your everyday life.
                  </p>
                </div>
              </div>

              <div className="visit__step">
                <span className="visit__step-number">4</span>
                <div>
                  <h4 className="visit__step-title">Kids Cared For</h4>
                  <p className="visit__step-description">
                    Safe, engaging programs for children of all ages.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
