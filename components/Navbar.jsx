import { ChevronDown, Menu, Moon, Sun, X } from "lucide-react";
import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { useTheme } from "../context/ThemeContext.jsx";

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);
  const location = useLocation();
  const { theme, toggleTheme } = useTheme();

  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => {
    setIsOpen(false);
    setActiveDropdown(null);
  };

  const toggleDropdown = (name) => {
    if (activeDropdown === name) {
      setActiveDropdown(null);
    } else {
      setActiveDropdown(name);
    }
  };

  const navLinks = [
    {
      name: "About",
      path: "/about",
      dropdown: [
        { name: "Who We Are", path: "/about" },
        { name: "Meet the Team", path: "/about#team" },
        { name: "Our Partners", path: "/about#partners" },
        { name: "Our Approach", path: "/about#approach" },
      ],
    },
    {
      name: "Our Work",
      path: "/work",
      dropdown: [
        { name: "Investigations", path: "/work" },
        { name: "The Liability Report", path: "/reports?type=Liability" },
        { name: "The Inquisitor File", path: "/reports?type=Inquisitor" },
      ],
    },
    {
      name: "Reports",
      path: "/reports",
      dropdown: [
        { name: "All Reports", path: "/reports" },
        { name: "Country Dossiers", path: "/reports?filter=country" },
        { name: "Sector Dossiers", path: "/reports?filter=sector" },
      ],
    },
    {
      name: "Campaigns",
      path: "/campaigns",
      dropdown: [
        { name: "Active Campaigns", path: "/campaigns" },
        { name: "Past Campaigns", path: "/campaigns#past" },
      ],
    },
    { name: "Podcast", path: "/podcast" },
    { name: "Careers", path: "/careers" },
    { name: "Contact", path: "/contact" },
    { name: "Dashboard", path: "/dashboard" },
  ];

  return (
    <nav className="bg-white/90 dark:bg-black backdrop-blur-md border-b border-slate-200 dark:border-slate-800 sticky top-0 z-50 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20">
          <div className="flex items-center">
            <Link
              to="/"
              className="flex-shrink-0 flex items-center gap-2 group"
              onClick={closeMenu}
            >
              <div className="w-10 h-10 bg-gradient-to-br from-red-900 to-red-700 dark:from-red-700 dark:to-red-900 rounded-lg flex items-center justify-center text-white transform group-hover:rotate-12 transition-transform duration-300">
                {/* <Globe size={24} /> */}
                <img src="https://i.ibb.co.com/672HyBWg/m88-2.jpg" alt="logo" />
              </div>
            </Link>
          </div>

          {/* Desktop Menu */}
          <div className="hidden lg:flex items-center space-x-1">
            {navLinks.map((link) => (
              <div key={link.name} className="relative group">
                {link.dropdown ? (
                  <button className="flex items-center px-3 py-2 rounded-md text-sm font-medium text-slate-700 dark:text-slate-300 hover:text-red-700 dark:hover:text-red-400 hover:bg-slate-50 hover:underline dark:hover:bg-slate-800 transition-all duration-200">
                    {link.name}
                    <ChevronDown
                      size={14}
                      className="ml-1 group-hover:rotate-180 transition-transform duration-200"
                    />

                    {/* Hover Dropdown */}
                    <div className="absolute left-0 top-full mt-0 w-56 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 transform translate-y-2 group-hover:translate-y-0 z-50 pt-2">
                      <div className="rounded-md shadow-xl ring-1 ring-black ring-opacity-5 overflow-hidden bg-white dark:bg-slate-800 border border-slate-100 dark:border-slate-700">
                        <div className="py-1">
                          {link.dropdown.map((subItem) => (
                            <Link
                              key={subItem.name}
                              to={subItem.path}
                              className="block px-4 py-2 text-sm text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-700 hover:text-red-700 dark:hover:text-red-400"
                            >
                              {subItem.name}
                            </Link>
                          ))}
                        </div>
                      </div>
                    </div>
                  </button>
                ) : (
                  <Link
                    to={link.path}
                    className={`px-3 py-2 rounded-md text-sm font-medium transition-all duration-200 ${
                      location.pathname === link.path
                        ? "text-red-700 dark:text-red-400 bg-red-50 dark:bg-slate-800"
                        : "text-slate-700 dark:text-slate-300 hover:text-red-700 dark:hover:text-red-400 hover:bg-slate-50 dark:hover:bg-slate-800"
                    }`}
                  >
                    {link.name}
                  </Link>
                )}
              </div>
            ))}

            <button
              onClick={toggleTheme}
              className="ml-2 p-2 rounded-full text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
              aria-label="Toggle Dark Mode"
            >
              {theme === "dark" ? <Sun size={20} /> : <Moon size={20} />}
            </button>

            <Link to="/authentication" className="ml-3">
              <button
                className="bg-gradient-to-r from-red-900 to-red-600 hover:from-red-800 hover:to-red-600 text-white px-4 py-2 rounded-md text-sm font-medium transition-all shadow-md hover:shadow-lg hover:scale-105
"
              >
                Login
              </button>
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="flex items-center lg:hidden gap-2">
            <button
              onClick={toggleTheme}
              className="p-2 rounded-full text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
            >
              {theme === "dark" ? <Sun size={20} /> : <Moon size={20} />}
            </button>
            <button
              onClick={toggleMenu}
              className="inline-flex items-center justify-center p-2 rounded-md text-slate-700 dark:text-slate-300 hover:text-red-700 dark:hover:text-red-400 hover:bg-slate-100 dark:hover:bg-slate-800 focus:outline-none"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="lg:hidden bg-white dark:bg-slate-900 border-t border-slate-200 dark:border-slate-800 animate-fade-in">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {navLinks.map((link) => (
              <div key={link.name}>
                {link.dropdown ? (
                  <>
                    <button
                      onClick={() => toggleDropdown(link.name)}
                      className="w-full flex justify-between items-center px-3 py-2 rounded-md text-base font-medium text-slate-700 dark:text-slate-300 hover:text-red-700 dark:hover:text-red-400 hover:bg-slate-50 dark:hover:bg-slate-800"
                    >
                      {link.name}
                      <ChevronDown
                        size={16}
                        className={`transform transition-transform ${
                          activeDropdown === link.name ? "rotate-180" : ""
                        }`}
                      />
                    </button>
                    {activeDropdown === link.name && (
                      <div className="pl-4 space-y-1 bg-slate-50 dark:bg-slate-800/50 rounded-md">
                        {link.dropdown.map((subItem) => (
                          <Link
                            key={subItem.name}
                            to={subItem.path}
                            onClick={closeMenu}
                            className="block px-3 py-2 rounded-md text-sm font-medium text-slate-600 dark:text-slate-400 hover:text-red-700 dark:hover:text-red-400"
                          >
                            {subItem.name}
                          </Link>
                        ))}
                      </div>
                    )}
                  </>
                ) : (
                  <Link
                    to={link.path}
                    onClick={closeMenu}
                    className="block px-3 py-2 rounded-md text-base font-medium text-slate-700 dark:text-slate-300 hover:text-red-700 dark:hover:text-red-400 hover:bg-slate-50 dark:hover:bg-slate-800"
                  >
                    {link.name}
                  </Link>
                )}
              </div>
            ))}
            <div className="pt-4 pb-2 border-t border-slate-200 dark:border-slate-800">
              <Link
                to="/authentication"
                onClick={closeMenu}
                className="block w-full text-center bg-gradient-to-r from-red-700 to-red-600 text-white px-4 py-3 rounded-md font-medium shadow-md"
              >
                Login
              </Link>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};
