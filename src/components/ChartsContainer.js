import React, { useState } from 'react';
import { useSelector } from 'react-redux';

import BarChart from './BarChart';
import AreaChart from './AreaChart';
import Wrapper from '../assets/wrappers/ChartsContainer';

const ChartsContainer = () => {
  const [bartChart, setBarChat] = useState(true);
  const { monthlyApplications: data } = useSelector((store) => store.allJobs);
  return (
    <Wrapper>
      <h4>Monthly Applications</h4>
      <button onClick={() => setBarChat(!bartChart)}>
        {bartChart ? 'Area Chart' : 'Bar Chart'}
      </button>
      {bartChart ? <BarChart data={data} /> : <AreaChart data={data} />}
    </Wrapper>
  );
};

export default ChartsContainer;