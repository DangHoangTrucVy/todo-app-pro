import { useEffect, useState } from "react";

function TaskForm({ addTask, editingTask, updateTask, cancelEdit }) {
  const [input, setInput] = useState("");

  useEffect(() => {
    if (editingTask) {
      setInput(editingTask.text);
    } else {
      setInput("");
    }
  }, [editingTask]);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!input.trim()) return;

    if (editingTask) {
      updateTask(input);
    } else {
      addTask(input);
    }

    setInput("");
  };

  return (
    <form className="task-form" onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Nhập công việc..."
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />

      <button type="submit">
        {editingTask ? "Cập nhật" : "Thêm"}
      </button>

      {editingTask && (
        <button type="button" className="cancel-btn" onClick={cancelEdit}>
          Hủy
        </button>
      )}
    </form>
  );
}

export default TaskForm;