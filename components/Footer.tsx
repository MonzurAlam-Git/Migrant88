import React from 'react';
import { Link } from 'react-router-dom';
import { Twitter, Linkedin, Facebook, Youtube, Mail } from 'lucide-react';
import { Button } from './Button';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-900 text-slate-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          
          {/* Brand & Mission */}
          <div className="space-y-4">
            <h3 className="text-white text-lg font-bold tracking-wider">MIGRANT88</h3>
            <p className="text-sm leading-relaxed text-slate-400">
              Migrant88 is an independent investigative research organisation committed to transparency, accountability, and worker rights. Decoding Power. Demanding Justice.
            </p>
            <div className="flex space-x-4 pt-2">
              <a href="#" className="text-slate-400 hover:text-white transition-colors"><Twitter size={20} /></a>
              <a href="#" className="text-slate-400 hover:text-white transition-colors"><Linkedin size={20} /></a>
              <a href="#" className="text-slate-400 hover:text-white transition-colors"><Facebook size={20} /></a>
              <a href="#" className="text-slate-400 hover:text-white transition-colors"><Youtube size={20} /></a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white text-sm font-semibold uppercase tracking-wider mb-4">Our Work</h4>
            <ul className="space-y-2 text-sm">
              <li><Link to="/work" className="hover:text-white transition-colors">Investigations</Link></li>
              <li><Link to="/reports" className="hover:text-white transition-colors">The Liability Report</Link></li>
              <li><Link to="/reports" className="hover:text-white transition-colors">The Inquisitor File</Link></li>
              <li><Link to="/campaigns" className="hover:text-white transition-colors">Campaigns</Link></li>
              <li><Link to="/podcast" className="hover:text-white transition-colors">Podcast</Link></li>
            </ul>
          </div>

          {/* About & Action */}
          <div>
            <h4 className="text-white text-sm font-semibold uppercase tracking-wider mb-4">About Us</h4>
            <ul className="space-y-2 text-sm">
              <li><Link to="/about" className="hover:text-white transition-colors">Who We Are</Link></li>
              <li><Link to="/about" className="hover:text-white transition-colors">Team</Link></li>
              <li><Link to="/careers" className="hover:text-white transition-colors">Careers</Link></li>
              <li><Link to="/contact" className="hover:text-white transition-colors">Contact</Link></li>
              <li><Link to="/contact#secure" className="hover:text-red-400 transition-colors">Secure Reporting</Link></li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h4 className="text-white text-sm font-semibold uppercase tracking-wider mb-4">Stay Connected</h4>
            <p className="text-sm text-slate-400 mb-4">
              Stay informed about new investigations and campaigns.
            </p>
            <form className="space-y-2">
              <input 
                type="email" 
                placeholder="Email Address" 
                className="w-full px-3 py-2 bg-slate-800 border border-slate-700 rounded-md focus:outline-none focus:ring-1 focus:ring-blue-500 text-white placeholder-slate-500 text-sm"
              />
              <Button variant="secondary" size="sm" className="w-full">
                Sign Up for Updates
              </Button>
            </form>
          </div>

        </div>

        <div className="border-t border-slate-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center text-xs text-slate-500">
          <p>&copy; {new Date().getFullYear()} Migrant88. All rights reserved.</p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="#" className="hover:text-white">Privacy Policy</a>
            <a href="#" className="hover:text-white">Terms of Use</a>
            <a href="#" className="hover:text-white">Cookie Policy</a>
          </div>
        </div>
      </div>
    </footer>
  );
};