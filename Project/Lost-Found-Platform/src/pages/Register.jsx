import React from 'react';

const Register = () => (
  <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
    <h2 className="text-2xl font-bold mb-4">Register</h2>
    <form className="bg-white p-6 rounded shadow-md w-80">
      <input type="text" placeholder="Name" className="w-full mb-3 p-2 border rounded" />
      <input type="email" placeholder="Email" className="w-full mb-3 p-2 border rounded" />
      <input type="password" placeholder="Password" className="w-full mb-3 p-2 border rounded" />
      <button className="w-full bg-blue-600 text-white p-2 rounded">Register</button>
    </form>
    <p className="mt-4">Already have an account? <a href="/login" className="text-blue-600">Login</a></p>
  </div>
);

export default Register;
