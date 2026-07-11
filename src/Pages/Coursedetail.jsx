// import { useParams, useNavigate } from "react-router-dom";
// import { useContext } from "react";
// import { courses } from "../assets/data/courses";
// import { UserContex } from "../App";

// function Coursedetail() {
//   const { id } = useParams();
//   const navigate = useNavigate();
//   const { enrolledCourses, enrollCourse } = useContext(UserContex);

//   const course = courses.find(c => c.id === Number(id));
//   if (!course) return <h2>Course not found</h2>;

//   const isEnrolled = enrolledCourses.some(c => c.id === course.id);

//   const handleEnroll = () => {
//     if (!isEnrolled) {
//       enrollCourse(course);
//       alert("Course enrolled successfully!");
//     }
//   };

//   return (
//     <div className="course-page">

//       <button className="back-btn" onClick={() => navigate(-1)}>
//         ← Back to Courses
//       </button>

//       <div className="banner">
//         <img src={course.image} alt={course.title} />
//       </div>

//       <div className="course-layout">
//         <div className="course-main">
//           <h1>{course.title}</h1>

//           <div className="meta">
//             <span>🧑‍🏫{course.instractor}</span>
//             <span>⭐{course.rating}</span>
//             <span>👨‍🎓 {course.students}</span>
//             <span>⏳{course.duration}</span>
//           </div>

//           <p className="desc">{course.description}</p>

//           <h2>What you'll learn</h2>
//           <ul className="learn-list">
//             {course.learn.map((item, index) => (
//               <li key={index}> - {item}</li>
//             ))}
//           </ul>

//           <h2>Course Modules</h2>
//           <div className="modules">
//             {course.modules.map((mod, index) => (
//               <div className="module" key={index}>
//                 <span>{index + 1}</span>
//                 <div>
//                   <strong>{mod.title}</strong>
//                   <p>{mod.lessons} lessons</p>
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>

//         <div className="course-sidebar">
//           <h2>{course.price}</h2>
//           <button 
//             className="enroll" 
//             onClick={handleEnroll}
//             style={isEnrolled ? { backgroundColor: "#4CAF50", color: "white" } : {}}
//             disabled={isEnrolled}
//           >
//             {isEnrolled ? "Enrolled ✓" : "Enroll Now"}
//           </button>
//           <button className="wishlist">Add to Wishlist</button>

//           <div className="includes">
//             <h3>This course includes:</h3>
//             {course.includes.map((item, index) => (
//               <p key={index}>✔ {item}</p>
//             ))}
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default Coursedetail;
