import PropTypes from "prop-types";
export const Header = ({ title, subtitle }) => {
  return (
    <header>
      <h1>{title}</h1>
      <p>{subtitle}</p>
    </header>
  );
};
Header.propTypes = {
  title: PropTypes.string,
  subtitle: PropTypes.string,
};
