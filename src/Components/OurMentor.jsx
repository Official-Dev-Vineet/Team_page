import { useState } from "react";
import { mentor } from "../../Constant";
import { MentorCard } from "../Utils/MentorCard";
export const OurMentor = () => {
  const [m, sm] = useState(null);
  const [toggle, setToggle] = useState(false);
  function getToggle(data) {
    setToggle(data);
  }
  function activeMentor(m) {
    sm(m);
     setToggle(true);
  }
  return (
    <section>
      <div className="title">
        <h2>Our Mentor</h2>
        <div className="line"></div>
      </div>
      <div className="mentor-list">
        {mentor.map((m, index) => {
          return (
            <div
              key={index}
              className="mentor-card"
              onClick={() => activeMentor(m)}
            >
              <div className="mentor-image">
                <img src={m.image} alt={m.name} />
              </div>
              <div className="mentor-details">
                <h3>{m.name}</h3>
                <p>{m.university}</p>
              </div>
            </div>
          );
        })}
        {toggle ? (
          <MentorCard mentorData={m} func={getToggle} />
        ) : null}
      </div>
    </section>
  );
};
