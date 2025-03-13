import { useState } from "react";
import { Link } from "react-router-dom";
import { FaBars, FaTimes, FaFacebookF, FaTiktok } from "react-icons/fa";

interface NavbarProps {
  visible: boolean;
  isTransparent: boolean;
}

const Navbar = ({ visible, isTransparent }: NavbarProps) => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header
      className={`fixed top-0 left-0 w-full transition-all duration-300 z-50 ${
        visible ? "translate-y-0" : "-translate-y-full"
      } ${isTransparent ? "bg-transparent" : "bg-[#3c509f] shadow-lg"}`}
    >
      <div className={`${ menuOpen ? "hidden" : "flex" } container mx-auto justify-between items-center p-4`}>
        {/* Logo */}
        <Link to="/" className="text-white text-2xl font-bold">
          {/* <img src="/logo.png" alt="VNTA Logo" className="h-10" /> */}
          <span>Minh Pickleball</span>
        </Link>

        {/* Desktop Menu */}
        <nav className="hidden md:flex items-center space-x-6">
          {["Giới thiệu", "Khóa học Pickleball", "Tin tức"].map((item, index) => (
            <Link
              key={index}
              to="/"
              className="relative text-white hover:text-orange-400 transition-all duration-300"
            >
              {item}
              <span className="absolute left-0 bottom-0 w-0 h-[2px] bg-orange-400 transition-all duration-300 hover:w-full"></span>
            </Link>
          ))}

          {/* Social Icons */}
          <div className="flex space-x-4">
            <a href="https://www.facebook.com/share/1RXjErxbJY/?mibextid=wwXIfr" className="text-white hover:scale-110 transition-transform w-10 h-10 rounded-full flex items-center justify-center bg-blue-600">
              <FaFacebookF size={20} />
            </a>
            <a href="https://www.tiktok.com/@coach_koza?_t=ZS-8ub3JyNnU84&_r=1" className="text-white hover:scale-110 transition-transform w-10 h-10 rounded-full flex items-center justify-center bg-black"><FaTiktok size={20} /></a>
            {/* <a href="#" className="text-white hover:scale-110 transition-transform w-10 h-10 rounded-full flex items-center justify-center bg-red-500"><FaYoutube size={20} /></a> */}
          </div>
        </nav>

        {/* Mobile Menu Button */}
        <button className="md:hidden text-white" onClick={() => setMenuOpen(!menuOpen)}>
          {menuOpen ? <FaTimes size={28} /> : <FaBars size={28} />}
        </button>
      </div>

      {/* Mobile Menu (Animated) */}
      <div
        className={`fixed top-0 right-0 left-0 bottom-0 w-full h-screen overflow-hidden bg-gray-800 text-white transition-transform duration-500 ${
          menuOpen ? "translate-x-0" : "translate-x-full"
        } flex flex-col items-center pt-10`}
      >
        {/* Close Button */}
        <button className="absolute top-4 right-4 text-white" onClick={() => setMenuOpen(false)}>
          <FaTimes size={28} />
        </button>

        {/* Menu Items */}
        {["Giới thiệu", "Khóa học Pickleball", "Tin tức"].map((item, index) => (
          <Link
            key={index}
            to="/"
            className="text-lg py-3 w-full text-center hover:bg-orange-500 transition-colors"
          >
            {item}
          </Link>
        ))}

        {/* Social Icons */}
        <div className="flex space-x-6 mt-6">
           <a href="https://www.facebook.com/share/1RXjErxbJY/?mibextid=wwXIfr" className="text-white hover:scale-110 transition-transform w-10 h-10 rounded-full flex items-center justify-center bg-blue-600">
              <FaFacebookF size={20} />
            </a>
            <a href="https://www.tiktok.com/@coach_koza?_t=ZS-8ub3JyNnU84&_r=1" className="text-white hover:scale-110 transition-transform w-10 h-10 rounded-full flex items-center justify-center bg-black"><FaTiktok size={20} /></a>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
