import React from 'react';
import '../App.css';

function TaskItem({ task, startTask, stopTask }) {
  return (
    <li className="task-item">
      <span>{task.name}</span>
      <span>{task.time} seconds</span>
      {task.running ? (
        <button onClick={() => stopTask(task.id)}>Stop</button>
      ) : (
        <button onClick={() => startTask(task.id)}>Start</button>
      )}
    </li>
  );
}

export default TaskItem;
