import React, { useState } from 'react'

function CreatePost() {
  const [formData, setFormData] = useState({
    unitNo: '',
    rentalRate: '',
    ICNo: '',
    tenantName: '',
    lastLogin: new Date().toISOString()
  });
  

  const handleSubmit = (e) => {
    e.preventDefault();
    
  };

  return (
    <div className="max-w-md mx-auto mt-8 p-6 bg-white rounded-lg shadow-md">

      <form onSubmit={handleSubmit}>
        <h2 className="text-2xl font-bold mb-6 text-center">User Registration</h2>
        
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="username">
            Username
          </label>
          <input
            type="text"
            id="username"
            name="username"
            value={formData.username}
            onChange={(e) => setFormData({ ...formData, username: e.target.value })}
            className="w-full px-3 py-2 border rounded-lg"
          />
        </div>
        
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="name">
            Full Name
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={(e)=> setFormData({...formData, name: e.target.value})}
            className="w-full px-3 py-2 border rounded-lg"
          />
        </div>
        
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">
            Password
          </label>
          <input
            type="password"
            id="password"
            name="password"
            value={formData.password}
            onChange={(e)=> setFormData({...formData, password: e.target.value})}
            className={`w-full px-3 py-2 border rounded-lg`}
          />

        </div>
        
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="contactNo">
            Contact Number
          </label>
          <input
            type="text"
            id="contactNo"
            name="contactNo"
            value={formData.contactNo}
            onChange={(e)=> setFormData({...formData, contactNo: e.target.value})}
            className="w-full px-3 py-2 border rounded-lg"
          />
        </div>
        
        <button
          type="submit"
          className="w-full bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-lg focus:outline-none focus:shadow-outline"
        >
          Register
        </button>
      </form>
    </div>
  );
}

export default CreatePost