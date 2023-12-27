/* eslint-disable react/no-unescaped-entities */
/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */

import React from 'react';
import { useState } from 'react';
import Dashboard from './Dashboard';


const Login = ({ toggleForm, onDataFromChild }) => {

const [userLoggedIn,setUserLoggedIn]=useState(false);
const [userDetails,setUserDetails]=useState([]);

const [email,setEmail]=useState('');
const [password,setPassword]=useState('');

const handleSubmit=(e)=>{
    e.preventDefault();
    userlogin();
    setEmail('');
    setPassword('');
}

const userlogin = async () => {
    try {
      const response = await fetch('https://reqres.in/api/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          email: email,
          password: password,
        }),
      });
      const data = await response.json();
      setUserDetails(data);
  
      if (data.token) {
        setUserLoggedIn(true);
        onDataFromChild(true); 
      }
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div className="w-full max-w-md">
      <form className="bg-yellow-100 shadow-md rounded-md px-10 pt-6 pb-8 mb-4" onSubmit={handleSubmit}>
        <h2 className="text-2xl font-bold mb-6 text-center">Login</h2>
        <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
              Email Id:
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="email"
              type="text"
              value={email}
              placeholder="Enter your Emai ld"  onChange={(e)=>setEmail(e.target.value)}
              
            />
          </div>
          <div className="mb-6">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">
              Password:
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="password"
              value={password}
              type="password"
              placeholder="********"
               onChange={(e)=>setPassword(e.target.value)}
              
            />
          </div>
        <div className="flex items-center flex-col">
          <button
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            type="submit"
          >
            Sign In
          </button>
          {
            userDetails.token?<Dashboard/>:
            <p className="text-red-500 font-bold mt-2">{userDetails.error}</p> 
          }
          <p className="text-sm mt-4">
            Don't have an account?
            <button
              className="text-blue-500 ml-2 hover:underline focus:outline-none"
              type="button"
              onClick={() => toggleForm(false)}
            >
              Sign Up
            </button>
          </p>
        </div>
      </form>
    </div>
  );
};

export default Login;
