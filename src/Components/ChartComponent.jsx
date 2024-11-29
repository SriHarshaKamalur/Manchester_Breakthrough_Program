import React, { useMemo } from 'react';
import { Line } from 'react-chartjs-2';

const ChartComponent = ({ data, categories, title }) => {
  const chartData = useMemo(() => ({
    labels: categories,
    datasets: [
      {
        label: title,
        data: data,
        fill: false,
        backgroundColor: 'blue',
        borderColor: 'blue',
        tension: 0.4, // smooth curve
      },
    ],
  }), [data, categories, title]);

  const options = useMemo(() => ({
    responsive: true,
    plugins: {
      legend: {
        position: 'top',
      },
      tooltip: {
        callbacks: {
          label: (context) => `${title}: ${context.raw}`,
        },
      },
    },
  }), [title]);

  return <Line data={chartData} options={options} />;
};

export default ChartComponent;