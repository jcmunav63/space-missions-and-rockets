import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getMissions } from '../redux/missions/missionsSlice';

const Profiledetails = () => {
  const dispatch = useDispatch();
  const { missions, joinedMissions } = useSelector((state) => state.missions);
  useEffect(() => {
    dispatch(getMissions());
  }, [dispatch]);

  const filteredMissions = missions.filter((mission) => joinedMissions
    .includes(mission.mission_id));

  return (
    <div className="myprofiledivs">
      <div className="divmissions">
        {filteredMissions.length === 0 ? (
          <div>
            <p className="boldtext">My Missions</p>
            <p className="normaltext">No missions joined!</p>
          </div>
        ) : (
          <div>
            <p className="boldtext">My Missions</p>
            <ul>
              {filteredMissions.map((mission) => (
                <li key={mission.mission_id}>{mission.mission_name}</li>
              ))}
            </ul>
          </div>
        )}
      </div>
      {/* <div className="divrockets">
        <div>
          <p className="boldtext">My Rockets</p>
          <p className="normaltext">No rockets reserved!</p>
        </div>
      </div> */}
    </div>
  );
};

export default Profiledetails;
