import React from "react";

const TaskItem = ({ task, toggleTask, deleteTask, startEditTask }) => {
  return (
    <div className="task-item">
      <div className="task-left">
        <input
          type="checkbox"
          checked={task.completed}
          onChange={() => toggleTask(task.id)}
        />

        <span className={task.completed ? "completed" : ""}>
          {task.text}
        </span>
      </div>

      <div className="task-actions">
        <button onClick={() => startEditTask(task)}>Sửa</button>
        <button className="delete-btn" onClick={() => deleteTask(task.id)}>
          Xóa
        </button>
      </div>
    </div>
  );
};

export default TaskItem;