import React from 'react';

const MissionAction = ({ launch, complete }) => {

  return (
    <div className="mission-action">
      <button onClick={launch} className="button">Launch</button>
      <button onClick={complete} className="button">Complete</button>
    </div>
  );
};

export default MissionAction;
