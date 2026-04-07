import React from "react";
import TaskItem from "./TaskItem";

const TaskList = ({ tasks, toggleTask, deleteTask, startEditTask }) => {
  if (tasks.length === 0) {
    return <p className="no-tasks">Chưa có công việc nào.</p>;
  }

  return (
    <div className="task-list">
      {tasks.map((task) => (
        <TaskItem
          key={task.id}
          task={task}
          toggleTask={toggleTask}
          deleteTask={deleteTask}
          startEditTask={startEditTask}
        />
      ))}
    </div>
  );
};

export default TaskList;