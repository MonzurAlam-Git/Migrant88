import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ChevronDown, Globe } from 'lucide-react';

export const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const location = useLocation();

  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => {
    setIsOpen(false);
    setActiveDropdown(null);
  };

  const toggleDropdown = (name: string) => {
    if (activeDropdown === name) {
      setActiveDropdown(null);
    } else {
      setActiveDropdown(name);
    }
  };

  const navLinks = [
    { name: 'Home', path: '/' },
    { 
      name: 'About', 
      path: '/about',
      dropdown: [
        { name: 'Who We Are', path: '/about' },
        { name: 'Meet the Team', path: '/about#team' },
        { name: 'Our Partners', path: '/about#partners' },
        { name: 'Our Approach', path: '/about#approach' }
      ]
    },
    { 
      name: 'Our Work', 
      path: '/work',
      dropdown: [
        { name: 'Investigations', path: '/work' },
        { name: 'The Liability Report', path: '/reports?type=Liability' },
        { name: 'The Inquisitor File', path: '/reports?type=Inquisitor' }
      ]
    },
    { 
      name: 'Reports', 
      path: '/reports',
      dropdown: [
        { name: 'All Reports', path: '/reports' },
        { name: 'Country Dossiers', path: '/reports?filter=country' },
        { name: 'Sector Dossiers', path: '/reports?filter=sector' }
      ]
    },
    { 
      name: 'Campaigns', 
      path: '/campaigns',
      dropdown: [
        { name: 'Active Campaigns', path: '/campaigns' },
        { name: 'Past Campaigns', path: '/campaigns#past' }
      ]
    },
    { name: 'Podcast', path: '/podcast' },
    { name: 'Careers', path: '/careers' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <nav className="bg-white border-b border-slate-200 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20">
          <div className="flex items-center">
            <Link to="/" className="flex-shrink-0 flex items-center gap-2" onClick={closeMenu}>
              <div className="w-10 h-10 bg-slate-900 rounded-lg flex items-center justify-center text-white">
                <Globe size={24} />
              </div>
              <span className="font-bold text-xl tracking-tight text-slate-900">MIGRANT88</span>
            </Link>
          </div>

          {/* Desktop Menu */}
          <div className="hidden lg:flex items-center space-x-1">
            {navLinks.map((link) => (
              <div key={link.name} className="relative group">
                {link.dropdown ? (
                  <button 
                    className="flex items-center px-3 py-2 rounded-md text-sm font-medium text-slate-700 hover:text-blue-700 hover:bg-slate-50 transition-colors"
                  >
                    {link.name}
                    <ChevronDown size={14} className="ml-1" />
                    
                    {/* Hover Dropdown */}
                    <div className="absolute left-0 top-full mt-0 w-56 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 transform z-50 pt-2">
                        <div className="rounded-md shadow-lg ring-1 ring-black ring-opacity-5 overflow-hidden bg-white">
                            <div className="py-1">
                                {link.dropdown.map((subItem) => (
                                    <Link
                                        key={subItem.name}
                                        to={subItem.path}
                                        className="block px-4 py-2 text-sm text-slate-700 hover:bg-slate-100 hover:text-blue-700"
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
                    className={`px-3 py-2 rounded-md text-sm font-medium transition-colors ${location.pathname === link.path ? 'text-blue-700 bg-blue-50' : 'text-slate-700 hover:text-blue-700 hover:bg-slate-50'}`}
                  >
                    {link.name}
                  </Link>
                )}
              </div>
            ))}
             <Link to="/contact#secure" className="ml-4">
                <button className="bg-red-700 hover:bg-red-800 text-white px-4 py-2 rounded-md text-sm font-medium transition-colors">
                    Speak Up (Secure)
                </button>
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="flex items-center lg:hidden">
            <button
              onClick={toggleMenu}
              className="inline-flex items-center justify-center p-2 rounded-md text-slate-700 hover:text-blue-700 hover:bg-slate-100 focus:outline-none"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="lg:hidden bg-white border-t border-slate-200">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {navLinks.map((link) => (
              <div key={link.name}>
                {link.dropdown ? (
                  <>
                    <button
                      onClick={() => toggleDropdown(link.name)}
                      className="w-full flex justify-between items-center px-3 py-2 rounded-md text-base font-medium text-slate-700 hover:text-blue-700 hover:bg-slate-50"
                    >
                      {link.name}
                      <ChevronDown size={16} className={`transform transition-transform ${activeDropdown === link.name ? 'rotate-180' : ''}`} />
                    </button>
                    {activeDropdown === link.name && (
                      <div className="pl-4 space-y-1 bg-slate-50">
                        {link.dropdown.map((subItem) => (
                          <Link
                            key={subItem.name}
                            to={subItem.path}
                            onClick={closeMenu}
                            className="block px-3 py-2 rounded-md text-sm font-medium text-slate-600 hover:text-blue-700"
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
                    className="block px-3 py-2 rounded-md text-base font-medium text-slate-700 hover:text-blue-700 hover:bg-slate-50"
                  >
                    {link.name}
                  </Link>
                )}
              </div>
            ))}
            <div className="pt-4 pb-2 border-t border-slate-200">
                <Link 
                    to="/contact#secure" 
                    onClick={closeMenu}
                    className="block w-full text-center bg-red-700 text-white px-4 py-3 rounded-md font-medium"
                >
                    Speak Up (Secure Reporting)
                </Link>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};