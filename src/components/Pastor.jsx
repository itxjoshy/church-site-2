import React from "react";
import pastorImg from "@/assets/pastorimg.png";
import "./pastor.css";

export function Pastor() {
  return (
    <div className="container">
      <div className="pastors-section">
        <img src={pastorImg} alt="Pastor" />
        <div className="pastors-section-text">
          <h2>Meet our pastors</h2>
          <h1>Pastor Femi and Dcns Folu Ajimoko</h1>
          <p>
            Pastor Femi and Dcns. Folu Ajimoko serve together with a shared
            passion for teaching God’s Word and caring deeply for people. United
            in marriage and ministry, they are committed to helping individuals
            and families grow in their walk with Christ through sound teaching,
            prayer, and practical Christian living. Their leadership is marked
            by compassion, wisdom, and a heart for discipleship. They are
            devoted to building a strong, faith-filled, and welcoming church
            community where everyone feels valued, supported, and encouraged to
            fulfill their God-given purpose.
          </p>
        </div>
      </div>
    </div>
  );
}
