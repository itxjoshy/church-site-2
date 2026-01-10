import { Users, HandHeart, GraduationCap, Heart } from "lucide-react";
import "./connect.css";

const groups = [
  {
    icon: Users,
    title: "Small Groups",
    description:
      "Connect with others in a smaller, more intimate setting for study and fellowship.",
  },
  {
    icon: HandHeart,
    title: "Serve",
    description:
      "Use your gifts and talents to make a difference in our church and community.",
  },
  {
    icon: GraduationCap,
    title: "Classes",
    description:
      "Grow in your faith through Bible studies, workshops, and discipleship courses.",
  },
  {
    icon: Heart,
    title: "Care",
    description:
      "Find support through our pastoral care, prayer ministry, and support groups.",
  },
];

export const Connect = () => {
  return (
    <section id="connect" className="connect">
      <div className="container connect__container">
        <div className="connect__header">
          <p className="connect__eyebrow">Get Involved</p>
          <h2 className="connect__title">Find Your Place</h2>
          <p className="connect__description">
            We believe everyone has a place here. Discover how you can connect,
            grow, and make a difference.
          </p>
        </div>

        <div className="connect__grid">
          {groups.map((group) => (
            <div key={group.title} className="connect__card">
              <div className="connect__card-icon">
                <group.icon size={24} />
              </div>
              <h3 className="connect__card-title">{group.title}</h3>
              <p className="connect__card-description">{group.description}</p>
            </div>
          ))}
        </div>

        <div className="connect__cta">
          <button className="btn btn-primary btn-lg">Connect With Us</button>
        </div>
      </div>
    </section>
  );
};
