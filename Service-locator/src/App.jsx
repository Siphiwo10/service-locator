import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Search from "./pages/Search";
import Booking from "./pages/Booking";
import Profile from "./pages/Profile";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

function App() {
  return (
    <Router>
      <div className="flex flex-col min-h-screen bg-gray-50">
        <Navbar />
        <main className="flex-grow flex justify-center items-center px-4">
          <Routes>
            <Route path="/" element={<Login />} />
            <Route path="/home" element={<Home />} /> 
            <Route path="/login" element={<Login />} />
            <Route path="/search" element={<Search />} />
            <Route path="/booking" element={<Booking />} />
            <Route path="/profile" element={<Profile />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;

