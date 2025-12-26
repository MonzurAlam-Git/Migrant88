import { BrowserRouter, Route, Routes } from "react-router-dom";
import AuthPage from "./components/Authentication/AuthPage.jsx";
import AdminDashboard from "./components/Dashboard/AdminDashboard.jsx";
import { Footer } from "./components/Footer.jsx";
import { Navbar } from "./components/Navbar.jsx";
import { ThemeProvider } from "./context/ThemeContext.jsx";
import { About } from "./pages/About.jsx";
import { Campaigns } from "./pages/Campaigns.jsx";
import { Contact } from "./pages/Contact.jsx";
import { Error404 } from "./pages/Error404.jsx";
import { Home } from "./pages/Home.jsx";
import PodcastPublish from "./pages/PodcastShowcase.jsx";
import { Reports } from "./pages/Reports.jsx";
import { Work } from "./pages/Work.jsx";

// Placeholder components

const Careers = () => (
  <div className="p-20 font-bold text-center text-xl dark:text-white">
    We apologize, but there are currently no vacancies available. <br />
    <span>
      We appreciate your interest and encourage you to check back in the future.
    </span>
  </div>
);

function App() {
  return (
    <ThemeProvider>
      <BrowserRouter>
        <div className="flex flex-col min-h-screen font-sans text-slate-900 dark:text-slate-100 bg-slate-50 dark:bg-slate-950 transition-colors duration-300">
          <Navbar />
          <main className="flex-grow">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/work" element={<Work />} />
              <Route path="/campaigns" element={<Campaigns />} />
              <Route path="/reports" element={<Reports />} />
              <Route path="/podcast" element={<PodcastPublish />} />
              <Route path="/careers" element={<Careers />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/authentication" element={<AuthPage />} />
              <Route path="/dashboard" element={<AdminDashboard />} />
              <Route path="*" element={<Error404 />} />
            </Routes>
          </main>
          <Footer />
        </div>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
