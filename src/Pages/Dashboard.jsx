import DashboardInfo from "../Combonents/DashboardInfo";
import Statuscard from "../Combonents/Statuscard";
import { useContext } from "react";
import { UserContex } from "../App";

function Dashboard() {
  const { user, enrolledCourses, tasks, toggleTaskCompleted, deleteTask } = useContext(UserContex);

  if (!user) {
    return <h2>Loading...</h2>;
  }

  const completedTasks = tasks.filter(t => t.completed).length;
  const pendingTasks = tasks.filter(t => !t.completed).length;

  const statusData = [
    { icon: "📚", name: "Course Enrolled", numb: enrolledCourses.length.toString() },
    { icon: "✅", name: "Tasks Finished", numb: completedTasks.toString() },
    { icon: "🔥", name: "Current Streak", numb: "1" },
    { icon: "📆", name: "Upcoming", numb: pendingTasks.toString() },
  ];

  return (
    <div>
      <DashboardInfo username={user.email.split("@")[0]} />

      <div className="Statusgrid">
        {statusData.map((status, index) => (
          <Statuscard
            key={index}
            icon={status.icon}
            name={status.name}
            numb={status.numb}
          />
        ))}
      </div>

      {/* ENROLLED COURSES SECTION */}
      {enrolledCourses.length > 0 && (
        <div style={{ marginTop: "40px" }}>
          <h2 style={{ marginBottom: "20px" }}>📚 Your Enrolled Courses</h2>
          <div style={{ 
            display: "grid", 
            gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))", 
            gap: "20px" 
          }}>
            {enrolledCourses.map(course => (
              <div key={course.id} style={{
                border: "1px solid #ddd",
                borderRadius: "8px",
                padding: "15px",
                backgroundColor: "#f9f9f9",
              }}>
                <img src={course.image} alt={course.title} style={{ 
                  width: "100%", 
                  height: "150px", 
                  objectFit: "cover",
                  borderRadius: "5px"
                }} />
                <h3 style={{ marginTop: "10px" }}>{course.title}</h3>
                <p style={{ color: "#666", fontSize: "14px" }}>{course.description}</p>
                <span style={{ 
                  display: "inline-block", 
                  backgroundColor: "#4CAF50", 
                  color: "white",
                  padding: "5px 10px",
                  borderRadius: "20px",
                  fontSize: "12px",
                  marginTop: "10px"
                }}>✓ Enrolled</span>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* TASKS SECTION */}
      {tasks.length > 0 && (
        <div style={{ marginTop: "40px" }}>
          <h2 style={{ marginBottom: "20px" }}>📝 Recent Tasks</h2>
          <ul style={{ listStyle: "none", padding: 0 }}>
            {tasks.slice(0, 5).map(task => (
              <li key={task.id} style={{
                display: "flex",
                alignItems: "center",
                padding: "10px 15px",
                marginBottom: "10px",
                backgroundColor: task.completed ? "#f0f0f0" : "#fff",
                border: "1px solid #ddd",
                borderRadius: "5px",
              }}>
                <input
                  type="checkbox"
                  checked={task.completed}
                  onChange={() => toggleTaskCompleted(task.id)}
                  style={{ marginRight: "15px", cursor: "pointer", width: "18px", height: "18px" }}
                />
                <div style={{ flex: 1 }}>
                  <h4 style={{ 
                    margin: 0, 
                    textDecoration: task.completed ? "line-through" : "none",
                    color: task.completed ? "#999" : "#000"
                  }}>
                    {task.title}
                  </h4>
                  <small style={{ color: "#666" }}>📅 {task.date}</small>
                </div>
                <span
                  onClick={() => deleteTask(task.id)}
                  style={{ 
                    cursor: "pointer", 
                    color: "#d32f2f",
                    fontSize: "18px",
                    marginLeft: "10px"
                  }}
                >
                  ✕
                </span>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}

export default Dashboard;
