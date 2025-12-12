import emailjs from "@emailjs/browser";

// Initialize EmailJS
emailjs.init("y68GP5CuCxzZNtsp6");

export const sendEmail = async (formData, isConsult = false) => {
  try {
    // Validate required email field
    if (!formData.email || !formData.email.trim()) {
      throw new Error("Email is required");
    }

    // Basic email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email.trim())) {
      throw new Error("Invalid email format");
    }

    console.log("Sending email with data:", {
      email: formData.email,
      name: formData.name,
      isConsult: isConsult,
    });

    // Get current date and time in Arabic format
    const now = new Date();
    const arabicTime = now.toLocaleString("ar-SA", {
      year: "numeric",
      month: "long",
      day: "numeric",
      hour: "2-digit",
      minute: "2-digit",
      hour12: true,
    });

    // Prepare email template content based on consultation or contact form
    const emailTemplate = `
<!DOCTYPE html>
<html lang="ar" dir="rtl">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>طلب تواصل جديد - سمو للدعاية والإعلان</title>
    <style>
        body, table, td, p, a, li, blockquote {
            -webkit-text-size-adjust: 100%;
            -ms-text-size-adjust: 100%;
        }
        table, td {
            mso-table-lspace: 0pt;
            mso-table-rspace: 0pt;
        }
        img {
            -ms-interpolation-mode: bicubic;
            border: 0;
            height: auto;
            line-height: 100%;
            outline: none;
            text-decoration: none;
        }
        * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
        }
        body {
            font-family: Arial, 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
            background-color: #f5f7fa;
            padding: 20px;
            min-height: 100vh;
            direction: rtl;
            margin: 0;
        }
        .email-container {
            max-width: 650px;
            margin: 0 auto;
            background: #ffffff;
            border-radius: 16px;
            box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
            overflow: hidden;
            direction: rtl;
        }
        .header {
            background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
            padding: 30px;
            text-align: center;
            position: relative;
        }
        .company-name {
            color: white;
            font-size: 24px;
            font-weight: 600;
            margin: 0;
            text-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
        }
        .company-tagline {
            color: rgba(255, 255, 255, 0.9);
            font-size: 14px;
            font-weight: 300;
            margin-top: 5px;
        }
        .content {
            padding: 40px 30px;
        }
        .greeting {
            font-size: 18px;
            color: #2c3e50;
            margin-bottom: 20px;
            font-weight: 500;
        }
        .notification-text {
            font-size: 16px;
            color: #5a6c7d;
            margin-bottom: 30px;
            line-height: 1.6;
        }
        .message-container {
            background: #f8fafc;
            border: 2px solid #e2e8f0;
            border-radius: 12px;
            padding: 25px;
            margin: 30px 0;
            position: relative;
        }
        .client-info h3 {
            font-size: 18px;
            color: #2c3e50;
            font-weight: 600;
            margin-bottom: 20px;
            border-bottom: 2px solid #DB4063;
            padding-bottom: 10px;
        }
        .info-row {
            display: table;
            width: 100%;
            margin-bottom: 15px;
        }
        .label {
            display: table-cell;
            font-weight: 600;
            color: #5a6c7d;
            width: 35%;
            vertical-align: top;
            padding-left: 15px;
        }
        .value {
            display: table-cell;
            color: #2c3e50;
            font-weight: 500;
            background: rgba(219, 64, 99, 0.05);
            padding: 8px 12px;
            border-radius: 6px;
            direction: ltr;
            text-align: left;
        }
        .signature {
            margin-top: 40px;
            padding-top: 25px;
            border-top: 2px solid #f1f5f9;
        }
        .signature-text {
            font-size: 16px;
            color: #2c3e50;
            margin-bottom: 8px;
        }
        .company-signature {
            font-weight: 600;
            color: #DB4063;
            font-size: 17px;
        }
        .footer {
            background: #f8fafc;
            padding: 25px 30px;
            text-align: center;
            border-top: 1px solid #e2e8f0;
        }
        .footer-text {
            font-size: 12px;
            color: #64748b;
            line-height: 1.5;
        }
        .contact-info {
            margin-top: 15px;
            font-size: 13px;
            color: #475569;
        }
        .contact-info a {
            color: #DB4063;
            text-decoration: none;
        }
        .action-button {
            display: inline-block;
            background: linear-gradient(135deg, #DB4063, #c73650);
            color: white !important;
            padding: 12px 25px;
            border-radius: 8px;
            text-decoration: none;
            font-weight: 500;
            margin-top: 20px;
            box-shadow: 0 4px 12px rgba(219, 64, 99, 0.3);
        }
        .action-button:hover {
            background: linear-gradient(135deg, #c73650, #b52d44);
        }
        .phone-ltr {
            direction: ltr;
            display: table-cell;
            unicode-bidi: embed;
            width: 100%;
        }
        @media only screen and (max-width: 600px) {
            .email-container {
                margin: 10px !important;
                border-radius: 12px !important;
            }
            .header, .content, .footer {
                padding: 20px !important;
            }
            .info-row {
                display: block !important;
                margin-bottom: 20px !important;
            }
            .label {
                display: block !important;
                width: auto !important;
                margin-bottom: 5px !important;
                padding: 0 !important;
            }
            .value {
                display: block !important;
                text-align: right !important;
            }
            .company-name {
                font-size: 20px !important;
            }
            .content {
                padding: 25px 20px !important;
            }
        }
        @media (prefers-color-scheme: dark) {
            [data-ogsc] .email-container {
                background: #1a1a1a !important;
            }
            [data-ogsc] .content {
                color: #ffffff !important;
            }
            [data-ogsc] .greeting {
                color: #ffffff !important;
            }
            [data-ogsc] .notification-text {
                color: #cccccc !important;
            }
        }
    </style>
</head>
<body>
    <div class="email-container">
        <div class="header">
            <h1 class="company-name">سمو للدعاية والإعلان</h1>
            <p class="company-tagline">نحو تسويق أكثر إبداعاً وتميزاً</p>
        </div>
        <div class="content">
            <div class="greeting">السلام عليكم ورحمة الله وبركاته،</div>
            <p class="notification-text">
                ${
                  isConsult
                    ? "تم تسجيل طلب استشارة جديد من عميل محتمل عبر الموقع الإلكتروني."
                    : "تم تسجيل طلب تواصل جديد من عميل محتمل عبر الموقع الإلكتروني. نرجو التواصل مع العميل في أقرب وقت ممكن لتقديم أفضل خدمة."
                }
            </p>
            ${
              formData.email
                ? `
            <div class="message-container">
                <div class="client-info">
                    <h3>${
                      isConsult ? "بيانات طلب الاستشارة:" : "بيانات العميل:"
                    }</h3>
                    <div class="info-row">
                        <span class="label">البريد الإلكتروني:</span>
                        <span class="value">${formData.email}</span>
                    </div>
                    <div class="info-row">
                        <span class="label">تاريخ الطلب:</span>
                        <span class="value">${arabicTime}</span>
                    </div>
                    ${
                      !isConsult
                        ? `
                    <div class="info-row">
                        <span class="label">الاسم:</span>
                        <span class="value">${
                          formData.name || "عميل جديد"
                        }</span>
                    </div>
                    ${
                      formData.phone
                        ? `
                    <div class="info-row">
                        <span class="label">رقم الهاتف:</span>
                        <span class="value phone-ltr">${
                          formData.phone || "غير محدد"
                        }</span>
                    </div>
                    `
                        : ""
                    }
                    <div class="info-row">
                        <span class="label">الموضوع:</span>
                        <span class="value">${
                          formData.subject || "غير محدد"
                        }</span>
                    </div>
                    <div class="info-row">
                        <span class="label">الرسالة:</span>
                        <span class="value">${
                          formData.message || "غير محدد"
                        }</span>
                    </div>
                    `
                        : ""
                    }
                </div>
            </div>
            ${
              !isConsult
                ? `
            <div style="text-align: center;">
                <a href="mailto:${formData.email}" class="action-button">التواصل مع العميل</a>
            </div>
            `
                : ""
            }
            `
                : ""
            }
            <div class="signature">
                <p class="signature-text">مع أطيب التحيات،</p>
                <p class="company-signature">فريق سمو للدعاية والإعلان</p>
            </div>
        </div>
        <div class="footer">
            <p class="footer-text">
                هذا البريد الإلكتروني تم إرساله تلقائياً من نظام إدارة طلبات التواصل في موقع سمو للدعاية والإعلان.
                <br>
                الرجاء عدم الرد على هذا البريد مباشرة.
            </p>
            <div class="contact-info">
                للاستفسارات: <a href="mailto:sumouadvco@gmail.com">sumouadvco@gmail.com</a> |
                <br/> 
                الهاتف: <a href="tel:+966551355968" class="phone-ltr">+966 55 135 5968</a>
                <br/>
                موقعنا الإلكتروني: <a href="https://sumouadvs.com">www.sumoadvertising.com</a>
            </div>
        </div>
    </div>
</body>
</html>
    `;

    // Send company notification email
    const companyEmailResult = await emailjs.send(
      "service_bwq67lv",
      "template_nwee5q6",
      {
        title: `${
          isConsult
            ? "طلب استشارة جديد"
            : `رسالة جديدة من ${formData.name || "عميل جديد"}`
        }`,
        time: arabicTime,
        name: formData.name || "عميل جديد",
        phone: formData.phone || "غير محدد",
        subject: formData.subject || "غير محدد",
        message: isConsult
          ? "طلب استشارة من العميل"
          : formData.message || "غير محدد",
        html_content: emailTemplate,
        to_email: "sumouadvco@gmail.com",
        company_email: "sumouadvco@gmail.com",
      }
    );

    console.log("Company email sent successfully:", companyEmailResult);

    // Send client confirmation email for both consultation and contact form
    let clientEmailResult = null;
    if (formData.email) {
      try {
        clientEmailResult = await emailjs.send(
          "service_bwq67lv",
          "template_rn7m60j",
          {
            time: arabicTime,
            name: formData.name || "العميل الكريم",
            to_email: formData.email,
            client_email: formData.email,
            from_name: "سمو للدعاية والإعلان",
            subject: isConsult ? "شكراً لطلب الاستشارة" : "شكراً لتواصلك معنا",
          }
        );
        console.log(
          "Client confirmation email sent successfully:",
          clientEmailResult
        );
      } catch (clientError) {
        console.error("Failed to send client confirmation email:", clientError);
        console.error("Client Error Details:", {
          status: clientError.status,
          text: clientError.text,
          message: clientError.message,
        });
        // Don't throw error here, just log it
      }
    }

    return {
      success: true,
      companyEmail: companyEmailResult,
      clientEmail: clientEmailResult,
      message: clientEmailResult
        ? "تم إرسال الرسالة وإرسال تأكيد للعميل بنجاح"
        : "تم إرسال الرسالة للشركة ولكن فشل في إرسال تأكيد للعميل",
    };
  } catch (error) {
    console.error("Email sending failed:", error);

    // More detailed error logging
    if (error.text) {
      console.error("EmailJS Error Details:", error.text);
    }
    if (error.status) {
      console.error("EmailJS Status:", error.status);
    }

    return {
      success: false,
      error: error.message,
      details: error.text || "خطأ غير معروف في إرسال البريد الإلكتروني",
    };
  }
};
