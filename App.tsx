import React from 'react';
import { HashRouter, Routes, Route, ScrollRestoration } from 'react-router-dom';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { Home } from './pages/Home';
import { About } from './pages/About';
import { Work } from './pages/Work';
import { Campaigns } from './pages/Campaigns';
import { Reports } from './pages/Reports';
import { Contact } from './pages/Contact';

// Placeholder components for routes not fully detailed in the prompt
const Podcast = () => <div className="p-20 text-center text-xl">Podcast Page Coming Soon</div>;
const Careers = () => <div className="p-20 text-center text-xl">Careers Page Coming Soon</div>;

function App() {
  return (
    <HashRouter>
      <div className="flex flex-col min-h-screen font-sans text-slate-900">
        <Navbar />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/work" element={<Work />} />
            <Route path="/campaigns" element={<Campaigns />} />
            <Route path="/reports" element={<Reports />} />
            <Route path="/podcast" element={<Podcast />} />
            <Route path="/careers" element={<Careers />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </HashRouter>
  );
}

export default App;