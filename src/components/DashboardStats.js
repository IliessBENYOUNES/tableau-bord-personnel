import React from 'react';
import '../App.css';

function DashboardStats({ tasks }) {
  const totalTasks = tasks.length;
  const totalTime = tasks.reduce((acc, task) => acc + task.time, 0);

  return (
    <div className="dashboard-stats">
      <p>Total Tasks: {totalTasks}</p>
      <p>Total Time: {totalTime} seconds</p>
    </div>
  );
}

export default DashboardStats;
