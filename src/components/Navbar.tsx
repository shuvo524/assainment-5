import hamburgerIcon from "../assets/hamburger.png";
import logo from "../assets/logo-text.png";

function Navbar() {
  return (
    <nav className="sticky top-0 z-50 bg-white shadow-sm">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-4 md:px-8 py-4">
        <img src={hamburgerIcon} alt="menu" className="w-6 h-6 md:hidden" />

        <img
          src={logo}
          alt="Dev Stack"
          className="h-8 cursor-pointer"
        />

        <ul className="hidden md:flex items-center gap-8 text-gray-700 font-medium">
          <li className="hover:text-pink-500 cursor-pointer transition-colors">Home</li>
          <li className="hover:text-pink-500 cursor-pointer transition-colors">Technologies</li>
          <li className="hover:text-pink-500 cursor-pointer transition-colors">Projects</li>
          <li className="hover:text-pink-500 cursor-pointer transition-colors">About</li>
          <li className="hover:text-pink-500 cursor-pointer transition-colors">Contact</li>
        </ul>

        <div className="flex items-center gap-2">
          <button className="btn btn-ghost btn-sm hover:rounded-full transition-all">
            Sign In
          </button>
          <button className="btn btn-secondary btn-sm rounded-full">
            Sign Up
          </button>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;