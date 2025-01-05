import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="bg-blue-600 text-white py-4 px-6 shadow-md">
      <div className="container mx-auto flex justify-between items-center">
        <div className="flex items-center space-x-2">
          {/* Example logo */}
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS3Zf_ER99uXaciUSPpn2ZPeHTm0BoyofP8IQ&s"
            alt="Logo"
            className="w-10 h-10 rounded-full"
          />
          <h1 className="text-2xl font-bold">
            <Link to="/" className="hover:text-gray-200">
              ServiceLocator
            </Link>
          </h1>
        </div>
        <div className="space-x-4">
          <Link
            to="/search"
            className="hover:bg-blue-500 px-3 py-2 rounded transition"
          >
            Search
          </Link>
          <Link
            to="/login"
            className="hover:bg-blue-500 px-3 py-2 rounded transition"
          >
            Login
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

