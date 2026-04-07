import { useEffect, useMemo, useState } from "react";
import Header from "./components/Header";
import TaskForm from "./components/TaskForm";
import TaskList from "./components/TaskList";
import SearchBar from "./components/SearchBar";
import FilterBar from "./components/FilterBar";

function App() {
  const [tasks, setTasks] = useState(() => {
    const savedTasks = localStorage.getItem("tasks");
    return savedTasks ? JSON.parse(savedTasks) : [];
  });

  const [editingTask, setEditingTask] = useState(null);
  const [searchTerm, setSearchTerm] = useState("");
  const [filter, setFilter] = useState("all");

  const addTask = (text) => {
    const newTask = {
      id: Date.now(),
      text,
      completed: false,
    };

    setTasks([newTask, ...tasks]);
  };

  const toggleTask = (id) => {
    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, completed: !task.completed } : task
      )
    );
  };

  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };

  const startEditTask = (task) => {
    setEditingTask(task);
  };

  const updateTask = (newText) => {
    setTasks(
      tasks.map((task) =>
        task.id === editingTask.id ? { ...task, text: newText } : task
      )
    );
    setEditingTask(null);
  };

  const cancelEdit = () => {
    setEditingTask(null);
  };

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  const filteredTasks = useMemo(() => {
    let result = tasks;

    if (filter === "active") {
      result = result.filter((task) => !task.completed);
    } else if (filter === "completed") {
      result = result.filter((task) => task.completed);
    }

    if (searchTerm.trim()) {
      result = result.filter((task) =>
        task.text.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }

    return result;
  }, [tasks, filter, searchTerm]);

  return (
    <div className="app">
      <div className="container">
        <Header />

        <TaskForm
          addTask={addTask}
          editingTask={editingTask}
          updateTask={updateTask}
          cancelEdit={cancelEdit}
        />

        <SearchBar searchTerm={searchTerm} setSearchTerm={setSearchTerm} />

        <FilterBar filter={filter} setFilter={setFilter} />

        <TaskList
          tasks={filteredTasks}
          toggleTask={toggleTask}
          deleteTask={deleteTask}
          startEditTask={startEditTask}
        />
      </div>
    </div>
  );
}

export default App;