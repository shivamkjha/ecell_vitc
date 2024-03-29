import React from 'react';

const ApproveMembersPage = () => {
  const users = [
    { id: 1, name: 'Ankush Chaudhary', phone: '123-456-7890', email: 'ank@example.com', designation: 'Developer', role: 'Admin', isApproved: false },
    { id: 2, name: 'Shivam Jha', phone: '234-567-8901', email: 'shiv@example.com', designation: 'Manager', role: 'Lead', isApproved: false },
    { id: 3, name: 'Rohit', phone: '345-678-9012', email: 'rohit@example.com', designation: 'Manager', role: 'Lead', isApproved: false },
    // Add more users here
  ];

  return (
    <div className="min-h-screen bg-gray-100">
      <div className="container mx-auto px-4 py-8">
        <div className="bg-blue-200 p-4 my-4 rounded">
          <table className="w-full border-collapse">
            <thead>
              <tr className="bg-blue-300">
                <th className="border border-gray-800 px-4 py-2">Slno</th>
                <th className="border border-gray-800 px-4 py-2">Name</th>
                <th className="border border-gray-800 px-4 py-2">Phone</th>
                <th className="border border-gray-800 px-4 py-2">Email</th>
                <th className="border border-gray-800 px-4 py-2">AddUser</th>
                <th className="border border-gray-800 px-4 py-2">BlockUser</th>
              </tr>
            </thead>
            <tbody>
              {users.map((user) => (
                <tr key={user.id} className="text-center bg-white">
                  <td className="border border-gray-800 px-4 py-3">{user.id}</td>
                  <td className="border border-gray-800 px-4 py-3">{user.name}</td>
                  <td className="border border-gray-800 px-4 py-3">{user.phone}</td>
                  <td className="border border-gray-800 px-4 py-3">{user.email}</td>
                  <td className="border border-gray-800 px-4 py-3">
                    <button className="bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded transition-colors duration-300 ease-in-out">Add</button>
                  </td>
                  <td className="border border-gray-800 px-4 py-3">
                    <button className="bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded transition-colors duration-300 ease-in-out">Block</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default ApproveMembersPage;

