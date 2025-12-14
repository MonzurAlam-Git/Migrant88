import React from 'react';
import { HashRouter, Routes, Route } from 'react-router-dom';
import { Navbar } from './components/Navbar.jsx';
import { Footer } from './components/Footer.jsx';
import { Home } from './pages/Home.jsx';
import { About } from './pages/About.jsx';
import { Work } from './pages/Work.jsx';
import { Campaigns } from './pages/Campaigns.jsx';
import { Reports } from './pages/Reports.jsx';
import { Contact } from './pages/Contact.jsx';
import { ThemeProvider } from './context/ThemeContext.jsx';

// Placeholder components
const Podcast = () => <div className="p-20 text-center text-xl dark:text-white">Podcast Page Coming Soon</div>;
const Careers = () => <div className="p-20 text-center text-xl dark:text-white">Careers Page Coming Soon</div>;

function App() {
  return (
    <ThemeProvider>
      <HashRouter>
        <div className="flex flex-col min-h-screen font-sans text-slate-900 dark:text-slate-100 bg-slate-50 dark:bg-slate-950 transition-colors duration-300">
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
    </ThemeProvider>
  );
}

export default App;