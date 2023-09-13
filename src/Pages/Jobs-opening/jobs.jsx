import React from 'react';

import Hiring from "src/Components/Job-openings/Hiring/openings";
import Copywrite from 'src/Components/Job-openings/Copywriting/copywrite';
import Cybersecurity from 'src/Components/Job-openings/Cybesecurity/cybersecurity';
import Data from 'src/Components/Job-openings/Data-science/data';

const jobs = () => {
  return (
    <div>
        <Hiring/>
        <Copywrite/>
        <Cybersecurity/>
        <Data/>
    </div>
  )
}

export default jobs