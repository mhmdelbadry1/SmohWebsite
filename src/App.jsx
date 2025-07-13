import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Layout } from "./components/Layout/Layout";
import { HomePage } from "./pages/Home/HomePage";
import { AboutPage } from "./pages/About/AboutPage";
import { ServicesPage } from "./pages/Services/ServicesPage";
import { ProjectsPage } from "./pages/Projects/ProjectsPage";
import { TestimonialsPage } from "./pages/Testimonials/TestimonialsPage";
import { ContactPage } from "./pages/Contact/ContactPage";

function App() {
  return (
    <Router>
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
  );
}

export default App;
