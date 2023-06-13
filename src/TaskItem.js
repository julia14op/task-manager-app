import React, { useState } from 'react';


const TaskItem = ({ task, deleteTask, markTaskCompleted }) => {
  const [reminder, setReminder] = useState(false);
  const [reminderTime, setReminderTime] = useState('');

  const handleDelete = () => {
    deleteTask(task.id);
  };

  const handleComplete = () => {
    markTaskCompleted(task.id);
  };

  const handleReminderChange = () => {
    setReminder(!reminder);
  };

  const handleReminderTimeChange = (e) => {
    setReminderTime(e.target.value);
  };

  return (
    <li className={`task-item ${task.completed ? 'completed' : ''}`}>
        {task.task}
      <div className="reminder-container">
        <label className="reminder-label">
          <input
            type="checkbox"
            checked={reminder}
            onChange={handleReminderChange}
            className="reminder-checkbox"
          />
          Set Reminder
        </label>
        {reminder && (
          <input
            type="time"
            value={reminderTime}
            onChange={handleReminderTimeChange}
            className="reminder-input"
          />
          )}
          </div>
       

      <div className="task-buttons">
        <button className="delete-button" onClick={handleDelete}>
          Delete
        </button>
        {!task.completed && (
          <button className="complete-button" onClick={handleComplete}>
            Completed
          </button>
        )}
      </div>
    </li>

  );
};

export default TaskItem;
