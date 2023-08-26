import PropTypes from "prop-types";
export const MentorCard = ({ mentorData, func }) => {
  return (
    <div className="card-details">
      <div className="group">
        <div className="mentor-image">
          <img src={mentorData.image} alt={mentorData.name} />
        </div>
        <h3>{mentorData.name}</h3>
      </div>
      <div className="group-details">
        <h4>
          <b>University:</b> {mentorData.university}
        </h4>
        <p>
          <b>Email:</b>{" "}
          <a href={`mailto:${mentorData.email}`}>{mentorData.email} </a>
        </p>
        <div className="research">
          <b> Research:</b>
          <ul>
            {mentorData.research.map((research, index) => {
              return <li key={index}>{research}</li>;
            })}
          </ul>
        </div>
        <div className="hobby">
          <p>
            <b>Hobby : </b>
            {mentorData.hobby}
          </p>
        </div>
        <button onClick={() => func(false)}>Close</button>
      </div>
    </div>
  );
};
MentorCard.propTypes = {
  mentorData: PropTypes.object.isRequired,
  func: PropTypes.func.isRequired,
};
