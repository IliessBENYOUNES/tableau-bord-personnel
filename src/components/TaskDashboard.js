import React from 'react';
import TaskItem from './TaskItem';
import DashboardStats from './DashboardStats';
import '../App.css';

function TaskDashboard({ tasks, startTask, stopTask }) {
  return (
    <div className="task-dashboard">
      <h2>Task Dashboard</h2>
      <DashboardStats tasks={tasks} />
      <ul>
        {tasks.map((task) => (
          <TaskItem key={task.id} task={task} startTask={startTask} stopTask={stopTask} />
        ))}
      </ul>
    </div>
  );
}

export default TaskDashboard;
