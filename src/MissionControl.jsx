import React, { useState } from 'react';
import MissionCard from "./MissionCard";
import MissionAction from "./MissionAction";
import MissionFilter from './MissionFilter';

const MissionControl = ({ initialMissions }) => {
  const [missions, setMissions] = useState(initialMissions);
  const [missionFilter, setMissionFilter] = useState('All');
  // in other words, this is what it would be set to: let missionFilter = 'Active' (in javascript)
  //cannot do this bc the component won't re-render as it will be listening to missionFilter throughout the DOM if
  //we did the regular JS 
  // missionFilter = 'All'
  // when you click on => setMissionFilter('Planned')
  // then => missionFilter = 'Planned'
  // when you click on => setMissionFilter('Active')
  // then => missionFilter = 'Active'

  function handleLaunch(missionId) {
    const copyMissions = [...missions];
    const missionElement = copyMissions.find(
      (mission) => mission.id === missionId
    );
    //missionElement will return a mission element that matches the mission id. once the mission element is returned
    //we must take the mission element and go into status and change status:completed to status:active when Launch button is 
    //clicked
    missionElement.status = "Active";
    setMissions(copyMissions);
  }
  function handleComplete(missionId) {
    const copyMissions = [...missions];
    const missionElement = copyMissions.find(
      (mission) => mission.id === missionId
    );
    missionElement.status = "Completed";
    setMissions(copyMissions);
  }

  let filteredMissions = [...missions];
  if (missionFilter !== 'All') {
    filteredMissions = missions.filter((mission) => (
      mission.status === missionFilter
    ));
  }

  return (
    <div className="mission-control">
      <MissionFilter setMissionFilter={setMissionFilter} />

      {filteredMissions.map((mission) => (
        <div className="mission" key={mission.id}>
          <MissionCard name={mission.name} crew={mission.crew} status={mission.status} />
          <MissionAction launch={() => handleLaunch(mission.id)} complete={() => handleComplete(mission.id)} />
        </div>
      ))}
    </div>
  );
};

export default MissionControl;
