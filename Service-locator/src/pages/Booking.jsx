import React, { useState } from "react";

const Booking = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [service, setService] = useState("");
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [message, setMessage] = useState(""); // State to store success message

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Booking Details: ", { name, email, service, date, time });

    // Set success message after form submission
    setMessage("Your booking has been successfully submitted!");

    // Optionally, reset the form fields if you want
    setName("");
    setEmail("");
    setService("");
    setDate("");
    setTime("");
  };

  return (
    <div className="flex justify-center items-center h-screen bg-gray-100">
      <div className="w-full max-w-lg p-8 space-y-4 bg-white rounded shadow">
        <h1 className="text-2xl font-bold text-center">Book a Service</h1>
        {message && <p className="text-green-500 text-center mb-4">{message}</p>} {/* Display message if available */}
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label htmlFor="name" className="block text-sm font-medium">
              Name
            </label>
            <input
              type="text"
              id="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full p-2 border rounded"
              placeholder="Enter your name"
              required
            />
          </div>
          <div>
            <label htmlFor="email" className="block text-sm font-medium">
              Email
            </label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full p-2 border rounded"
              placeholder="Enter your email"
              required
            />
          </div>
          <div>
            <label htmlFor="service" className="block text-sm font-medium">
              Service
            </label>
            <select
              id="service"
              value={service}
              onChange={(e) => setService(e.target.value)}
              className="w-full p-2 border rounded"
              required
            >
              <option value="">Select a service</option>
              <option value="gardening">Gardening</option>
              <option value="plumbing">Plumbing</option>
              <option value="electrical">Electrical Work</option>
              <option value="painting">Painting</option>
            </select>
          </div>
          <div>
            <label htmlFor="date" className="block text-sm font-medium">
              Date
            </label>
            <input
              type="date"
              id="date"
              value={date}
              onChange={(e) => setDate(e.target.value)}
              className="w-full p-2 border rounded"
              required
            />
          </div>
          <div>
            <label htmlFor="time" className="block text-sm font-medium">
              Time
            </label>
            <input
              type="time"
              id="time"
              value={time}
              onChange={(e) => setTime(e.target.value)}
              className="w-full p-2 border rounded"
              required
            />
          </div>
          <button
            type="submit"
            className="w-full p-2 text-white bg-blue-500 rounded hover:bg-blue-600"
          >
            Book Now
          </button>
        </form>
      </div>
    </div>
  );
};

export default Booking;

