import React from 'react';
import Title from './Title';
import PlanetCard from './PlanetCard';
import planets from '../data/planets';

function SolarSystem() {
  return (
    <div data-testid="solar-system">
      <Title headline="Planetas" />
      {planets
        .map((e) => (<PlanetCard
          planetName={ e.name }
          planetImage={ e.image }
          key={ e.name }
        />))}
    </div>
  );
}

export default SolarSystem;
