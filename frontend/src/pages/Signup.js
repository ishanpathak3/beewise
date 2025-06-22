import React from 'react';
import { createUserWithEmailAndPassword, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { auth } from '../firebase/config';
import { Form, useNavigate, Link } from 'react-router-dom';

function Signup() {
  const [formData, setFormData] = React.useState({
    email: '',
    password: '',
  });
  const navigate = useNavigate();

  function handleSignUp(e) {
    e.preventDefault();
    createUserWithEmailAndPassword(auth, formData.email, formData.password)
      .then(() => {
        alert("Sign up successful! 🎉");
        navigate("/dashboard");
      })
      .catch((err) => {
        alert("Sign up failed: " + err.message);
      });
  }

  function handleGoogleSignUp() {
    const provider = new GoogleAuthProvider();
    signInWithPopup(auth, provider)
      .then(() => {
        navigate("/dashboard");
      })
      .catch((err) => {
        alert("Google sign up failed: " + err.message);
      });
  }

  function handleChange(e) {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value,
    }));
  };

  return (
    <div className='signup-form'>
      <h2>Create Your BeeWise Account</h2>
      <Form method='post' onSubmit={handleSignUp}>
        <label htmlFor="email">Email</label>
        <input
          id="email"
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          required
          placeholder="Enter your email"
        />
        <label htmlFor="password">Password</label>
        <input
          id="password"
          type="password"
          name="password"
          value={formData.password}
          onChange={handleChange}
          required
          placeholder="Create a password"
        />
        <button type="submit">Sign Up</button>
      </Form>
      <div className="divider">OR</div>
      <button onClick={handleGoogleSignUp}>Sign Up with Google</button>
      <p style={{ marginTop: '1rem', textAlign: 'center' }}>
        Already have an account?{" "}
        <Link to="/login" style={{ color: 'var(--color-primary)' }}>
          Log in here
        </Link>
      </p>
    </div>
  )
}

export default Signup;
