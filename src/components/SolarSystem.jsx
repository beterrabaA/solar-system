import React from 'react';
import Title from './Title';
import PlanetCard from './PlanetCard';
import planets from '../data/planets';

function SolarSystem() {
  return (
    <div data-testid="solar-system">
      <h1>Sistema Solar</h1>
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
