import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="bg-gray-900 text-white p-4 flex justify-between items-center padding-x-8">
      <div className="text-xl font-bold">🏙️ NagarSeva</div>
      <br />
      <div className="flex gap-6 text-sm">
        <Link to="/" className="hover:underline">
          Home
        </Link>
        <br />
        <Link to="/login" className="hover:underline">
          Citizen Login
        </Link>
        <br />
        <Link to="/admin/login" className="hover:underline">
          Admin Login
        </Link>
      </div>
    </nav>
  );
}

export default Navbar;
