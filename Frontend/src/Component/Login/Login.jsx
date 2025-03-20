import React, { useState, useEffect } from 'react';
import { loginUser } from '../../api/api';
import illustration from '../../Image/LoginImage.png';
import { Link, useNavigate } from 'react-router-dom';
import  Loader  from '../Loader/Loader.jsx';
function LoginPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();

  // useEffect to check if the user is already logged in
  useEffect(() => {
    const token = localStorage.getItem('token');
    if (token) {
      // If token exists, redirect to homepage/dashboard
      navigate('/');
    }
  }, [navigate]); // Runs on page load

  const handleLogin = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');
  
    try {
      const response = await loginUser({ email, password });
      console.log('Login Successful:', response);  // 🟢 Debug log
      
      // ✅ Corrected Local Storage Access
      localStorage.setItem('token', response.token);
      localStorage.setItem('user', JSON.stringify(response.user));
  
      // Navigate to homepage/dashboard
      navigate('/');
    } catch (error) {
      setError(error.response?.data?.message || 'Oops! Something went wrong. Try again.');
    } finally {
      setLoading(false);
    }
  };
  
    // ✅ Google Sign-In
    const handleGoogleLogin = () => {
      window.open(`${process.env.REACT_APP_API_URL}/api/auth/google`, "_self");
    };

  return (
    <div className="min-h-screen flex flex-col md:flex-row items-center justify-center p-6 bg-gradient-to-r from-green-200 to-blue-300">
      {/* Full-Screen Loader */}
      {loading && (
        <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
          <Loader />
        </div>
      )}
      
      {/* Left Section: Login Form */}
      <div className="bg-white p-8 rounded-lg shadow-xl w-full md:w-2/5 lg:w-1/3">
        <h2 className="text-3xl font-bold mb-4 text-center text-gray-800">Glad to See You Again! 👋</h2>

        {error && <p className="text-red-500 text-center">{error}</p>}

        <form onSubmit={handleLogin}>
          {/* Email Input */}
          <div className="mb-4">
            <input
              type="email"
              placeholder="Enter your email address"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
              required
            />
          </div>

          {/* Password Input */}
          <div className="mb-4">
            <input
              type="password"
              placeholder="Enter your secure password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
              required
              autoComplete="current-password"
            />
          </div>

          <button
            type="submit"
            className={`w-full flex items-center justify-center p-3 rounded-lg font-semibold transition duration-300 ease-in-out ${
              loading ? "bg-blue-400 cursor-not-allowed" : "bg-blue-600 hover:bg-blue-700 text-white"
            }`}
            disabled={loading}
          >
            Sign In
          </button>
          <div className="text-center text-gray-500 my-4">or</div>

          {/* Sign In with Google */}
          <button
            type="button"
            onClick={handleGoogleLogin} 
            className="w-full flex items-center justify-center bg-white text-gray-700 border border-gray-300 p-3 rounded-lg font-semibold hover:shadow-md transition duration-300"
            disabled={loading}
          >
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg"
              alt="Google"
              className="w-5 h-5 mr-2"
            />
            Sign in with Google
          </button>

          {/* Forgot Password */}
          <div className="text-center mt-4">
            <Link to="/forgot-password" className="text-blue-600 hover:underline">Forgot password?</Link>
          </div>
          <p className="text-gray-600 text-center mt-4">
            New here? <Link to="/signup" className="text-blue-600 hover:underline">Create an account</Link>
          </p>
        </form>
      </div>

      {/* Right Section: Illustration */}
      <div className="hidden md:flex w-full md:w-3/5 lg:w-2/3 justify-center items-center">
        <img src={illustration} alt="Welcome Illustration" className="w-3/4 max-w-sm lg:max-w-md h-auto" />
      </div>
    </div>
  );
}

export default LoginPage;
