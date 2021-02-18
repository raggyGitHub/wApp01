import React from "react";
import PropTypes from "prop-types";
import "./styles.css";

// Destructuring city = props.city
//const { city } = props;

const Location = ({ city }) => (
  <div className="locationContainer">
    <h1>{city}</h1>
  </div>
);

Location.propTypes = {
  city: PropTypes.string.isRequired,
};

export default Location;
