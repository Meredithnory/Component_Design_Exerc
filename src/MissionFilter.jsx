//handle the different filters (all, Planned, Active, Completed) and creating the 
//buttons associated to the different filters 
import React from 'react';

const MissionFilter = ({ setMissionFilter }) => {

  return (
    <div className="mission-filter-box">
      <button onClick={() => setMissionFilter('All')} className='filter-button'>All</button>
      <button onClick={() => setMissionFilter('Planned')} className='filter-button'>Planned</button>
      <button onClick={() => setMissionFilter('Active')} className='filter-button'>Active</button>
      <button onClick={() => setMissionFilter('Completed')} className='filter-button'>Completed</button>
    </div>
  );
};

export default MissionFilter;