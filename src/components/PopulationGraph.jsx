import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { AreaChart, XAxis, YAxis, CartesianGrid, Tooltip, Legend, Area, ResponsiveContainer } from 'recharts';

const PopulationAreaChart = () => {
  const [populationData, setPopulationData] = useState([])

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          'https://datausa.io/api/data?drilldowns=Nation&measures=Population'
        );
        setPopulationData(response.data.data);
      } catch (error) {
        console.error('Error fetching population data:', error);
      }
    };

    fetchData();
  }, []);

  const CustomTooltip = ({ active, payload, label }) => {
    if (active && payload && payload.length) {
      return (
        <div style={{ backgroundColor: '#8884d8', padding: '5px', border: '1px solid #ccc' }}>
          <p style={{ color: '#fff' }}>{`Nation: ${label}`}</p>
          <p style={{ color: '#fff' }}>{`Population: ${payload[0].value}`}</p>
        </div>
      );
    }

    return null;
  };

  return (
    <div style={{ width: '100%', height: 200 }}>
      <ResponsiveContainer>
        <AreaChart
          data={populationData}
          margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="Nation" stroke="#fff" />
          <YAxis dataKey="Population" stroke="#fff" />
          <Tooltip content={<CustomTooltip />} />
          <Legend />
          <Area type="monotone" dataKey="Population" stroke="#fff" fill="#8884d8" name="Population" />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  );
};

export default PopulationAreaChart;
