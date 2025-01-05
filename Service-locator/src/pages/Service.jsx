import { useState } from "react";
import ServiceCard from "../components/ServiceCard";

const Search = () => {
  const [location, setLocation] = useState({ lat: null, lng: null });
  const [error, setError] = useState("");
  const [services, setServices] = useState([]);

  // Mock data for services with contact numbers
  const mockServices = [
    {
      id: 1,
      name: "Plumbing Services",
      description: "Professional plumbing services available 24/7.",
      distance: 1.2,
      contactNumber: "+27 234 567 8901", // Added contact number
    },
    {
      id: 2,
      name: "Electrical Repairs",
      description: "Certified electricians for home and office needs.",
      distance: 2.5,
      contactNumber: "+27 589 567 8902", // Added contact number
    },
    {
      id: 3,
      name: "House Cleaning",
      description: "Affordable and thorough house cleaning services.",
      distance: 3.8,
      contactNumber: "+27 110 567 8903", 
    },
  ];

  // Function to get current location
  const getCurrentLocation = () => {
    if (!navigator.geolocation) {
      setError("Geolocation is not supported by your browser.");
      return;
    }

    navigator.geolocation.getCurrentPosition(
      (position) => {
        const { latitude, longitude } = position.coords;
        setLocation({ lat: latitude, lng: longitude });
        setError("");
        fetchServices(latitude, longitude); 
      },
      () => {
        setError("Unable to retrieve your location.");
      }
    );
  };

  const fetchServices = async (latitude, longitude) => {
    try {
      setServices(mockServices.slice(0, 3)); // Simulating fetching services
    } catch (err) {
      setError("Failed to fetch services. Please try again.");
    }
  };

  return (
    <div className="container mx-auto py-12 flex flex-col items-center">
      <h2 className="text-3xl font-bold text-gray-800 text-center mb-8">
        Discover Services Near You
      </h2>

      <div className="text-center mb-8">
        <button
          onClick={getCurrentLocation}
          className="bg-gradient-to-r from-blue-500 to-blue-700 text-white font-semibold py-3 px-6 rounded-lg hover:opacity-90 shadow-md"
        >
          Use My Location
        </button>
        {error && <p className="text-red-500 mt-4">{error}</p>}
      </div>

      {location.lat && location.lng && (
        <p className="text-gray-600 mb-8 text-lg">
          Your Location: Latitude {location.lat}, Longitude {location.lng}
        </p>
      )}

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {services.length > 0 ? (
          services.map((service) => (
            <ServiceCard
              key={service.id}
              name={service.name}
              description={service.description}
              distance={service.distance}
              contactNumber={service.contactNumber}
            />
          ))
        ) : (
          <p className="text-gray-600 text-lg">
            No services found near your location.
          </p>
        )}
      </div>
    </div>
  );
};

export default Search;

