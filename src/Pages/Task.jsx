import { useState, useContext } from "react";
import Statuscard from "../Combonents/Statuscard";
import { UserContex } from "../App";

export default function TaskManagerPage() {
  const [newTask, setNewTask] = useState("");
  const [filter, setFilter] = useState("all");
  const { tasks, addTask, toggleTaskCompleted, deleteTask } = useContext(UserContex);

  const handleAddTask = () => {
    if (newTask.trim() === "") return;

    const today = new Date().toISOString().split("T")[0];

    addTask({
      id: Date.now(),
      title: newTask,
      date: today,
      level: "medium",
      completed: false,
    });

    setNewTask("");
  };

  const filteredTasks =
    filter === "completed"
      ? tasks.filter(task => task.completed)
      : tasks;

  const stats = {
    total: tasks.length,
    completed: tasks.filter(t => t.completed).length,
    pending: tasks.filter(t => !t.completed).length,
  };

  return (
    <div className="task-page">
      <h1 className="task-title">Task Manager</h1>
      <p className="task-subtitle">
        Organize and track your learning goals
      </p>

      {/* STATUS CARDS */}
      <div className="stats-grid">
        <Statuscard icon="🧾" name="Total Tasks" numb={stats.total} />
        <Statuscard icon="✅" name="Completed" numb={stats.completed} />
        <Statuscard icon="⌛" name="Pending" numb={stats.pending} />
      </div>

      {/* ADD TASK */}
      <div className="add-task-form">
        <input
          type="text"
          placeholder="Add a new task..."
          value={newTask}
          onChange={(e) => setNewTask(e.target.value)}
          className="task-input"
        />
        <button onClick={handleAddTask} className="task-btn">
          Add Task
        </button>
      </div>

      {/* FILTER */}
      <div className="filter-buttons">
        <button
          className={`filter ${filter === "all" ? "active" : ""}`}
          onClick={() => setFilter("all")}
        >
          All
        </button>
        <button
          className= {`filter ${filter === "completed" ? "active" : ""}`}
          onClick={() => setFilter("completed")}
        >
          Completed
        </button>
      </div>

      {/* TASK LIST */}
      <ul className="task-list">
        {filteredTasks.map(task => (
          <li key={task.id} className="task-card">

            <div className="task-left">
              <input
                type="checkbox"
                checked={task.completed}
                onChange={() => toggleTaskCompleted(task.id)}
              />

              <div className="task-content">
                <h3 className={task.completed ? "done task-title-text" : "task-title-text"}>
                  {task.title}
                </h3>

                <div className="task-meta">
                  <span>📅 {task.date}</span>

                  <span className={`priority ${task.level}`}>
                    {task.level}
                  </span>
                </div>
              </div>
            </div>

            <span
              className="delete-btn"
              onClick={() => deleteTask(task.id)}
            >
              ✕
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
}
