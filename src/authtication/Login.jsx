import React from "react";
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <>
      <main>
        <div className="login-container">
          <h1 className="fw-bold">ProcXa-AI</h1>
          <p className="text-start text-secondary mb-5">Welcome !</p>
          <form>
            <div className="mb-3">
              <input
                type="email"
                className="form-control p-3"
                placeholder="Email"
                required=""
                style={{ color: "#578e7e" }}
              />
            </div>
            <div className="mb-3 mt-3">
              <input
                type="password"
                className="form-control p-3"
                placeholder="Password"
                required=""
                style={{ color: "#578e7e" }}
              />
            </div>
            <div className="d-flex justify-content-end mb-4">
              <a href="#" className="text-decoration-none text-secondary">
                Forgot Password?
              </a>
            </div>
            <div className="d-flex">
            <Link style={{color:"white"}} to="/dashbord">
              <button
                type="submit"
                className="px-4 py-2 ms-1 btn-primary shadow">
                Login
              </button>
                  </Link>
              <button
                type="button"
                className="px-4 py-2 ms-4 btn-outline-primary">
                Sign Up
              </button>
            </div>
          </form>
        </div>
      </main>
    </>
  );
};

export default Login;
