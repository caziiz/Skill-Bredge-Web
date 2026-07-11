// import { useState, useContext } from "react";
// import { useNavigate } from "react-router-dom";
// import { courses } from "../assets/data/courses";
// import { UserContex } from "../App";

// function Courses() {
//   const navigate = useNavigate();
//   const { enrolledCourses, enrollCourse } = useContext(UserContex);

//   const categories = ["all", "web", "mobile", "ai", "data"];
//   const [selectedCategory, setSelectedCategory] = useState("all");

//   const filteredCourses =
//     selectedCategory === "all"
//       ? courses
//       : courses.filter((course) => course.category === selectedCategory);

//   const opencourses = (course) => {
//     navigate(`/courses/${course.id}`);
//   };

//   const handleEnroll = (e, course) => {
//     e.stopPropagation();
//     enrollCourse(course);
//     alert("Course enrolled successfully!");
//   };

//   const isEnrolled = (courseId) => {
//     return enrolledCourses.some(c => c.id === courseId);
//   };

//   return (
//     <div className="courses-container">
//       <div className="page-info">
//         <h2>Explore Courses</h2>
//         <p>Learn new skills from industry experts</p>
//       </div>

//       <div className="cate-container">
//         {categories.map((cat) => (
//           <button
//             key={cat}
//             onClick={() => setSelectedCategory(cat)}
//             className={`btn-cat ${selectedCategory === cat ? "active" : ""}`}
//           >
//             {cat}
//           </button>
//         ))}
//       </div>

//       <div className="courses-grid">
//         {filteredCourses.map((course) => (
//           <div
//             onClick={() => opencourses(course)}
//             className="course-card"
//             key={course.id}
//           >
//             <div className="card-img">
//               <img src={course.image} alt={course.title} />
//               <span className="badge">{course.category}</span>
//             </div>

//             <div className="card-body">
//               <h3>{course.title}</h3>
//               <p>{course.description}</p>

//               <div className="card-footer">
//                 <span className="rating">⭐ 4.8</span>
//                 <button 
//                   className={`btn-enroll ${isEnrolled(course.id) ? "enrolled" : ""}`}
//                   onClick={(e) => handleEnroll(e, course)}
//                   style={isEnrolled(course.id) ? { backgroundColor: "#4CAF50", color: "white" } : {}}
//                   disabled={isEnrolled(course.id)}
//                 >
//                   {isEnrolled(course.id) ? "Enrolled" : "Enroll"}
//                 </button>
//               </div>
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// }

// export default Courses;
