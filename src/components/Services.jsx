import { Clock, MapPin, Music, Baby, Church } from "lucide-react";
import "./services.css";
import { chai } from "globals";

const services = [
  {
    day: "Sunday Morning",
    times: ["10:00 AM"],
    description: "Traditional worship with contemporary elements",
    features: ["Live Worship", "Sunday Service"],
    icons: [Music, Church],
  },
  {
    day: "Wednesday Evening - online",
    times: ["7:00 PM"],
    description: "Online Prayer Meetings",
    features: ["Small Groups", "Youth Ministry"],
    icons: [Clock, Church],
  },
  {
    day: "Friday Evening - in-church and online",
    times: ["7:00 PM"],
    description: "Bible Study",
    features: ["Small Groups", "Youth Ministry"],
    icons: [Clock, Church],
  },
];

export const Services = () => {
  return (
    <section id="services" className="services">
      <div className="container services__container">
        <div className="services__header">
          <p className="services__eyebrow">Worship With Us</p>
          <h2 className="services__title">Service Times</h2>
          <p className="services__description">
            Whether you're joining us for the first time or have been part of
            our family for years, there's always a place for you.
          </p>
        </div>

        <div className="services__grid">
          {services.map((service) => (
            <div key={service.day} className="services__card">
              <h3 className="services__card-title">{service.day}</h3>
              <div className="services__card-times">
                {service.times.map((time) => (
                  <span key={time} className="services__card-time">
                    <Clock size={16} />
                    {time}
                  </span>
                ))}
              </div>
              <p className="services__card-description">
                {service.description}
              </p>
              <div className="services__card-features">
                {service.features.map((feature, idx) => {
                  const Icon = service.icons[idx];
                  return (
                    <span key={feature} className="services__card-feature">
                      <Icon size={14} />
                      {feature}
                    </span>
                  );
                })}
              </div>
            </div>
          ))}
        </div>

        <div className="services__location">
          <div className="services__location-inner">
            <MapPin size={18} className="services__location-icon" />
            <span>
              510 Coronation Dr Unit 17 Scarborough, ON M1E 4X6, Canada
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};
