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
import SEO from './components/SEO';
import { useTranslation } from 'react-i18next';

// Component to handle scroll to top on route change
function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

function App() {
  const { t, i18n } = useTranslation();

  const isArabic = i18n.language === 'ar';

  const description = isArabic 
    ? "سمو، هي شركة متخصصة في تصميم الهوية البصرية، إنشاء المحتوى الإعلاني، وتقديم الاستشارات الإبداعية لرواد الأعمال والعلامات الناشئة. نهدف إلى تمكين العلامات التجارية من التميز في السوق من خلال حلول إبداعية مبنية على رؤية استراتيجية وذوق راقٍ."
    : "Sumou is a company specialized in visual identity design, advertising content creation, and creative consulting for entrepreneurs and emerging brands. Our goal is to empower brands to stand out in the market through creative solutions built on strategic vision and refined taste.";

  const keywords = isArabic
    ? "هوية بصرية, علامة تجارية, إعلان, إنشاء محتوى, استشارات إبداعية, تصميم علامة تجارية, تسويق, سمو"
    : "visual identity, branding, advertising, content creation, creative consulting, brand design, marketing, Sumou";

  const title = isArabic 
    ? "موقع سمو - نحن نجسد هويتك" 
    : "Sumou Website - We Shape Your Identity";

  return (
    <LanguageProvider>
      <Router>
        <SEO 
          title={title}
          description={description}
          keywords={keywords}
          url="https://your-website-url.com/"
          image="https://your-website-url.com/logo.png"
        />
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
