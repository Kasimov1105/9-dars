"use client";

import { useEffect, useState } from 'react';
import Loading from './loading';
interface User {
  id: number;
  name: {
    firstname: string;
    lastname: string;
  };
  email: string;
  phone: string;
}

const UsersPage = () => {
  const [users, setUsers] = useState<User[]>([]);
  const [loading, setLoading] = useState<boolean>(true); 

  useEffect(() => {
    async function fetchUsers() {
      try {
        const res = await fetch('https://fakestoreapi.com/users');
        if (!res.ok) {
          throw new Error(`Error fetching users: ${res.status} ${res.statusText}`);
        }
        const data = await res.json();
        console.log('Fetched users:', data);
        setUsers(data);
        setLoading(false); 
      } catch (error) {
        console.error('Error fetching users:', error);
        setLoading(false);
      }
    }
    fetchUsers();
  }, []);

  if (loading) {
    return <Loading />;
  }

  return (
    <div className="w-full max-w-md p-4 bg-white border border-gray-200 rounded-lg shadow sm:p-8 dark:bg-gray-800 dark:border-gray-700">
      <div className="flex items-center justify-between mb-4">
        <h5 className="text-xl font-bold leading-none text-gray-900 dark:text-white">Latest Customers</h5>
        <a href="#" className="text-sm font-medium text-blue-600 hover:underline dark:text-blue-500">View all</a>
      </div>
      <div className="flow-root">
        <ul role="list" className="divide-y divide-gray-200 dark:divide-gray-700">
          {users.map(user => (
            <li key={user.id} className="py-3 sm:py-4">
              <div className="flex items-center">
                <div className="flex-shrink-0 mr-5">
                  <img className="w-12 h-12 rounded-full" src="/person.jpg" alt="" />
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-sm font-medium text-gray-900 truncate dark:text-white">
                    {user.name.firstname} {user.name.lastname}
                  </p>
                  <p className="text-sm text-gray-500 truncate dark:text-gray-400">
                    {user.email}
                  </p>
                </div>
                <div className="inline-flex items-center text-base font-semibold text-gray-900 dark:text-white">
                  $320
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default UsersPage;
