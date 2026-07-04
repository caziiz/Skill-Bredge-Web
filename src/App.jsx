import { useState, useEffect, createContext, useContext } from "react";
import { Routes, Route, Navigate, Outlet, useLocation } from "react-router-dom";

import Courses from "./Pages/Courses";
import Dashboard from "./pages/Dashboard";
import Navbar from "./Combonents/Navbar";
import Tasks from "./Pages/Task";
import Login from "./Pages/Login";
import Coursedetail from "./Pages/Coursedetail";

export const UserContex = createContext();

/* ---------- Protected Route ---------- */
function ProtectedRoute({ children }) {
const { user } = useContext(UserContex);
  const location = useLocation();

  if (!user) {
    return <Navigate to="/login" state={{ from: location }} replace />;
  }

  return children;
}

/* ---------- Login Redirect Handler ---------- */
function LoginRedirect() {
const { user } = useContext(UserContex);
  const location = useLocation();
  const from = location.state?.from?.pathname || "/";

  if (user) return <Navigate to={from} replace />;

  return <Login />;
}

/* ---------- Layout ---------- */
function Layout() {
  return (
    <>
      <Navbar />
      <Outlet />
    </>
  );
}

function App() {
  const [user, setuser] = useState(null);
  const [enrolledCourses, setEnrolledCourses] = useState([]);
  const [tasks, setTasks] = useState([]);
  const [darkMode, setDarkMode] = useState(() => {
    const savedDarkMode = localStorage.getItem("darkMode");
    return savedDarkMode ? JSON.parse(savedDarkMode) : false;
  });

  useEffect(() => {
    const savedUser = localStorage.getItem("user");
    if (savedUser) setuser(JSON.parse(savedUser));
  }, []);

  useEffect(() => {
    localStorage.setItem("darkMode", JSON.stringify(darkMode));
    if (darkMode) {
      document.documentElement.setAttribute("data-theme", "dark");
    } else {
      document.documentElement.removeAttribute("data-theme");
    }
  }, [darkMode]);

  const enrollCourse = (course) => {
    if (!enrolledCourses.find(c => c.id === course.id)) {
      setEnrolledCourses([...enrolledCourses, course]);
    }
  };

  const addTask = (task) => {
    setTasks([...tasks, task]);
  };

  const toggleTaskCompleted = (id) => {
    setTasks(tasks.map(task => 
      task.id === id ? { ...task, completed: !task.completed } : task
    ));
  };

  const deleteTask = (id) => {
    setTasks(tasks.filter(task => task.id !== id));
  };

  return (
    <UserContex.Provider value={{ 
      user, 
      setuser, 
      enrolledCourses, 
      enrollCourse, 
      tasks, 
      addTask, 
      toggleTaskCompleted, 
      deleteTask,
      darkMode,
      setDarkMode
    }}>
      <Routes>

        <Route path="/login" element={<LoginRedirect />} />

        <Route path="/" element={<Layout />}>
          <Route
            index
            element={
              <ProtectedRoute>
                <Dashboard />
              </ProtectedRoute>
            }
          />

          <Route
            path="courses"
            element={
              <ProtectedRoute>
                <Courses />
              </ProtectedRoute>
            }
          />

          <Route
            path="courses/:id"
            element={
              <ProtectedRoute>
                <Coursedetail />
              </ProtectedRoute>
            }
          />

          <Route
            path="tasks"
            element={
              <ProtectedRoute>
                <Tasks />
              </ProtectedRoute>
            }
          />
        </Route>

        <Route path="*" element={<Navigate to="/login" replace />} />
      </Routes>
    </UserContex.Provider>
  );
}

export default App;
