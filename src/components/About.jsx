import { Heart, Users, BookOpen } from "lucide-react";
import "./about.css";

const values = [
  {
    icon: Heart,
    title: "Love",
    description:
      "We believe in the transformative power of God's unconditional love for all people.",
  },
  {
    icon: Users,
    title: "Community",
    description:
      "Life is meant to be shared. We grow stronger together as a family of faith.",
  },
  {
    icon: BookOpen,
    title: "Truth",
    description:
      "We are rooted in Scripture, seeking wisdom and guidance for everyday life.",
  },
];

export const About = () => {
  return (
    <section id="about" className="about">
      <div className="container about__container">
        <div className="about__header">
          <p className="about__eyebrow">Who We Are</p>
          <h2 className="about__title">A Family Church Rooted in Faith</h2>
          <p className="about__description">
            Fountain of life has been a place where people from all walks of
            life come to experience God's love, grow in their faith, and find
            meaningful connections with others.
          </p>
        </div>

        <div className="about__values">
          {values.map((value) => (
            <div key={value.title} className="about__value-card">
              <div className="about__value-icon">
                <value.icon size={28} />
              </div>
              <h3 className="about__value-title">{value.title}</h3>
              <p className="about__value-description">{value.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
