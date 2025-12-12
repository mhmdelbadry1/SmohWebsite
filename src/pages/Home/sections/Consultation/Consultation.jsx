import React, { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";
import { Button } from "../../../../components/ui/button";
import { LazyImage } from "../../../../components/ui/LazyImage";
import { Card, CardContent } from "../../../../components/ui/card";
import { Input } from "../../../../components/ui/input";
import { Separator } from "../../../../components/ui/separator";
import { sendEmail } from "../../../../services/emailService";
import TikTokIcon from "../../../../components/ui/TikTokIcon";
const logo = "/logo-main.png";

export const Consultation = () => {
  const { t, i18n } = useTranslation();
  const navigate = useNavigate();
  const lang = i18n.resolvedLanguage || i18n.language;

  // Email form state
  const [email, setEmail] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [message, setMessage] = useState({ text: "", type: "" });
  // New: overlay modal state
  const [isOverlayOpen, setIsOverlayOpen] = useState(false);
  const [overlayType, setOverlayType] = useState(null); // 'privacy' | 'terms'
  const [isAnimating, setIsAnimating] = useState(false);
  const [showBackdrop, setShowBackdrop] = useState(false);

  // Auto-hide message after 3 seconds
  useEffect(() => {
    if (message.text) {
      const timer = setTimeout(() => {
        setMessage({ text: "", type: "" });
      }, 3000);

      return () => clearTimeout(timer);
    }
  }, [message.text]);

  // Handle email subscription
  const handleEmailSubmit = async (e) => {
    e.preventDefault();

    if (!email.trim()) {
      setMessage({
        text:
          lang === "ar"
            ? "يرجى إدخال بريد إلكتروني صحيح"
            : "Please enter a valid email address",
        type: "error",
      });
      return;
    }

    setIsLoading(true);
    setMessage({ text: "", type: "" });

    try {
      const formData = {
        email: email.trim(),
        name: "عميل جديد",
        subject:
          lang === "ar"
            ? "طلب استشارة من سمو للدعاية والإعلان"
            : "Consultation Request from Sumou Advertising & Marketing",
      };

      const result = await sendEmail(formData, true);

      if (result.success) {
        setMessage({
          text:
            lang === "ar"
              ? "تم الاشتراك بنجاح! شكراً لانضمامكم إلينا"
              : "Successfully subscribed! Thank you for joining us",
          type: "success",
        });
        setEmail("");
      } else {
        throw new Error(result.error);
      }
    } catch (error) {
      console.error("Email subscription failed:", error);
      setMessage({
        text:
          lang === "ar"
            ? "حدث خطأ في الإرسال. يرجى المحاولة مرة أخرى"
            : "An error occurred. Please try again",
        type: "error",
      });
    } finally {
      setIsLoading(false);
    }
  };
  // Navigation links data
  const navLinks = [
    {
      key: "header.home",
      text: lang === "ar" ? "الرئيسية" : "Home",
      route: "/",
    },
    {
      key: "header.about",
      text: lang === "ar" ? "من نحن" : "About Us",
      route: "/about",
    },
    {
      key: "header.services",
      text: lang === "ar" ? "خدماتنا" : "Our Services",
      route: "/services",
    },
    {
      key: "header.testimonials",
      text: lang === "ar" ? "آراء العملاء" : "Testimonials",
      route: "/testimonials",
    },
    {
      key: "header.projects",
      text: lang === "ar" ? "مشاريعنا" : "Our Projects",
      route: "/projects",
    },
    {
      key: "header.contact",
      text: lang === "ar" ? "تواصل معنا" : "Contact Us",
      route: "/contact",
    },
  ];

  // Footer copyright data
  const copyrightInfo = [
    { text: "©", className: "[font-family:'SF_Pro_Text-Regular',Helvetica]" },
    {
      text:
        lang === "ar"
          ? "سمو للدعاية والإعلان"
          : "Sumou Advertising & Marketing",
      className: "[font-family:'Poppins',Helvetica]",
    },
    { text: "|", className: "[font-family:'SF_Pro_Text-Regular',Helvetica]" },
    {
      text: lang === "ar" ? "جميع الحقوق محفوظة" : "All rights reserved",
      className: "[font-family:'Poppins',Helvetica]",
    },
  ];

  // Footer policy links data
  const policyLinks = [
    {
      id: "privacy",
      text: lang === "ar" ? "سياسة الخصوصية" : "Privacy Policy",
      className: "[font-family:'Poppins',Helvetica]",
    },
    { text: "|", className: "[font-family:'SF_Pro_Text-Regular',Helvetica]" },
    {
      id: "terms",
      text: lang === "ar" ? "الشروط والأحكام" : "Terms and Conditions",
      className: "[font-family:'Poppins',Helvetica]",
    },
  ];

  const openOverlay = (type) => {
    setOverlayType(type);
    setIsOverlayOpen(true);
    // Show backdrop immediately, then animate
    setShowBackdrop(true);
    setTimeout(() => {
      setIsAnimating(true);
    }, 10);
  };

  const closeOverlay = () => {
    setIsAnimating(false);
    // Wait for modal animation, then hide backdrop
    setTimeout(() => {
      setShowBackdrop(false);
      setTimeout(() => {
        setIsOverlayOpen(false);
        setOverlayType(null);
      }, 150);
    }, 150);
  };

  return (
    <section
      className={`container flex flex-col items-center gap-8 md:gap-14 py-8 md:py-16 lg:py-20 w-full px-4 ${
        lang === "ar" ? "rtl" : "ltr"
      }`}
    >
      <div className="flex flex-col items-center gap-6 md:gap-8 w-full">
        <div className="flex flex-col items-center gap-4 md:gap-6">
          <h2 className="[font-family:'Poppins',Helvetica] font-semibold text-black text-2xl md:text-4xl lg:text-[56px] tracking-[0] leading-[normal] text-center">
            {t("consultation.title")}
          </h2>

          <p className="max-w-[1192px] opacity-75 [font-family:'Poppins',Helvetica] text-base md:text-lg lg:text-xl text-center leading-[normal] font-normal text-black tracking-[0] px-4">
            {t("consultation.description")}
          </p>
        </div>

        <Card className="w-full max-w-[567px] bg-[#dbd6ef] rounded-[20px] p-3 border-none">
          <CardContent className="p-0 flex items-center gap-1">
            <form
              onSubmit={handleEmailSubmit}
              className={`flex items-center justify-between gap-2.5 px-3 py-2 flex-1 bg-white rounded-2xl ${
                lang === "ar" ? "flex-row-reverse" : ""
              }`}
            >
              <Input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="flex-1 opacity-50 [font-family:'Poppins',Helvetica] font-normal text-black text-base md:text-lg tracking-[0] leading-6 border-none shadow-none bg-transparent min-h-[44px]"
                placeholder={t("consultation.emailPlaceholder")}
                dir={lang === "ar" ? "rtl" : "ltr"}
                disabled={isLoading}
              />

              <Button
                type="submit"
                disabled={isLoading}
                className="bg-[#4C31AF] inline-flex items-center justify-center gap-2.5 px-6 md:px-8 py-3 rounded-xl flex-shrink-0 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                <span className="[font-family:'Poppins',Helvetica] text-white font-medium text-base md:text-lg text-center tracking-[0.18px] leading-6 whitespace-nowrap">
                  {isLoading
                    ? lang === "ar"
                      ? "جارٍ الإرسال..."
                      : "Sending..."
                    : t("consultation.send")}
                </span>
              </Button>
            </form>
          </CardContent>

          {/* Success/Error Message */}
          {message.text && (
            <div
              className={`mt-3 p-3 rounded-lg text-center text-sm transition-all duration-500 ease-in-out transform ${
                message.type === "success"
                  ? "bg-green-100 text-green-800 border border-green-200"
                  : "bg-red-100 text-red-800 border border-red-200"
              } ${
                message.text
                  ? "opacity-100 scale-100 translate-y-0"
                  : "opacity-0 scale-95 -translate-y-2"
              }`}
            >
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
              <svg
                className="flex-none w-8 h-8 md:w-12 md:h-12 lg:w-auto lg:h-auto hover:scale-110 hover:opacity-80 transition-all duration-300 cursor-pointer"
                width="28"
                height="28"
                viewBox="0 0 28 28"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M20.125 0H7.875C3.5 0 0 3.5 0 7.875V20.125C0 24.5 3.5 28 7.875 28H14V17.5H10.5C9.975 17.5 9.625 17.15 9.625 16.625V14C9.625 13.475 9.975 13.125 10.5 13.125H14V10.5C14 7.6125 15.4875 5.25 18.375 5.25H21.875C22.4 5.25 22.75 5.6 22.75 6.125V8.75C22.75 9.275 22.4 9.625 21.875 9.625H18.55C18.4625 9.625 18.375 9.7125 18.375 9.8V13.125H22.75C23.0125 13.125 23.275 13.3 23.45 13.475C23.625 13.65 23.625 14 23.5375 14.2625L21.7875 16.8875C21.7 17.325 21.35 17.5 21 17.5H18.375V28H20.125C24.5 28 28 24.5 28 20.125V7.875C28 3.5 24.5 0 20.125 0Z"
                  fill="#4C31AF"
                />
              </svg>
            </a>
            <a
              href="https://www.instagram.com/sumouadv?igsh=eGR5YjJ4NXVrcXEw&utm_source=qr"
              target="_blank"
              rel="noopener noreferrer"
            >
              <svg
                className="flex-none w-8 h-8 md:w-12 md:h-12 lg:w-auto lg:h-auto hover:scale-110 hover:opacity-80 transition-all duration-300 cursor-pointer"
                width="28"
                height="28"
                viewBox="0 0 28 28"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M19.8759 0H8.13805C3.03951 0 0 3.038 0 8.134V19.852C0 24.962 3.03951 28 8.13805 28H19.8619C24.9604 28 28 24.962 28 19.866V8.134C28.014 3.038 24.9744 0 19.8759 0ZM14.007 19.432C11.0095 19.432 8.57227 16.996 8.57227 14C8.57227 11.004 11.0095 8.568 14.007 8.568C17.0045 8.568 19.4417 11.004 19.4417 14C19.4417 16.996 17.0045 19.432 14.007 19.432ZM22.2991 6.832C22.2291 7 22.131 7.154 22.005 7.294C21.8649 7.42 21.7108 7.518 21.5427 7.588C21.3746 7.658 21.1926 7.7 21.0105 7.7C20.6323 7.7 20.2821 7.56 20.016 7.294C19.8899 7.154 19.7919 7 19.7218 6.832C19.6518 6.664 19.6098 6.482 19.6098 6.3C19.6098 6.118 19.6518 5.936 19.7218 5.768C19.7919 5.586 19.8899 5.446 20.016 5.306C20.3381 4.984 20.8284 4.83 21.2766 4.928C21.3747 4.942 21.4587 4.97 21.5427 5.012C21.6268 5.04 21.7108 5.082 21.7949 5.138C21.8649 5.18 21.9349 5.25 22.005 5.306C22.131 5.446 22.2291 5.586 22.2991 5.768C22.3691 5.936 22.4112 6.118 22.4112 6.3C22.4112 6.482 22.3691 6.664 22.2991 6.832Z"
                  fill="#4C31AF"
                />
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
                className="[font-family:'Poppins',Helvetica] font-normal text-black text-sm lg:text-base xl:text-lg tracking-[0] leading-6 whitespace-nowrap hover:text-[#4C31AF] hover:scale-105 transition-all duration-300 cursor-pointer bg-transparent border-none p-0"
              >
                {link.text}
              </button>
            ))}
          </nav>

          <LazyImage
            className="flex-none h-16 lg:h-auto order-1 lg:order-3"
            alt="Logo"
            src={logo}
            eager={true}
          />
        </div>

        <Separator className="w-full h-px" />

        <div
          className={`flex flex-col lg:flex-row items-center justify-between w-full gap-4 lg:gap-0 ${
            lang === "ar" ? "lg:flex-row-reverse" : ""
          }`}
        >
          <div
            className={`flex flex-wrap items-center justify-center lg:justify-start gap-1 lg:gap-2 ${
              lang === "ar" ? "lg:justify-end" : ""
            }`}
          >
            {copyrightInfo.map((item, index) => (
              <span
                key={index}
                className={`${
                  item.className
                } opacity-40 font-normal text-black text-xs lg:text-sm xl:text-base leading-[22px] whitespace-nowrap tracking-[0] text-center ${
                  lang === "ar" ? "lg:text-right" : "lg:text-left"
                } hover:opacity-70 transition-opacity duration-300 cursor-pointer`}
              >
                {item.text}
              </span>
            ))}
          </div>

          <div
            className={`flex flex-wrap items-center justify-center lg:justify-end gap-1 lg:gap-2 ${
              lang === "ar" ? "lg:justify-start" : ""
            }`}
          >
            {policyLinks.map((item, index) =>
              item.id ? (
                <button
                  key={index}
                  type="button"
                  onClick={() => openOverlay(item.id)}
                  className={`${
                    item.className
                  } opacity-40 font-normal text-black text-xs lg:text-sm xl:text-base leading-[22px] whitespace-nowrap tracking-[0] text-center ${
                    lang === "ar" ? "lg:text-left" : "lg:text-right"
                  } hover:opacity-70 hover:text-[#4C31AF] transition-all duration-300 cursor-pointer bg-transparent border-none p-0`}
                >
                  {item.text}
                </button>
              ) : (
                <span
                  key={index}
                  className={`${
                    item.className
                  } opacity-40 font-normal text-black text-xs lg:text-sm xl:text-base leading-[22px] whitespace-nowrap tracking-[0] text-center ${
                    lang === "ar" ? "lg:text-left" : "lg:text-right"
                  }`}
                >
                  {item.text}
                </span>
              )
            )}
          </div>
        </div>
      </footer>

      {/* Overlay Modal for Privacy Policy and Terms */}
      {isOverlayOpen && (
        <div
          className={`fixed inset-0 z-[9999] flex items-center justify-center ${
            isAnimating ? "opacity-100 visible" : "opacity-0 invisible"
          }`}
          style={{
            transition: "opacity 300ms ease-out, visibility 300ms ease-out",
          }}
          role="dialog"
          aria-modal="true"
          aria-label={
            overlayType === "privacy"
              ? lang === "ar"
                ? "سياسة الخصوصية"
                : "Privacy Policy"
              : lang === "ar"
              ? "الشروط والأحكام"
              : "Terms and Conditions"
          }
        >
          {/* Backdrop */}
          <div
            className={`absolute inset-0 bg-black/60 ${
              showBackdrop && isAnimating
                ? "backdrop-blur-sm"
                : "backdrop-blur-none"
            }`}
            style={{
              transition:
                "backdrop-filter 400ms ease-out, background-color 300ms ease-out",
              backgroundColor:
                showBackdrop && isAnimating
                  ? "rgba(0, 0, 0, 0.6)"
                  : "rgba(0, 0, 0, 0)",
            }}
            onClick={closeOverlay}
          />

          {/* Panel */}
          <div
            className={`relative bg-white rounded-2xl shadow-2xl max-h-[85vh] w-[92vw] md:w-[80vw] lg:w-[900px] overflow-hidden border border-gray-100 transform ${
              lang === "ar" ? "text-right" : "text-left"
            }`}
            style={{
              transition: "all 300ms cubic-bezier(0.4, 0, 0.2, 1)",
              opacity: isAnimating ? 1 : 0,
              transform: isAnimating
                ? "scale(1) translateY(0px) rotate(0deg)"
                : "scale(0.9) translateY(20px) rotate(1deg)",
            }}
          >
            {/* Header */}
            <div className="flex items-center justify-between gap-4 px-5 md:px-6 py-4 border-b">
              <h3 className="text-base md:text-lg font-semibold text-gray-900">
                {overlayType === "privacy"
                  ? lang === "ar"
                    ? "سياسة الخصوصية"
                    : "Privacy Policy"
                  : lang === "ar"
                  ? "الشروط والأحكام"
                  : "Terms and Conditions"}
              </h3>
              <button
                type="button"
                onClick={closeOverlay}
                className="inline-flex items-center justify-center w-9 h-9 rounded-full hover:bg-gray-100 text-gray-500 hover:text-gray-700 transition"
                aria-label={lang === "ar" ? "إغلاق" : "Close"}
              >
                <svg
                  viewBox="0 0 24 24"
                  width="20"
                  height="20"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <line x1="18" y1="6" x2="6" y2="18" />
                  <line x1="6" y1="6" x2="18" y2="18" />
                </svg>
              </button>
            </div>

            {/* Content */}
            <div className="px-5 md:px-6 py-4 overflow-y-auto max-h-[calc(85vh-64px)] text-gray-800">
              {overlayType === "privacy" ? (
                // Privacy Policy Content
                <div className="space-y-4 text-sm leading-7">
                  {lang === "ar" ? (
                    <div dir="rtl">
                      <p className="font-semibold">1. المقدمة</p>
                      <p>
                        تحترم سمو للدعاية والإعلان خصوصية زوار ومستخدمي
                        موقعها الإلكتروني (sumouadvs.com) وتلتزم بحماية بياناتهم
                        الشخصية وفقًا لأفضل الممارسات والمعايير المعمول بها.
                      </p>

                      <p className="font-semibold">2. جمع المعلومات</p>
                      <ul className="list-disc pr-5 space-y-1">
                        <li>
                          البيانات التي تقدمها طوعًا (مثل: الاسم، البريد
                          الإلكتروني، رقم الهاتف).
                        </li>
                        <li>
                          البيانات التي يتم جمعها تلقائيًا (مثل: عنوان الـ IP،
                          نوع الجهاز، المتصفح، الصفحات التي تمت زيارتها).
                        </li>
                      </ul>

                      <p className="font-semibold">3. استخدام المعلومات</p>
                      <ul className="list-disc pr-5 space-y-1">
                        <li>تحسين تجربة المستخدم.</li>
                        <li>الرد على الاستفسارات والطلبات.</li>
                        <li>
                          إرسال العروض الترويجية والمستجدات (عند الموافقة).
                        </li>
                        <li>تحليل أداء الموقع وتحسين الخدمات.</li>
                      </ul>

                      <p className="font-semibold">4. حماية البيانات</p>
                      <p>
                        نلتزم باستخدام تدابير أمنية تقنية وإدارية مناسبة لحماية
                        بياناتك من الوصول غير المصرح به أو التعديل أو الفقدان.
                      </p>

                      <p className="font-semibold">5. مشاركة المعلومات</p>
                      <ul className="list-disc pr-5 space-y-1">
                        <li>إذا كان ذلك مطلوبًا بموجب القانون.</li>
                        <li>
                          إذا كان ذلك ضروريًا لتقديم الخدمة من خلال شركاء
                          موثوقين.
                        </li>
                      </ul>

                      <p className="font-semibold">
                        6. ملفات تعريف الارتباط (Cookies)
                      </p>
                      <p>
                        يستخدم موقعنا ملفات تعريف الارتباط لتحسين تجربتك. يمكنك
                        تعطيلها من إعدادات المتصفح، ولكن قد يؤثر ذلك على بعض
                        وظائف الموقع.
                      </p>

                      <p className="font-semibold">7. حقوقك</p>
                      <ul className="list-disc pr-5 space-y-1">
                        <li>طلب الوصول إلى بياناتك الشخصية.</li>
                        <li>طلب تعديل أو حذف بياناتك.</li>
                        <li>إلغاء الاشتراك في الرسائل الترويجية.</li>
                      </ul>

                      <p className="font-semibold">8. التعديلات</p>
                      <p>
                        قد يتم تحديث سياسة الخصوصية من وقت لآخر، وسيتم نشر
                        النسخة المحدثة على هذه الصفحة.
                      </p>
                    </div>
                  ) : (
                    <div dir="ltr">
                      <p className="font-semibold">1. Introduction</p>
                      <p>
                        Sumou Advertising & Marketing respects the privacy of
                        visitors and users of its website (sumouadvs.com) and is
                        committed to protecting their personal data in
                        accordance with best practices and applicable standards.
                      </p>

                      <p className="font-semibold">2. Information Collection</p>
                      <ul className="list-disc pl-5 space-y-1">
                        <li>
                          Information you voluntarily provide (e.g., name, email
                          address, phone number).
                        </li>
                        <li>
                          Information automatically collected (e.g., IP address,
                          device type, browser type, and pages visited).
                        </li>
                      </ul>

                      <p className="font-semibold">3. Use of Information</p>
                      <ul className="list-disc pl-5 space-y-1">
                        <li>To improve the user experience.</li>
                        <li>To respond to inquiries and requests.</li>
                        <li>
                          To send promotional offers and updates (with your
                          consent).
                        </li>
                        <li>
                          To analyze website performance and enhance services.
                        </li>
                      </ul>

                      <p className="font-semibold">4. Data Protection</p>
                      <p>
                        We are committed to using appropriate technical and
                        administrative measures to protect your data from
                        unauthorized access, alteration, or loss.
                      </p>

                      <p className="font-semibold">5. Information Sharing</p>
                      <ul className="list-disc pl-5 space-y-1">
                        <li>If required by law.</li>
                        <li>
                          When necessary to provide services through trusted
                          partners.
                        </li>
                      </ul>

                      <p className="font-semibold">6. Cookies</p>
                      <p>
                        Our website uses cookies to enhance your browsing
                        experience. You can disable them in your browser
                        settings, but this may affect certain website
                        functionalities.
                      </p>

                      <p className="font-semibold">7. Your Rights</p>
                      <ul className="list-disc pl-5 space-y-1">
                        <li>Request access to your personal data.</li>
                        <li>Request correction or deletion of your data.</li>
                        <li>Opt out of promotional communications.</li>
                      </ul>

                      <p className="font-semibold">8. Updates</p>
                      <p>
                        This Privacy Policy may be updated from time to time,
                        and the latest version will be posted on this page.
                      </p>
                    </div>
                  )}
                </div>
              ) : (
                // Terms and Conditions Content
                <div className="space-y-4 text-sm leading-7">
                  {lang === "ar" ? (
                    <div dir="rtl">
                      <p className="font-semibold">1. المقدمة</p>
                      <p>
                        باستخدامك لموقعنا أو خدماتنا، فإنك توافق على الالتزام
                        بالشروط والأحكام الموضحة أدناه.
                      </p>

                      <p className="font-semibold">2. استخدام الموقع</p>
                      <ul className="list-disc pr-5 space-y-1">
                        <li>يحق لك استخدام الموقع للأغراض المشروعة فقط.</li>
                        <li>
                          يمنع نسخ أو إعادة توزيع أي محتوى دون إذن كتابي مسبق من
                          شركة سمو.
                        </li>
                      </ul>

                      <p className="font-semibold">3. الملكية الفكرية</p>
                      <p>
                        جميع الحقوق محفوظة لسمو للدعاية والإعلان، بما في
                        ذلك النصوص، التصاميم، الصور، والشعارات.
                      </p>

                      <p className="font-semibold">4. المحتوى والخدمات</p>
                      <ul className="list-disc pr-5 space-y-1">
                        <li>
                          قد نقوم بتعديل أو إيقاف أي خدمة أو محتوى في أي وقت دون
                          إشعار مسبق.
                        </li>
                        <li>لا نضمن خلو الموقع من الأخطاء أو انقطاع الخدمة.</li>
                      </ul>

                      <p className="font-semibold">5. حدود المسؤولية</p>
                      <p>
                        لا تتحمل سمو أي مسؤولية عن أي أضرار مباشرة أو غير
                        مباشرة تنتج عن استخدام الموقع أو الخدمات.
                      </p>

                      <p className="font-semibold">6. الروابط الخارجية</p>
                      <p>
                        قد يحتوي الموقع على روابط لمواقع خارجية، ولسنا مسؤولين
                        عن محتوى أو ممارسات الخصوصية لتلك المواقع.
                      </p>

                      <p className="font-semibold">7. القانون المعمول به</p>
                      <p>
                        تخضع هذه الشروط والأحكام وتفسر وفقًا لقوانين المملكة
                        العربية السعودية، وأي نزاعات تخضع لاختصاص محاكمها.
                      </p>
                    </div>
                  ) : (
                    <div dir="ltr">
                      <p className="font-semibold">1. Introduction</p>
                      <p>
                        By using our website or services, you agree to be bound
                        by the terms and conditions outlined below.
                      </p>

                      <p className="font-semibold">2. Website Use</p>
                      <ul className="list-disc pl-5 space-y-1">
                        <li>
                          You may only use the website for lawful purposes.
                        </li>
                        <li>
                          Copying or redistributing any content without prior
                          written consent from Sumou is prohibited.
                        </li>
                      </ul>

                      <p className="font-semibold">3. Intellectual Property</p>
                      <p>
                        All rights are reserved to Sumou Advertising &
                        Marketing, including texts, designs, images, and logos.
                      </p>

                      <p className="font-semibold">4. Content and Services</p>
                      <ul className="list-disc pl-5 space-y-1">
                        <li>
                          We may modify or discontinue any service or content at
                          any time without prior notice.
                        </li>
                        <li>
                          We do not guarantee the website will be error-free or
                          that service will be uninterrupted.
                        </li>
                      </ul>

                      <p className="font-semibold">
                        5. Limitation of Liability
                      </p>
                      <p>
                        Sumou shall not be held liable for any direct or
                        indirect damages resulting from the use of the website
                        or its services.
                      </p>

                      <p className="font-semibold">6. External Links</p>
                      <p>
                        The website may contain links to external websites, and
                        we are not responsible for the content or privacy
                        practices of those sites.
                      </p>

                      <p className="font-semibold">7. Governing Law</p>
                      <p>
                        These terms and conditions are governed by and
                        interpreted in accordance with the laws of the Kingdom
                        of Saudi Arabia, and any disputes shall be subject to
                        the jurisdiction of its courts.
                      </p>
                    </div>
                  )}
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
