import React, { useState, useEffect} from 'react';
import axios from 'axios';
import Modal from '@mui/material/Modal';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

const Crud = () => {
  const [users, setUsers] = useState([]);
  const [filteredUsers, setFilteredUsers] = useState([]);
  const [editModal, setEditModal] = useState(false);
  const handleClose = () => setEditModal(false);
  const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
  };

  const getallUsers = async () => {
    try {
      const result = await axios.get('http://localhost:8000/users');
      setUsers(result.data);
      setFilteredUsers(result.data);
      console.log("usrs",result.data);
    } catch (error) {
      console.error("Error fetching users:", error);
    }
  };
  

  useEffect(() => {
    getallUsers();
  },[]);

  const handleSearch = (event) => {
    console.log("search",event.target.value);
    const searchTerm = event.target.value;
    const filter = users.filter((item) => 
      item.name.toLowerCase().includes(searchTerm.toLowerCase())
    )
    setFilteredUsers(filter); 
  }

  const handleEdit = async(item) => {
    console.log("item",item);
    setEditModal(true);
    

    try{
  
    }catch(error){
      console.error('error',error)
    }


  }

  const handleDelete = () => {
     
  }

  return (
    <div className="p-8 bg-gray-100 min-h-screen">
      <div className="text-2xl font-bold text-green-700">Office Members Details</div>
      <hr className='text-gray-400 mt-2 mb-6'/> 

      <div className="flex justify-between mb-6">
        <input
          type="search"
          placeholder="Search for name"
          onChange={handleSearch}
          className="px-4 py-2 border border-gray-300 rounded-lg w-1/3 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <button className="px-6 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-all">
          Add Members
        </button>
      </div>

      <table className="min-w-full bg-white border border-gray-200 rounded-lg shadow-sm">
        <thead className="bg-gray-200">
          <tr>
            <th className="px-4 py-2 border text-left">S.No</th>
            <th className="px-4 py-2 border text-left">Name</th>
            <th className="px-4 py-2 border text-left">Age</th>
            <th className="px-4 py-2 border text-left">City</th>
            <th className="px-4 py-2 border text-left">Edit</th>
            <th className="px-4 py-2 border text-left">Delete</th>
          </tr>
        </thead>
        <tbody>
      {filteredUsers.length === 0 ? (
        <tr>
          <td colSpan="6" className="text-center py-4">
            No Matching Data
          </td>  
        </tr>
      ) : (
        <>
          {filteredUsers.map((user) => (
            <tr key={user.id} className='hover:bg-gray-100'>
              <td className="px-4 py-2 border">{user.id}</td>
              <td className="px-4 py-2 border">{user.name}</td>
              <td className="px-4 py-2 border">{user.age}</td>
              <td className="px-4 py-2 border">{user.city}</td>
              <td onClick={() => handleEdit(user)} className="px-4 py-2 border text-blue-500 cursor-pointer hover:underline">
                Edit
              </td>
              <td onClick={handleDelete} className="px-4 py-2 border text-red-500 cursor-pointer hover:underline">
                Delete
              </td>
            </tr>
          ))}
        </>
      )}
      </tbody>

      </table>


      <Modal
        open={editModal}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
        >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            Text in a modal
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            Duis mollis, est non commodo luctus, nisi erat porttitor ligula.
            
          </Typography>
        </Box>
        </Modal>

    </div>
  )
}

export default Crud
