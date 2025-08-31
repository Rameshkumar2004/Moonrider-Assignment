import React from 'react'
// import { Link } from 'react-router-dom';
import { useState } from "react";
import {
  FaGithub,
  FaTwitter,
  FaLinkedin,
  FaDiscord,
  FaGoogle,
  FaApple,
} from "react-icons/fa";
import { Link } from 'react-router-dom';

const Login = () => {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <div className="flex h-screen">
      {/* Left Section */}
      <div className="w-1/3 bg-indigo-600 text-white flex flex-col justify-between p-8">
        <div className="text-2xl font-bold">🌐</div>
        <div className="flex-1 flex justify-center items-center">
          <h1 className="text-4xl font-extrabold">BASE</h1>
        </div>
        <div className="flex justify-center gap-4 text-xl">
          <FaGithub className="cursor-pointer" />
          <FaTwitter className="cursor-pointer" />
          <FaLinkedin className="cursor-pointer" />
          <FaDiscord className="cursor-pointer" />
        </div>
      </div>

      {/* Right Section */}
      <div className="w-2/3 flex justify-center items-center bg-gray-50">
        <div className="w-full max-w-md bg-white p-8 rounded-xl shadow-md">
          <h2 className="text-2xl font-bold text-gray-900">Sign In</h2>
          <p className="text-gray-500 mb-6">Sign in to your account</p>

          {/* Social Buttons */}
          <div className="flex gap-3 mb-6">
            <button className="flex items-center justify-center w-1/2 px-1 py-1 border rounded-lg text-gray-600 hover:bg-gray-100">
              <FaGoogle className="mr-2" /> Sign in with Google
            </button>
            <button className="flex items-center justify-center w-1/2 px-1 py-1 border rounded-lg text-gray-600 hover:bg-gray-100">
              <FaApple className="mr-2" /> Sign in with Apple
            </button>
          </div>

          {/* Input Fields */}
          <div className="space-y-4">
            <div>
              <label className="block text-gray-700 mb-1">Email address</label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="johndoe@gmail.com"
                className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-indigo-500"
              />
            </div>
            <div>
              <label className="block text-gray-700 mb-1">Password</label>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="••••••••"
                className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-indigo-500"
              />
            </div>
          </div>

          <div className="flex justify-between items-center mt-2">
            <a href="#" className="text-indigo-600 text-sm hover:underline">
              Forgot password?
            </a>
          </div>

          {/* Sign In Button */}
          <button className="w-full mt-6 bg-indigo-600 text-white py-2 rounded-lg hover:bg-indigo-700">
            <Link to="/dashboard">Sign In</Link>
          </button>

          <p className="text-center text-gray-500 mt-4 text-sm">
            Don’t have an account?{" "}
            <a href="#" className="text-indigo-600 hover:underline">
              Register here
            </a>
          </p>
        </div>
      </div>
    </div>
  )
}

export default Login
