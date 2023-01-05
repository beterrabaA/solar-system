import React from 'react';
import PropTypes from 'prop-types';

function PlanetCard({ planetName, planetImage, classDet }) {
  return (
    <div className="planet-card">
      <img
        className={ `planet-image ${classDet}` }
        src={ planetImage }
        alt={ `Planeta ${planetName}` }
      />
      <p className="planet-name">
        {planetName}
      </p>
    </div>
  );
}

PlanetCard.propTypes = {
  planetName: PropTypes.string.isRequired,
  planetImage: PropTypes.string.isRequired,
  classDet: PropTypes.string.isRequired,
};

export default PlanetCard;
