import React, { useState } from "react";
import "./login.css";

import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const handleSumbit = async (e) => {
    e.preventDefault();
    
        navigate("/home");
    
  };
  return (
    <div>
      <div className="container">
        <div className="inner-container">
          <div className="logo-container">
            <span className="logo">FUSION</span>
          </div>
          {/* <h2 className="heading">Sign in to your account</h2> */}
          <p className="title">
            Don&apos;t have any account?&nbsp;
            <Link to="/signup" className="signuplink">
              Signin
            </Link>
          </p>
          {/* <p className="text-red-600 mt-8 text-center"></p> */}
          <form onSubmit={handleSumbit} className="form-container">
            <div className="input-div">
              <label className="label">Email</label>
              <input
                className="input"
                placeholder="Enter your email"
                type="email"
                value={email}
                required
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className="input-div">
              <label className="label">Password</label>
              <input
                className="input"
                placeholder="Enter your Password"
                type="password"
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>

            <button type="submit" className="btn">
              {" "}
              Sign in
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Login;
