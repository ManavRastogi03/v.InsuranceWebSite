import React, { useState } from 'react';
import illustration from '../../Image/LoginImage.png'; // Replace with your actual image path

function LoginPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = (e) => {
    e.preventDefault();
    // Implement your login logic here
    alert(`Logging in with ${email}`);
  };

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col md:flex-row items-center justify-center p-6">
      {/* Left Section: Login Form */}
      <div className="bg-white p-6 rounded-lg shadow-lg w-full md:w-1/2 lg:w-1/3">
        <h2 className="text-3xl font-semibold mb-4 text-center">Welcome back</h2>

        <form onSubmit={handleLogin}>
          {/* Email Input */}
          <div className="mb-4">
            <input
              type="email"
              placeholder="name@company.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full p-3 border border-gray-300 rounded-lg"
              required
            />
          </div>

          {/* Password Input */}
          <div className="mb-4">
            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full p-3 border border-gray-300 rounded-lg"
              required
            />
          </div>

          {/* Sign In Button */}
          <button
            type="submit"
            className="w-full bg-green-500 text-white p-3 rounded-lg font-semibold mb-4"
          >
            Sign in to your account
          </button>

          <div className="text-center text-gray-500 mb-4">or</div>

          {/* Sign In with Google */}
          <button className="w-full flex items-center justify-center bg-transparent text-gray-700 border border-gray-300 p-3 rounded-lg font-semibold mb-4">
            <img src="https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg" alt="Google" className="w-5 h-5 mr-2" />
            Sign in with Google
          </button>

          {/* Forgot Password */}
          <div className="text-center">
            <a href="#" className="text-blue-500 underline">Forgot password?</a>
          </div>
        <p className="text-gray-500 text-center mb-6">Don’t have an account? <a href="#" className="text-blue-500">Sign up.</a></p>
        </form>
      </div>

      {/* Right Section: Illustration */}
      <div className="hidden md:flex w-full md:w-1/2 lg:w-2/3 justify-center items-center">
        <img src={illustration} alt="Illustration" className="w-2/3 h-auto" />
      </div>
    </div>
  );
}

export default LoginPage;
