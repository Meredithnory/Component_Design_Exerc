import React from 'react';

const MissionCard = ({ name, crew, status }) => {
  return (
    <div className="mission-card">
      <span className="name">{name}</span>
      <div className="information">
        <span>Status: {status}</span>
        <span>Crew: {crew.join(", ")}</span>
      </div>
    </div>
  );
};

export default MissionCard;
