/* eslint-disable no-undef */
/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */

import React,{useState} from 'react';


const Signup = ({ toggleForm }) => {

    const [email,setEmail]=useState('');
    const [password,setPassword]=useState('');
    const [confirmPassword,setConfirmPassword]=useState('');
    const [userDetails,setUserDetails]=useState([]);


    const handleRegister=(e)=>{
        e.preventDefault();
        if(password == confirmPassword) {
        registerUser();
        }else{
            alert('Passwords do not match');
        }
        setEmail('');
        setPassword('');
        setConfirmPassword('');
    }


    const registerUser=async ()=>{
        try{
            const response=await fetch('https://reqres.in/api/register',{
                method:'POST',
                headers:{
                    'Content-Type':'application/json'
                },
                body:JSON.stringify({
                    email:email,
                    password:password
                })
            });
            const data=await response.json();
            setUserDetails(data)
        }
        catch(error){
            console.log(error);
        }
    }

  return (
    <div className="w-full max-w-md">
      <form className="bg-yellow-100 shadow-md rounded px-8 pt-6 pb-8 mb-4" onSubmit={handleRegister}>
        <h2 className="text-2xl font-bold mb-6 text-center">Sign Up</h2>
        
        <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
              Email Id:
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="email"
              type="text"
              value={email}
              placeholder="Enter your Emaild" onChange={(e)=>setEmail(e.target.value)}
              
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
              placeholder="********" onChange={(e)=>setPassword(e.target.value)}
              
            />
          </div>
          <div className="mb-6">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="cnfpassword">
              Confirm Password:
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="cnfpassword"
              type="password"
              value={confirmPassword}
              placeholder="********" onChange={(e)=>setConfirmPassword(e.target.value)}
              
            />
          </div>

        <div className="flex items-center flex-col">
          <button
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            type="submit"
          >
            Sign Up
          </button>
          {
            userDetails.token?<p className='text-green-500 font-bold mt-2'>User SignUp Successful</p>:
            <p className="text-red-500 font-bold mt-2">{userDetails.error}</p>
            
          }
          <p className="text-sm mt-4">
            Already have an account?
            <button
              className="text-blue-500 ml-2 hover:underline focus:outline-none"
              type="button"
              onClick={() => toggleForm(true)}
            >
              Sign In
            </button>
          </p>
        </div>
      </form>
    </div>
  );
};

export default Signup;
