import React, { useState } from 'react';
import './LoginPage.css';

function LoginPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState('');

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleConfirmPasswordChange = (event) => {
    setConfirmPassword(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (password === confirmPassword) {
      setError('OTP Sent to Registered Email-ID');
    } else {
      setError('');
      // Add your login logic here
      console.log('Email:', email);
      console.log('Password:', password);
      // Reset the form fields
      setEmail('');
      setPassword('');
      setConfirmPassword('');
    }
  };

  return (
    <div className="container-fluid login-page">
      <div className="row">
        <div className="col-md-6 login-bg">
          <h2>Login</h2>
        </div>
        <div className="col-md-6 login-panel">
          <h2>Login Panel</h2>
          {error && <div className="alert alert-danger">{error}</div>}
          <form onSubmit={handleSubmit}>
            <div className="mb-3">
              <label htmlFor="email" className="form-label">
                Email
              </label>
              <input
                type="email"
                className="form-control"
                id="email"
                placeholder="Enter your email"
                value={email}
                onChange={handleEmailChange}
                required
              />
            </div>
            <div className="mb-3">
              <label htmlFor="password" className="form-label">
                Password
              </label>
              <input
                type="password"
                className="form-control"
                id="password"
                placeholder="Enter your password"
                value={password}
                onChange={handlePasswordChange}
                required
              />
            </div>
            <div className="mb-3">
              <label htmlFor="confirmPassword" className="form-label">
                Confirm Password
              </label>
              <input
                type="password"
                className="form-control"
                id="confirmPassword"
                placeholder="Confirm your password"
                value={confirmPassword}
                onChange={handleConfirmPasswordChange}
                required
              />
            </div>
            <button type="submit" className="btn btn-primary">
              Login
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default LoginPage;


import React, { useState } from 'react';
import './LoginPage.css';

function LoginPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = async (e) => {
    
    e.preventDefault();
    const response = await fetch("http://localhost:5000/api/users/login", {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ email:email, password: password })

    });
    const json = await response.json()
    console.log(json);
    if (!json.success) {
      alert("Enter Valid Credentials");
    }
    if (json.success) {
      localStorage.setItem("userEmail",email)
      localStorage.setItem("authToken",json.authToken)
      navigate("/");
    }

    /*e.preventDefault();
    if (password === confirmPassword) {
      setError('OTP Sent to Registered Email-ID');
    } else {
      setError('');
      // Add your login logic here
      console.log('Email:', email);
      console.log('Password:', password);
      // Reset the form fields
      setEmail('');
      setPassword('');
      setConfirmPassword('');
    }*/
  }

  
  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleConfirmPasswordChange = (event) => {
    setConfirmPassword(event.target.value);
  };
/*
  const handleSubmit = (event) => {
    event.preventDefault();
    if (password === confirmPassword) {
      setError('OTP Sent to Registered Email-ID');
    } else {
      setError('');
      // Add your login logic here
      console.log('Email:', email);
      console.log('Password:', password);
      // Reset the form fields
      setEmail('');
      setPassword('');
      setConfirmPassword('');
    }
  };*/

  return (
    <div className="container-fluid login-page">
      <div className="row">
        <div className="col-md-6 login-bg">
          <h2>Login</h2>
        </div>
        <div className="col-md-6 login-panel">
          <h2>Login Panel</h2>
          {error && <div className="alert alert-danger">{error}</div>}
          <form onSubmit={handleSubmit}>
            <div className="mb-3">
              <label htmlFor="email" className="form-label">
                Email
              </label>
              <input
                type="email"
                className="form-control"
                id="email"
                placeholder="Enter your email"
                value={email}
                onChange={handleEmailChange}
                required
              />
            </div>
            <div className="mb-3">
              <label htmlFor="password" className="form-label">
                Password
              </label>
              <input
                type="password"
                className="form-control"
                id="password"
                placeholder="Enter your password"
                value={password}
                onChange={handlePasswordChange}
                required
              />
            </div>
            <div className="mb-3">
              <label htmlFor="confirmPassword" className="form-label">
                Confirm Password
              </label>
              <input
                type="password"
                className="form-control"
                id="confirmPassword"
                placeholder="Confirm your password"
                value={confirmPassword}
                onChange={handleConfirmPasswordChange}
                required
              />
            </div>
            <button type="submit" className="btn btn-primary">
              Login
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default LoginPage;