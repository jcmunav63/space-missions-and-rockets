import React from 'react';
import earth from '../assets/earth-italy.jpg';
import Profiledetails from './Profiledetails';

const Myprofile = () => (
  <div className="profile" style={{ backgroundImage: `url(${earth})` }}>
    <Profiledetails />
  </div>
);

export default Myprofile;
