import React, { useState } from "react";

export default function Crud() {
  const [users, setUsers] = useState([
    { id: 1, name: "John Doe", email: "john@example.com" },
    { id: 2, name: "Jane Doe", email: "jane@example.com" },
  ]);

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [editingId, setEditingId] = useState(null);

  const addUser = () => {
    if (!name || !email) return;
    setUsers([...users, { id: Date.now(), name, email }]);
    setName("");
    setEmail("");
  };

  const editUser = (user) => {
    setEditingId(user.id);
    setName(user.name);
    setEmail(user.email);
  };

  const updateUser = () => {
    setUsers(users.map(user => user.id === editingId ? { id: editingId, name, email } : user));
    setEditingId(null);
    setName("");
    setEmail("");
  };

  const deleteUser = (id) => {
    setUsers(users.filter(user => user.id !== id));
  };

  return (
    <div className="p-6 max-w-lg mx-auto bg-white shadow-md rounded-lg">
      <h2 className="text-xl font-bold mb-4">React CRUD App</h2>
      
      <input 
        type="text" placeholder="Name" value={name} 
        onChange={(e) => setName(e.target.value)}
        className="border p-2 w-full rounded mb-2"
      />
      
      <input 
        type="email" placeholder="Email" value={email} 
        onChange={(e) => setEmail(e.target.value)}
        className="border p-2 w-full rounded mb-2"
      />
      
      {editingId ? (
        <button onClick={updateUser} className="bg-green-500 text-white px-4 py-2 rounded">
          Update User
        </button>
      ) : (
        <button onClick={addUser} className="bg-blue-500 text-white px-4 py-2 rounded">
          Add User
        </button>
      )}

      <div className="mt-4">
        {users.map((user) => (
          <div key={user.id} className="border p-3 flex justify-between mb-2 rounded">
            <div>
              <p className="font-bold">{user.name}</p>
              <p className="text-gray-500">{user.email}</p>
            </div>
            <div>
              <button onClick={() => editUser(user)} className="bg-yellow-500 text-white px-2 py-1 rounded mr-2">
                Edit
              </button>
              <button onClick={() => deleteUser(user.id)} className="bg-red-500 text-white px-2 py-1 rounded">
                Delete
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
