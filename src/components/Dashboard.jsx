/* eslint-disable no-unused-vars */

import React, { useState, useEffect } from 'react';

const Dashboard = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const response = await fetch('https://reqres.in/api/users?page=2');
        const data = await response.json();

        if (data && data.data) {
          setUsers(data.data);
        }
      } catch (error) {
        console.error('Error fetching user data:', error);
      }
    };

    fetchUserData();
  }, []);

  return (
    <div className="w-full h-full bg-blue-500">
      <h1 className="text-3xl font-bold h-[14%] text-center p-6">User Management Dashboard</h1>
      <div className="flex items-center justify-center w-full h-[calc(100%-14%)] relative flex-wrap bg-[white]">
        {users.map((user) => (
          <div key={user.id} className="mb-4 p-4 bg-black-100 ml-4 w-fit h-[40%] shadow-md rounded-md shrink-0">
            <img
              src={user.avatar}
              alt={`Avatar of ${user.username}`}
              className="rounded-full w-22 h-22 mx-auto mb-8"
            />
            <p className="text-xl font-semibold text-center">{user.first_name} {user.last_name}</p>
            <p className="text-gray-600 text-center">{user.email}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Dashboard;
