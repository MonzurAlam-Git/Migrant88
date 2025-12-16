import { HashRouter, Route, Routes } from "react-router-dom";
import { Footer } from "./components/Footer";
import { Navbar } from "./components/Navbar";
import { ThemeProvider } from "./context/ThemeContext.jsx";
import { About } from "./pages/About";
import { Campaigns } from "./pages/Campaigns";
import { Contact } from "./pages/Contact";
import { Error404 } from "./pages/Error404.jsx";
import { Home } from "./pages/Home";
import { Reports } from "./pages/Reports";
import { Work } from "./pages/Work";

// Placeholder components for routes not fully detailed in the prompt
const Podcast = () => (
  <div className="p-20 text-center text-xl">Podcast Page Coming Soon</div>
);
const Careers = () => (
  <div className="p-20 text-center text-xl">Careers Page Coming Soon</div>
);

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
              <Route path="*" element={<Error404 />} />
            </Routes>
          </main>
          <Footer />
        </div>
      </HashRouter>
    </ThemeProvider>
  );
}

export default App;
