import React from 'react';
import { Line } from 'react-chartjs-2';

const Charts = ({ data }) => {
  const chartData = {
    labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4'],
    datasets: [
      {
        label: 'Happiness Score',
        data: data,
        fill: false,
        backgroundColor: 'blue',
        borderColor: 'blue',
        tension: 0.4, // smooth curve
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top',
      },
      tooltip: {
        callbacks: {
          label: (context) => `Happiness: ${context.raw}`,
        },
      },
    },
  };

  return <Line data={chartData} options={options} />;
};

export default Charts;
