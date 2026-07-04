import { useState, useContext } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { UserContex } from "../App";

function Login() {
  const { setuser } = useContext(UserContex);

  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");

  const navigate = useNavigate();
  const location = useLocation();

  const from = location.state?.from?.pathname || "/";

  const handlesubmit = (e) => {
    e.preventDefault();

    if (password.length < 6) {
      alert("Password must be at least 6 characters");
      return;
    }

    const userdata = { email, password };
    setuser(userdata);

    localStorage.setItem("user", JSON.stringify(userdata));
    navigate(from, { replace: true });
  };

  return (
    <div className="login-wrapper">
      <div className="login-card">
        <div className="logo">
          <div className="logo-box">SB</div>
          <h1>SkillBridge</h1>
          <p>Learn, Manage, Succeed</p>
        </div>

        <form className="login-form" onSubmit={handlesubmit}>
          <label>Email</label>
          <input
            type="email"
            placeholder="your@email.com"
            value={email}
            onChange={(e) => setemail(e.target.value)}
            required
          />

          <label>Password</label>
          <input
            type="password"
            placeholder="••••••••"
            value={password}
            onChange={(e) => setpassword(e.target.value)}
            required
          />

          <button type="submit" className="sign-in-btn">
            Sign In
          </button>
        </form>

        <div className="divider">
          <span>or</span>
        </div>

        <button
          className="demo-btn"
          onClick={() => {
            const demo = { email: "demo@gmail.com", password: "123456" };
            setuser(demo);
            localStorage.setItem("user", JSON.stringify(demo));
            navigate(from, { replace: true });
          }}
        >
          Try Demo Account
        </button>
      </div>
    </div>
  );
}

export default Login;
