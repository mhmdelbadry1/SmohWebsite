import React, { useState, useEffect } from "react";
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';
import { Button } from "../../../../components/ui/button";
import { Card, CardContent } from "../../../../components/ui/card";
import { Input } from "../../../../components/ui/input";
import { Separator } from "../../../../components/ui/separator";
import { sendEmail } from "../../../../services/emailService";
import insta from "../../imgs/insta.png";
import facebook from "../../imgs/facebook.png";
import TikTokIcon from "../../imgs/TikTokIcon.jsx";
import logo from '../../imgs/logo 1 1.png'

export const ConsultationSection = () => {
  const { t, i18n } = useTranslation();
  const navigate = useNavigate();
  const lang = i18n.resolvedLanguage || i18n.language;
  
  // Email form state
  const [email, setEmail] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [message, setMessage] = useState({ text: '', type: '' });

  // Auto-hide message after 3 seconds
  useEffect(() => {
    if (message.text) {
      const timer = setTimeout(() => {
        setMessage({ text: '', type: '' });
      }, 3000);

      return () => clearTimeout(timer);
    }
  }, [message.text]);

  // Handle email subscription
  const handleEmailSubmit = async (e) => {
    e.preventDefault();
    
    if (!email.trim()) {
      setMessage({
        text: lang === 'ar' ? 'يرجى إدخال بريد إلكتروني صحيح' : 'Please enter a valid email address',
        type: 'error'
      });
      return;
    }

    setIsLoading(true);
    setMessage({ text: '', type: '' });

    try {
      const formData = {
        email: email.trim(),
        name: 'عميل جديد',
        subject: lang === 'ar' ? 'طلب استشارة من شركة سمو للإعلان والتسويق' : 'Consultation Request from Smou Advertising & Marketing Company'
      };

      const result = await sendEmail(formData, true);

      if (result.success) {
        setMessage({
          text: lang === 'ar' 
            ? 'تم الاشتراك بنجاح! شكراً لانضمامكم إلينا' 
            : 'Successfully subscribed! Thank you for joining us',
          type: 'success'
        });
        setEmail('');
      } else {
        throw new Error(result.error);
      }
    } catch (error) {
      console.error('Email subscription failed:', error);
      setMessage({
        text: lang === 'ar' 
          ? 'حدث خطأ في الإرسال. يرجى المحاولة مرة أخرى' 
          : 'An error occurred. Please try again',
        type: 'error'
      });
    } finally {
      setIsLoading(false);
    }
  };
  // Navigation links data
  const navLinks = [
    { key: "header.home", text: lang === 'ar' ? "الرئيسية" : "Home", route: "/" },
    { key: "header.about", text: lang === 'ar' ? "من نحن" : "About Us", route: "/about" },
    { key: "header.services", text: lang === 'ar' ? "خدماتنا" : "Our Services", route: "/services" },
    { key: "header.testimonials", text: lang === 'ar' ? "آراء العملاء" : "Testimonials", route: "/testimonials" },
    { key: "header.projects", text: lang === 'ar' ? "مشاريعنا" : "Our Projects", route: "/projects" },
    { key: "header.contact", text: lang === 'ar' ? "تواصل معنا" : "Contact Us", route: "/contact" },
  ];

  // Footer copyright data
  const copyrightInfo = [
    { text: "©", className: "[font-family:'SF_Pro_Text-Regular',Helvetica]" },
    {
      text: lang === 'ar' ? "شركة سمو للإعلان والتسويق" : "Sumou Advertising & Marketing Company",
      className: "[font-family:'Poppins',Helvetica]",
    },
    { text: "|", className: "[font-family:'SF_Pro_Text-Regular',Helvetica]" },
    {
      text: lang === 'ar' ? "جميع الحقوق محفوظة" : "All rights reserved",
      className: "[font-family:'Poppins',Helvetica]",
    },
  ];

  // Footer policy links data
  const policyLinks = [
    { text: lang === 'ar' ? "سياسة الخصوصية" : "Privacy Policy", className: "[font-family:'Poppins',Helvetica]" },
    { text: "|", className: "[font-family:'SF_Pro_Text-Regular',Helvetica]" },
    {
      text: lang === 'ar' ? "الشروط والأحكام" : "Terms and Conditions",
      className: "[font-family:'Poppins',Helvetica]",
    },
  ];

  return (
    <section className={`container flex flex-col items-center gap-8 md:gap-14 py-8 md:py-16 lg:py-20 w-full px-4 ${lang === 'ar' ? 'rtl' : 'ltr'}`}>
      <div className="flex flex-col items-center gap-6 md:gap-8 w-full">
        <div className="flex flex-col items-center gap-4 md:gap-6">
          <h2 className="[font-family:'Poppins',Helvetica] font-semibold text-black text-2xl md:text-4xl lg:text-[56px] tracking-[0] leading-[normal] text-center">
            {t('consultation.title')}
          </h2>

          <p className="max-w-[1192px] opacity-75 [font-family:'Poppins',Helvetica] text-base md:text-lg lg:text-xl text-center leading-[normal] font-normal text-black tracking-[0] px-4">
            {t('consultation.description')}
          </p>
        </div>

        <Card className="w-full max-w-[567px] bg-[#dbd6ef] rounded-[20px] p-3 border-none">
          <CardContent className="p-0 flex items-center gap-1">
            <form onSubmit={handleEmailSubmit} className={`flex items-center justify-between gap-2.5 px-3 py-2 flex-1 bg-white rounded-2xl ${lang === 'ar' ? 'flex-row-reverse' : ''}`}>
              <Input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="flex-1 opacity-50 [font-family:'Poppins',Helvetica] font-normal text-black text-base md:text-lg tracking-[0] leading-6 border-none shadow-none bg-transparent min-h-[44px]"
                placeholder={t('consultation.emailPlaceholder')}
                dir={lang === 'ar' ? 'rtl' : 'ltr'}
                disabled={isLoading}
              />

              <Button 
                type="submit"
                disabled={isLoading}
                className="bg-[#4C31AF] inline-flex items-center justify-center gap-2.5 px-6 md:px-8 py-3 rounded-xl flex-shrink-0 disabled:opacity-50 disabled:cursor-not-allowed">
                <span className="[font-family:'Poppins',Helvetica] text-white font-medium text-base md:text-lg text-center tracking-[0.18px] leading-6 whitespace-nowrap">
                  {isLoading 
                    ? (lang === 'ar' ? 'جارٍ الإرسال...' : 'Sending...') 
                    : t('consultation.send')
                  }
                </span>
              </Button>
            </form>
          </CardContent>
          
          {/* Success/Error Message */}
          {message.text && (
            <div className={`mt-3 p-3 rounded-lg text-center text-sm transition-all duration-500 ease-in-out transform ${
              message.type === 'success' 
                ? 'bg-green-100 text-green-800 border border-green-200' 
                : 'bg-red-100 text-red-800 border border-red-200'
            } ${message.text ? 'opacity-100 scale-100 translate-y-0' : 'opacity-0 scale-95 -translate-y-2'}`}>
              {message.text}
            </div>
          )}
        </Card>
      </div>

      <footer className="flex flex-col items-start gap-6 md:gap-8 w-full">
        <div className="flex flex-col lg:flex-row items-center justify-between w-full gap-6 lg:gap-0">
          <div className="flex items-center gap-5 lg:gap-4 order-2 lg:order-1">
            <a 
              href="https://www.facebook.com/share/p/1ZXFWmscbR/?mibextid=wwXIfr" 
              target="_blank" 
              rel="noopener noreferrer"
            >
              <img className="flex-none w-12 h-12 lg:w-auto lg:h-auto hover:scale-110 hover:opacity-80 transition-all duration-300 cursor-pointer" alt="Facebook" src={facebook} />
            </a>
            <a 
              href="https://www.instagram.com/sumouadv?igsh=eGR5YjJ4NXVrcXEw&utm_source=qr" 
              target="_blank" 
              rel="noopener noreferrer"
            >
              <img className="flex-none w-12 h-12 lg:w-auto lg:h-auto hover:scale-110 hover:opacity-80 transition-all duration-300 cursor-pointer" alt="Instagram" src={insta} />
            </a>
            <a 
              href="https://www.tiktok.com/@sumouadv?_t=ZS-8yDkNthXzRB&_r=1" 
              target="_blank" 
              rel="noopener noreferrer"
            >
              <TikTokIcon className="flex-none w-[60px] h-auto lg:w-auto lg:h-auto rounded-full hover:scale-110 hover:opacity-80 transition-all duration-300 cursor-pointer" />
            </a>
          </div>
          
          <nav className="flex flex-wrap items-center justify-center gap-3 lg:gap-6 order-3 lg:order-2">
            {navLinks.map((link, index) => (
              <button
                key={index}
                onClick={() => navigate(link.route)}
                className="[font-family:'Poppins',Helvetica] font-normal text-black text-sm lg:text-base xl:text-lg tracking-[0] leading-6 whitespace-nowrap hover:text-[#4C31AF] hover:scale-105 transition-all duration-300 cursor-pointer bg-transparent border-none p-0">
                {link.text}
              </button>
            ))}
          </nav>
          
          <img className="flex-none h-16 lg:h-auto order-1 lg:order-3" alt="Logo" src={logo} />
        </div>

        <Separator className="w-full h-px" />

        <div className={`flex flex-col lg:flex-row items-center justify-between w-full gap-4 lg:gap-0 ${lang === 'ar' ? 'lg:flex-row-reverse' : ''}`}>
          <div className={`flex flex-wrap items-center justify-center lg:justify-start gap-1 lg:gap-2 ${lang === 'ar' ? 'lg:justify-end' : ''}`}>
            {copyrightInfo.map((item, index) => (
              <span
                key={index}
                className={`${item.className} opacity-40 font-normal text-black text-xs lg:text-sm xl:text-base leading-[22px] whitespace-nowrap tracking-[0] text-center ${lang === 'ar' ? 'lg:text-right' : 'lg:text-left'} hover:opacity-70 transition-opacity duration-300 cursor-pointer`}>
                {item.text}
              </span>
            ))}
          </div>

          <div className={`flex flex-wrap items-center justify-center lg:justify-end gap-1 lg:gap-2 ${lang === 'ar' ? 'lg:justify-start' : ''}`}>
            {policyLinks.map((item, index) => (
              <span
                key={index}
                className={`${item.className} opacity-40 font-normal text-black text-xs lg:text-sm xl:text-base leading-[22px] whitespace-nowrap tracking-[0] text-center ${lang === 'ar' ? 'lg:text-left' : 'lg:text-right'} hover:opacity-70 hover:text-[#4C31AF] transition-all duration-300 cursor-pointer`}>
                {item.text}
              </span>
            ))}
          </div>
        </div>
      </footer>
    </section>
  );
};
