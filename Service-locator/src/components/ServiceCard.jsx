import React from "react";

const ServiceCard = ({ name, description, distance,  contactNumber }) => {
  return (
    <div className="bg-white rounded-lg shadow-md p-6 transform transition-transform duration-200 hover:scale-105">
      <h3 className="text-xl font-bold text-gray-800">{name}</h3>
      <p className="text-gray-600 my-4">{description}</p>
      <p className="text-sm text-blue-600 font-semibold">
        Distance: {distance} km
      </p>
      <p className="text-blue-500 mt-4">Contact: {contactNumber}</p>
    </div>
  );
};

export default ServiceCard;

