import React, { useState } from "react";

const Profile = () => {
  const [userInfo, setUserInfo] = useState({
    name: "John Doe",
    email: "johndoe@example.com",
    phone: "123-456-7890",
    address: "123 Main Street, City, Country",
  });

  const handleEdit = () => {
    // Add functionality for editing profile details
    alert("Edit profile functionality coming soon!");
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
      <div className="w-full max-w-md p-8 bg-white rounded shadow">
        <h1 className="text-2xl font-bold text-center mb-4">Profile</h1>
        <div className="space-y-4">
          <div>
            <label className="block text-sm font-medium">Name</label>
            <p className="p-2 border rounded bg-gray-50">{userInfo.name}</p>
          </div>
          <div>
            <label className="block text-sm font-medium">Email</label>
            <p className="p-2 border rounded bg-gray-50">{userInfo.email}</p>
          </div>
          <div>
            <label className="block text-sm font-medium">Phone</label>
            <p className="p-2 border rounded bg-gray-50">{userInfo.phone}</p>
          </div>
          <div>
            <label className="block text-sm font-medium">Address</label>
            <p className="p-2 border rounded bg-gray-50">{userInfo.address}</p>
          </div>
          <button
            onClick={handleEdit}
            className="w-full p-2 mt-4 text-white bg-blue-500 rounded hover:bg-blue-600"
          >
            Edit Profile
          </button>
        </div>
      </div>
    </div>
  );
};

export default Profile;

