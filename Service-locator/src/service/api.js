export const mockServices = [
    {
      id: 1,
      name: "John's Gardening",
      description: "Professional gardening services",
      distance: 2.5, // in km
    },
    {
      id: 2,
      name: "Plumber Pro",
      description: "Expert plumbing solutions",
      distance: 3.8,
    },
    {
      id: 3,
      name: "Electric Fix",
      description: "Electrical installations and repairs",
      distance: 4.1,
    },
  ];
  
  // Simulate fetching services based on location
  export const fetchMockServices = (lat, lng) => {
    // Simulate nearby services (in real API, you'd filter based on lat/lng)
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(mockServices);
      }, 1000);
    });
  };
  
