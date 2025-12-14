import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { Button } from '../components/Button';
import { Lock } from 'lucide-react';

export const Contact: React.FC = () => {
  const location = useLocation();

  useEffect(() => {
    if (location.hash === '#secure') {
      const element = document.getElementById('secure-form');
      if (element) element.scrollIntoView({ behavior: 'smooth' });
    }
  }, [location]);

  return (
    <div className="bg-slate-50 min-h-screen pb-20">
      
      {/* Header */}
      <div className="bg-white border-b border-slate-200 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-4xl font-bold text-slate-900 mb-4">Contact Us</h1>
            <p className="text-slate-600 max-w-2xl mx-auto">
                Reach out to our offices in Belgium, Malaysia, and Bangladesh for general inquiries, or use our secure channel below.
            </p>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 mt-12 space-y-12">
        
        {/* General Contact Form */}
        <div className="bg-white p-8 rounded-lg shadow-sm border border-slate-200">
            <h2 className="text-2xl font-bold text-slate-900 mb-6">General Inquiry</h2>
            <form className="space-y-4">
                <div className="grid md:grid-cols-2 gap-4">
                    <div>
                        <label className="block text-sm font-medium text-slate-700 mb-1">Your Name</label>
                        <input type="text" className="w-full px-3 py-2 border border-slate-300 rounded-md focus:ring-blue-500 focus:border-blue-500" />
                    </div>
                    <div>
                        <label className="block text-sm font-medium text-slate-700 mb-1">Email Address</label>
                        <input type="email" className="w-full px-3 py-2 border border-slate-300 rounded-md focus:ring-blue-500 focus:border-blue-500" />
                    </div>
                </div>
                <div>
                    <label className="block text-sm font-medium text-slate-700 mb-1">Subject</label>
                    <input type="text" className="w-full px-3 py-2 border border-slate-300 rounded-md focus:ring-blue-500 focus:border-blue-500" />
                </div>
                <div>
                    <label className="block text-sm font-medium text-slate-700 mb-1">Message</label>
                    <textarea rows={4} className="w-full px-3 py-2 border border-slate-300 rounded-md focus:ring-blue-500 focus:border-blue-500"></textarea>
                </div>
                <Button variant="primary">Submit Inquiry</Button>
            </form>
        </div>

        {/* Secure Form */}
        <div id="secure-form" className="bg-slate-800 p-8 rounded-lg shadow-lg border border-slate-700 text-white relative overflow-hidden">
            <div className="absolute top-0 right-0 p-4 opacity-10">
                <Lock size={120} />
            </div>
            
            <div className="flex items-center mb-6">
                <Lock className="text-red-500 mr-3" size={32} />
                <h2 className="text-2xl font-bold text-white">Speak Up (Secure Reporting)</h2>
            </div>
            
            <p className="text-slate-300 mb-8 max-w-2xl">
                Share information safely and confidentially. Your identity will never be revealed. 
                All submissions are encrypted. Use this form to report forced labour, trafficking, or corruption.
            </p>

            <form className="space-y-4 relative z-10">
                <div className="grid md:grid-cols-2 gap-4">
                    <div>
                        <label className="block text-sm font-medium text-slate-300 mb-1">Location of Incident</label>
                        <input type="text" className="w-full px-3 py-2 bg-slate-900 border border-slate-600 rounded-md focus:ring-red-500 focus:border-red-500 text-white" />
                    </div>
                    <div>
                        <label className="block text-sm font-medium text-slate-300 mb-1">Sector (e.g., Construction, Textile)</label>
                        <input type="text" className="w-full px-3 py-2 bg-slate-900 border border-slate-600 rounded-md focus:ring-red-500 focus:border-red-500 text-white" />
                    </div>
                </div>
                <div>
                    <label className="block text-sm font-medium text-slate-300 mb-1">Describe the situation</label>
                    <textarea rows={5} className="w-full px-3 py-2 bg-slate-900 border border-slate-600 rounded-md focus:ring-red-500 focus:border-red-500 text-white" placeholder="Provide as much detail as possible..."></textarea>
                </div>
                <div>
                    <label className="block text-sm font-medium text-slate-300 mb-1">Upload Evidence (Optional)</label>
                    <input type="file" className="block w-full text-sm text-slate-400 file:mr-4 file:py-2 file:px-4 file:rounded-md file:border-0 file:text-sm file:font-semibold file:bg-slate-700 file:text-white hover:file:bg-slate-600"/>
                </div>
                
                <div className="pt-4">
                    <Button variant="danger" size="lg">Submit Securely</Button>
                </div>
            </form>
        </div>

        {/* Office Locations */}
        <div className="grid md:grid-cols-3 gap-6 text-center pt-8">
            <div className="p-4 bg-white rounded border border-slate-200">
                <h4 className="font-bold text-slate-900">Belgium Office</h4>
                <p className="text-sm text-slate-500">Brussels, EU</p>
                <a href="mailto:brussels@migrant88.com" className="text-sm text-blue-600 hover:underline block mt-2">brussels@migrant88.com</a>
            </div>
            <div className="p-4 bg-white rounded border border-slate-200">
                <h4 className="font-bold text-slate-900">Malaysia Office</h4>
                <p className="text-sm text-slate-500">Kuala Lumpur</p>
                 <a href="mailto:kl@migrant88.com" className="text-sm text-blue-600 hover:underline block mt-2">kl@migrant88.com</a>
            </div>
            <div className="p-4 bg-white rounded border border-slate-200">
                <h4 className="font-bold text-slate-900">Bangladesh Office</h4>
                <p className="text-sm text-slate-500">Dhaka</p>
                 <a href="mailto:dhaka@migrant88.com" className="text-sm text-blue-600 hover:underline block mt-2">dhaka@migrant88.com</a>
            </div>
        </div>

      </div>
    </div>
  );
};