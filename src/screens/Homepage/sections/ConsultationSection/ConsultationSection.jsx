import React, { useState, useEffect } from "react";
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';
import { Button } from "../../../../components/ui/button";
import { Card, CardContent } from "../../../../components/ui/card";
import { Input } from "../../../../components/ui/input";
import { Separator } from "../../../../components/ui/separator";
import { sendEmail } from "../../../../services/emailService";
import TikTokIcon from "../../../../components/ui/TikTokIcon";
const logo = '/logo 1 1.png'

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
        subject: lang === 'ar' ? 'طلب استشارة من شركة سمو للدعاية والإعلان' : 'Consultation Request from Sumou Advertising & Marketing Company'
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
      text: lang === 'ar' ? "شركة سمو للدعاية والإعلان" : "Sumou Advertising & Marketing Company",
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
              href="https://www.facebook.com/share/18SE8FS5zA/?mibextid=wwXIfr" 
              target="_blank" 
              rel="noopener noreferrer"
            >
              <svg className="flex-none w-8 h-8 md:w-12 md:h-12 lg:w-auto lg:h-auto hover:scale-110 hover:opacity-80 transition-all duration-300 cursor-pointer" width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M20.125 0H7.875C3.5 0 0 3.5 0 7.875V20.125C0 24.5 3.5 28 7.875 28H14V17.5H10.5C9.975 17.5 9.625 17.15 9.625 16.625V14C9.625 13.475 9.975 13.125 10.5 13.125H14V10.5C14 7.6125 15.4875 5.25 18.375 5.25H21.875C22.4 5.25 22.75 5.6 22.75 6.125V8.75C22.75 9.275 22.4 9.625 21.875 9.625H18.55C18.4625 9.625 18.375 9.7125 18.375 9.8V13.125H22.75C23.0125 13.125 23.275 13.3 23.45 13.475C23.625 13.65 23.625 14 23.5375 14.2625L21.7875 16.8875C21.7 17.325 21.35 17.5 21 17.5H18.375V28H20.125C24.5 28 28 24.5 28 20.125V7.875C28 3.5 24.5 0 20.125 0Z" fill="#4C31AF"/>
              </svg>
            </a>
            <a 
              href="https://www.instagram.com/sumouadv?igsh=eGR5YjJ4NXVrcXEw&utm_source=qr" 
              target="_blank" 
              rel="noopener noreferrer"
            >
              <svg className="flex-none w-8 h-8 md:w-12 md:h-12 lg:w-auto lg:h-auto hover:scale-110 hover:opacity-80 transition-all duration-300 cursor-pointer" width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M19.8759 0H8.13805C3.03951 0 0 3.038 0 8.134V19.852C0 24.962 3.03951 28 8.13805 28H19.8619C24.9604 28 28 24.962 28 19.866V8.134C28.014 3.038 24.9744 0 19.8759 0ZM14.007 19.432C11.0095 19.432 8.57227 16.996 8.57227 14C8.57227 11.004 11.0095 8.568 14.007 8.568C17.0045 8.568 19.4417 11.004 19.4417 14C19.4417 16.996 17.0045 19.432 14.007 19.432ZM22.2991 6.832C22.2291 7 22.131 7.154 22.005 7.294C21.8649 7.42 21.7108 7.518 21.5427 7.588C21.3746 7.658 21.1926 7.7 21.0105 7.7C20.6323 7.7 20.2821 7.56 20.016 7.294C19.8899 7.154 19.7919 7 19.7218 6.832C19.6518 6.664 19.6098 6.482 19.6098 6.3C19.6098 6.118 19.6518 5.936 19.7218 5.768C19.7919 5.586 19.8899 5.446 20.016 5.306C20.3381 4.984 20.8284 4.83 21.2766 4.928C21.3747 4.942 21.4587 4.97 21.5427 5.012C21.6268 5.04 21.7108 5.082 21.7949 5.138C21.8649 5.18 21.9349 5.25 22.005 5.306C22.131 5.446 22.2291 5.586 22.2991 5.768C22.3691 5.936 22.4112 6.118 22.4112 6.3C22.4112 6.482 22.3691 6.664 22.2991 6.832Z" fill="#4C31AF"/>
              </svg>
            </a>
            <a 
              href="https://www.tiktok.com/@sumouadv?_t=ZS-8yDkNthXzRB&_r=1" 
              target="_blank" 
              rel="noopener noreferrer"
            >
              <TikTokIcon className="flex-none w-[40px] h-auto lg:w-auto lg:h-auto rounded-full hover:scale-110 hover:opacity-80 transition-all duration-300 cursor-pointer" />
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
