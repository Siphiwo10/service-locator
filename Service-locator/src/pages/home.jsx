import React from "react";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate(); // Initialize navigate

  const services = [
    {
      id: 1,
      title: "Plumbing Services",
      description: "Expert plumbers ready to fix leaks, install fixtures, and more.",
      image: "https://i.pinimg.com/736x/be/88/4d/be884d7fbb3e66da647ce269ae314191.jpg",
    },
    {
      id: 2,
      title: "Electrical Services",
      description: "Licensed electricians for all your wiring and repair needs.",
      image: "https://phase3pumps.co.za/wp-content/uploads/2020/09/ELECTRICAL2.png",
    },
    {
      id: 3,
      title: "House Cleaning",
      description: "Reliable cleaners to keep your space spotless and organized.",
      image: "https://img.freepik.com/free-vector/poster-template-house-cleaning-services-with-various-cleaning-items_1416-1251.jpg"
    },
    {
      id: 4,
      title: "Gardening Services",
      description: "Professional gardening and landscaping services for your yard.",
      image: "https://greenhands.co.za/wp-content/uploads/2019/03/gardenservice.png",
    },
  ];

  const handleGetStarted = () => {
    navigate("/booking"); // Navigate to the booking page
  };

  return (
    <div className="max-w-screen-xl mx-auto py-8 px-4">
      {/* Welcome Section */}
      <div className="text-center mb-12">
        <h2 className="text-4xl font-bold mb-4">Welcome to ServiceLocator</h2>
        <p className="text-lg">
          Your one-stop platform to find and book trusted local service providers.
        </p>
      </div>

      {/* Services Carousel */}
      <div className="mb-12">
        <h3 className="text-2xl font-bold text-center mb-6">Our Featured Services</h3>
        <div className="flex gap-4 overflow-x-auto py-4 flex-wrap justify-center">
          {services.map((service) => (
            <div
              key={service.id}
              className="min-w-[250px] flex-shrink-0 bg-white rounded shadow-md p-4"
            >
              <img
                src={service.image}
                alt={service.title}
                className="w-full h-32 object-cover rounded mb-4"
              />
              <h4 className="text-lg font-bold">{service.title}</h4>
              <p className="text-sm mt-2">{service.description}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Key Features */}
      <div className="mb-12">
        <h3 className="text-2xl font-bold text-center mb-6">Why Choose Us?</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="p-6 bg-white shadow rounded">
            <h4 className="text-lg font-bold mb-2">Trusted Providers</h4>
            <p>All our service providers are vetted and verified for quality and trustworthiness.</p>
          </div>
          <div className="p-6 bg-white shadow rounded">
            <h4 className="text-lg font-bold mb-2">Easy Booking</h4>
            <p>Book services with just a few clicks—quick and hassle-free.</p>
          </div>
          <div className="p-6 bg-white shadow rounded">
            <h4 className="text-lg font-bold mb-2">Customer Support</h4>
            <p>Our support team is available 24/7 to help you with your needs.</p>
          </div>
        </div>
      </div>

      {/* Call to Action */}
      <div className="text-center py-12 bg-blue-500 text-white rounded">
        <h3 className="text-3xl font-bold mb-4">Ready to Book a Service?</h3>
        <p className="mb-6">
          Join thousands of satisfied customers using ServiceLocator today.
        </p>
        <button
          className="bg-white text-blue-500 py-2 px-4 rounded font-bold hover:bg-gray-100"
          onClick={handleGetStarted} // Trigger the navigation on click
        >
          Get Started
        </button>
      </div>
    </div>
  );
};

export default Home;

