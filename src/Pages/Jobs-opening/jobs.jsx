import React from 'react';

import Header from "src/Components/Job-openings/Header/Header";
import openings from 'src/Components/Job-openings/Hiring/openings';
const jobs = () => {
  return (
    <div>
      <Header />
      <openings />

    </div>
  )
}

export default jobs;