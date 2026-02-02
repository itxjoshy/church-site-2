import { User, UserRound, GraduationCap, Baby } from "lucide-react";
import "./connect.css";

const groups = [
  {
    icon: Baby,
    title: "Babies & Toddlers",
    description:
      "A safe, loving environment where our youngest children are cared for and nurtured during services.",
  },
  {
    icon: GraduationCap,
    title: "Teens",
    description:
      "A vibrant space for teens to grow in faith, build friendships, and learn how to live out God’s word.",
  },
  {
    icon: User,
    title: "Men",
    description:
      "A community where men grow together through fellowship, accountability, and spiritual development.",
  },
  {
    icon: UserRound,
    title: "Women",
    description:
      "A welcoming space for women to connect, grow spiritually, and support one another in faith and life.",
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
          <button>Connect With Us</button>
        </div>
      </div>
    </section>
  );
};
