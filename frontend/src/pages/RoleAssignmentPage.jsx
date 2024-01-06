
// import React, { useState } from 'react';

// const RoleAssignmentPage = () => {
//   const roles = ['Admin', 'Lead', 'Developer', 'Manager', 'User'];
//   const [searchTerm, setSearchTerm] = useState('');

//   const users = [
//     { id: 1, name: 'Ankush Chaudhary', phone: '123-456-7890', email: 'ank@example.com', designation: 'Developer', role: 'Admin', isApproved: false },
//     { id: 2, name: 'Shivam Jha', phone: '234-567-8901', email: 'shiv@example.com', designation: 'Manager', role: 'Lead', isApproved: false },
//     { id: 3, name: 'Shivam Jha', phone: '234-567-8901', email: 'shiv@example.com', designation: 'Manager', role: 'Lead', isApproved: false },
//     // Add more users here
//   ];

//   const filteredUsers = searchTerm
//     ? users.filter(user => user.name.toLowerCase().includes(searchTerm.toLowerCase()))
//     : users;

//   return (
//     <div className="p-4">
//       <div className="text-lg font-bold mb-3 text-gray-900">Hi Admin</div>

//       <div className="mb-4">
//         <input
//           type="text"
//           placeholder="Search by name..."
//           className="w-full p-2 rounded border"
//           value={searchTerm}
//           onChange={(e) => setSearchTerm(e.target.value)}
//         />
//       </div>

//       <div className="bg-blue-200 p-4 rounded shadow mb-4">
//         <h2 className="text-lg font-bold mb-3 text-gray-900">Create New Role</h2>
//         <div className="flex gap-4">
//           <input type="text" placeholder="Role Title" className="border p-2 rounded" />
//           <input type="color" className="border p-2 rounded" />
//           <button className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded transition duration-300">Create</button>
//         </div>
//       </div>

//       <div className="bg-green-200 p-4 rounded shadow mb-4">
//         <h2 className="text-lg font-bold mb-3 text-gray-900">Approve Members</h2>
//         <p>Number of unapproved members: {users.filter(user => !user.isApproved).length}</p>
//       </div>

//       <div className="bg-blue-200 p-4 rounded shadow">
//         <table className="w-full text-sm text-left text-gray-500 border-collapse">
//           <thead className="text-xs text-gray-700 uppercase bg-blue-300">
//             <tr>
//               <th className="border border-gray-800 px-6 py-3 text-gray-900">Slno</th>
//               <th className="border border-gray-800 px-6 py-3 text-gray-900">Name</th>
//               <th className="border border-gray-800 px-6 py-3 text-gray-900">Phone</th>
//               <th className="border border-gray-800 px-6 py-3 text-gray-900">Email</th>
//               <th className="border border-gray-800 px-6 py-3 text-gray-900">Designation</th>
//               <th className="border border-gray-800 px-6 py-3 text-gray-900">Role</th>
//               <th className="border border-gray-800 px-6 py-3 text-gray-900">Block User</th>
//             </tr>
//           </thead>
//           <tbody>
//             {filteredUsers.map((user) => (
//               <tr key={user.id} className="bg-white hover:bg-gray-50">
//                 <td className="border border-gray-800 px-6 py-4 text-gray-900">{user.id}</td>
//                 <td className="border border-gray-800 px-6 py-4 text-gray-900">{user.name}</td>
//                 <td className="border border-gray-800 px-6 py-4 text-gray-900">{user.phone}</td>
//                 <td className="border border-gray-800 px-6 py-4 text-gray-900">{user.email}</td>
//                 <td className="border border-gray-800 px-6 py-4 text-gray-900">{user.designation}</td>
//                 <td className="border border-gray-800 px-6 py-4 text-gray-900">
//                   <select className="border border-gray-800 rounded p-2 bg-white text-gray-900">
//                     {roles.map(role => (
//                       <option key={role} value={role} selected={role === user.role}>
//                         {role}
//                       </option>
//                     ))}
//                   </select>
//                 </td>
//                 <td className="border border-gray-800 px-6 py-4 text-gray-900">
//                   <button className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded transition duration-300">Block</button>
//                 </td>
//               </tr>
//             ))}
//           </tbody>
//         </table>
//       </div>
//     </div>
//   );
// };

