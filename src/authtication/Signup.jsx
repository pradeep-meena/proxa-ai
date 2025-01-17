import React from 'react'

const Signup = () => {
  return (
    <>
        <div className="signup-container">
      <h1 className="app-title"><b>PROXA-AI</b></h1>
      <h2 className="welcome-text">Welcome !</h2>
      <form className="signup-form">
        <div className="form-row">
          <input type="text" placeholder="First Name *" className="form-input" />
          <input type="text" placeholder="Last Name *" className="form-input" />
        </div>
        <div className="form-row">
          <input type="email" placeholder="Email *" className="form-input" />
          <input type="text" placeholder="Phone Number *" className="form-input" />
        </div>
        <div className="form-row">
          <select className="form-input">
            <option value="" disabled selected>Gender *</option>
            <option value="male">Male</option>
            <option value="female">Female</option>
            <option value="other">Other</option>
          </select>
          <input type="text" placeholder="City *" className="form-input" />
        </div>
        <div className="form-row">
          <input type="text" placeholder="State *" className="form-input" />
          <input type="text" placeholder="Country *" className="form-input" />
        </div>
        <div className="form-row">
          <select className="form-input">
            <option value="" disabled selected>User Type *</option>
            <option value="admin">Admin</option>
            <option value="user">User</option>
          </select>
          <input type="password" placeholder="Password *" className="form-input" />
        </div>
        <div className="form-row">
          <input
            type="password"
            placeholder="Confirm Password *"
            className="form-input"
          />
        </div>
        <div className="button-group">
          <button type="submit" className="siignup-button">Sign Up</button>
          <button type="button" className="loogin-button">Login</button>
        </div>
      </form>
    </div>
    </>
  )
}

export default Signup

