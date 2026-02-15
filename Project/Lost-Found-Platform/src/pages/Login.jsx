import React from 'react';

const Login = () => (
  <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
    <h2 className="text-2xl font-bold mb-4">Login</h2>
    <form className="bg-white p-6 rounded shadow-md w-80">
      <input type="email" placeholder="Email" className="w-full mb-3 p-2 border rounded" />
      <input type="password" placeholder="Password" className="w-full mb-3 p-2 border rounded" />
      <button className="w-full bg-blue-600 text-white p-2 rounded">Login</button>
    </form>
    <p className="mt-4">Don't have an account? <a href="/register" className="text-blue-600">Register</a></p>
  </div>
);

export default Login;