// export default RoleAssignmentPage;
import React, { useState } from 'react';

const RoleAssignmentPage = () => {
  const roles = ['Admin', 'Lead', 'Developer', 'Manager', 'User'];
  const [searchTerm, setSearchTerm] = useState('');

  const users = [
    { id: 1, name: 'Ankush Chaudhary', phone: '123-456-7890', email: 'ank@example.com', designation: 'Developer', role: 'Admin', isApproved: false },
    { id: 2, name: 'Shivam Jha', phone: '234-567-8901', email: 'shiv@example.com', designation: 'Manager', role: 'Lead', isApproved: false },
    { id: 3, name: 'Shivam Jha', phone: '234-567-8901', email: 'shiv@example.com', designation: 'Manager', role: 'Lead', isApproved: false },
    // Add more users here
  ];

  const filteredUsers = searchTerm
    ? users.filter(user => user.name.toLowerCase().includes(searchTerm.toLowerCase()))
    : users;

  return (
    <div className="p-4">
      <div className="text-lg font-bold mb-3 text-gray-900">Hi Admin</div>

      <div className="mb-4">
        <input
          type="text"
          placeholder="Search by name..."
          className="w-full p-2 rounded border"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>

      <div className="bg-blue-200 p-4 rounded shadow mb-4">
        <h2 className="text-lg font-bold mb-3 text-gray-900">Create New Role</h2>
        <div className="flex gap-4">
          <input type="text" placeholder="Role Title" className="border p-2 rounded" />
          <input type="color" className="border p-2 rounded" />
          <button className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded transition duration-300">Create</button>
        </div>
      </div>

      <div className="bg-green-200 p-4 rounded shadow mb-4">
        <h2 className="text-lg font-bold mb-3 text-gray-900">Approve Members</h2>
      </div>

      <div className="bg-blue-200 p-4 rounded shadow">
        <table className="w-full text-sm text-left text-gray-500 border-collapse">
          <thead className="text-xs text-gray-700 uppercase bg-blue-300">
            <tr>
              <th className="border border-gray-800 px-6 py-3 text-gray-900">Slno</th>
              <th className="border border-gray-800 px-6 py-3 text-gray-900">Name</th>
              <th className="border border-gray-800 px-6 py-3 text-gray-900">Phone</th>
              <th className="border border-gray-800 px-6 py-3 text-gray-900">Email</th>
              <th className="border border-gray-800 px-6 py-3 text-gray-900">Designation</th>
              <th className="border border-gray-800 px-6 py-3 text-gray-900">Role</th>
              <th className="border border-gray-800 px-6 py-3 text-gray-900">Block User</th>
            </tr>
          </thead>
          <tbody>
            {filteredUsers.map((user) => (
              <tr key={user.id} className="bg-white hover:bg-gray-50">
                <td className="border border-gray-800 px-6 py-4 text-gray-900">{user.id}</td>
                <td className="border border-gray-800 px-6 py-4 text-gray-900">{user.name}</td>
                <td className="border border-gray-800 px-6 py-4 text-gray-900">{user.phone}</td>
                <td className="border border-gray-800 px-6 py-4 text-gray-900">{user.email}</td>
                <td className="border border-gray-800 px-6 py-4 text-gray-900">{user.designation}</td>
                <td className="border border-gray-800 px-6 py-4 text-gray-900">
                  <select className="border border-gray-800 rounded p-2 bg-white text-gray-900">
                    {roles.map(role => (
                      <option key={role} value={role} selected={role === user.role}>
                        {role}
                      </option>
                    ))}
                  </select>
                </td>
                <td className="border border-gray-800 px-6 py-4 text-gray-900">
                  <button className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded transition duration-300">Block</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default RoleAssignmentPage;
                 