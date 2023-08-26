import PropTypes from "prop-types";
export const AdviserCard = ({ image, name }) => {
  return (
    <div className="adviser-card">
      <div className="adviser-image">
        <img src={image} alt={name} />
      </div>
      <div className="adviser-details">
        <h3>{name}</h3>
        <button>Message him now</button>
      </div>
    </div>
  );
};
AdviserCard.propTypes = {
  image: PropTypes.string,
  name: PropTypes.string,
};
