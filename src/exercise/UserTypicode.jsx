import React, { useState, useEffect } from 'react';
import axios from 'axios';

const URL = 'https://jsonplaceholder.typicode.com/users';

const UserTypicode = () => {
  const [users, setUsers] = useState([]);
  useEffect(() => {
    const fetchUsers = async () => {
      const { data } = await axios.get(URL, {});
      setUsers(data);
    };
    fetchUsers();
  }, []);

  const renderedUsers = users.map((user) => {
    return (
      <div className='item' key={user.id}>
        <i className='large user middle aligned icon'></i>
        <div className='content'>
          <a className='header' href={user.website}>
            {user.name}
          </a>
          <div className='description'>{user.email}</div>
        </div>
      </div>
    );
  });
  return (
    <>
      <div className='ui header teal'>Aspiring customers to contact with</div>
      <div className='ui relaxed divided list'>{renderedUsers}</div>
    </>
  );
};

export default UserTypicode;
