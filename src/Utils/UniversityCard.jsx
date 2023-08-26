import PropTypes from "prop-types";
export const UniversityCard = ({ name, location, image }) => {
  return (
    <div
      className="university-card"
      style={{ backgroundImage: `url(${image})` }}
    >
      <div className="back">
        <p>{location}</p>
      </div>
      <div className="front">
        <h3>{name}</h3>
      </div>
    </div>
  );
};

UniversityCard.propTypes = {
  name: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  image: PropTypes.string,
};
