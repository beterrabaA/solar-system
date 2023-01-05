import React from 'react';
import Title from './Title';
import MissionCard from './MissionCard';
import missions from '../data/missions';

function Missions() {
  return (
    <div data-testid="missions">
      <Title headline="Missões" />
      {missions
        .map((e) => (<MissionCard
          name={ e.name }
          year={ e.year }
          country={ e.country }
          destination={ e.destination }
          key={ e.name }
        />))}
    </div>
  );
}

export default Missions;
