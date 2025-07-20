import React, { useEffect } from "react";
import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import { Layout } from "./components/Layout/Layout";
import { LanguageProvider } from "./contexts/LanguageContext";
import { HomePage } from "./pages/Home/HomePage";
import { AboutPage } from "./pages/About/AboutPage";
import { ServicesPage } from "./pages/Services/ServicesPage";
import { ProjectsPage } from "./pages/Projects/ProjectsPage";
import { TestimonialsPage } from "./pages/Testimonials/TestimonialsPage";
import { ContactPage } from "./pages/Contact/ContactPage";

// Component to handle scroll to top on route change
function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

function App() {
  return (
    <LanguageProvider>
      <Router>
        <ScrollToTop />
        <Layout>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/services" element={<ServicesPage />} />
            <Route path="/projects" element={<ProjectsPage />} />
            <Route path="/testimonials" element={<TestimonialsPage />} />
            <Route path="/contact" element={<ContactPage />} />
          </Routes>
        </Layout>
      </Router>
    </LanguageProvider>
  );
}

export default App;
