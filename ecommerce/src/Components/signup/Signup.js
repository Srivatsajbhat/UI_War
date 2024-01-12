import { useState } from "react";
import React from "react";

import "./Signup.css";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
function Signup() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [phonenumber, setPhonenumber] = useState("");
  const navigate = useNavigate();

  //form sumbit
  const handleSumbit = async (e) => {
    e.preventDefault();
    
        navigate("/");
     
  };

  return (
    <div className="body">
      <div className="container">
        <div className="inner-container1">
          <div className="logo-container">
            <span className="logo">FUSION</span>
          </div>
          {/* <h2 className="heading">Create a new account</h2> */}
          <p className="title">
            {/* Don&apos;t have any account?&nbsp; */}
            Already have an account?&nbsp;
            <Link to="/login" className="signuplink">
              Login
            </Link>
          </p>
          {/* <p className="text-red-600 mt-8 text-center"></p> */}
          <form onSubmit={handleSumbit} className="form-container">
            <div className="input-div">
              <label className="label">Name</label>
              <input
                className="input"
                label="Email: "
                placeholder="Enter your Name"
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </div>
            <div className="input-div">
              <label className="label">Email</label>
              <input
                className="input"
                label="Email: "
                placeholder="Enter your email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className="input-div">
              <label className="label">Password</label>
              <input
                className="input"
                label="Email: "
                placeholder="Enter your Password"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <div className="input-div">
              <label className="label">Phone Number</label>
              <input
                className="input"
                label="Email: "
                placeholder="Enter your Phone Number"
                type="text"
                value={phonenumber}
                onChange={(e) => setPhonenumber(e.target.value)}
              />
            </div>
            <button type="submit" className="btn">
              {" "}
              Create Account
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Signup;
