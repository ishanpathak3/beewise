import React from 'react';
import { signInWithEmailAndPassword, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { auth } from '../firebase/config';
import { Form, useNavigate, Link } from 'react-router-dom';

function Login() {
  const [formData, setFormData] = React.useState({
    email: '',
    password: '',
  });

  const navigate = useNavigate();

  function handleLogin(e) {
    e.preventDefault();
    signInWithEmailAndPassword(auth, formData.email, formData.password)
      .then(() => {
        alert("Login successful! 🎉");
        navigate("/dashboard");
      })
      .catch((err) => {
        alert("Login failed: " + err.message);
      });
  }

  function handleGoogleLogin() {
    const provider = new GoogleAuthProvider();
    signInWithPopup(auth, provider)
      .then(() => {
        navigate("/dashboard");
      })
      .catch((err) => {
        alert("Google login failed: " + err.message);
      });
  }

  function handleChange(e) {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value,
    }));
  }

  return (
    <div className='login-form'>
      <h2>Welcome to BeeWise</h2>
      <Form method='post' onSubmit={handleLogin}>
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
          placeholder="Enter your password"
        />
        <button type="submit">Log In</button>
      </Form>
      <div className="divider">OR</div>
      <button onClick={handleGoogleLogin}>Log In with Google</button>
      <p style={{ marginTop: '1rem', textAlign: 'center' }}>
        Don't have an account?{" "}
        <Link to="/signup" style={{ color: 'var(--color-primary)' }}>
          Sign up here
        </Link>
      </p>
    </div>
  );
}

export default Login;
