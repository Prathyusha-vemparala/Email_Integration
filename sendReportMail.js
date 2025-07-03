const nodemailer = require('nodemailer');
const path = require('path');


// Configure transporter (example with Gmail)
const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'automation.test.report21@gmail.com', // Replace with your email
    pass: 'paotacgifeqnkfjy'     // Use app password if 2FA enabled
  }
});

// Customize these values
const reportLink = path.join(__dirname, "allure-report/index.html"); // Replace with actual link if hosted
const mailOptions = {
  from: '"Test Automation" <automation.reports.qa@gmail.com>',
  to: 'vemparala.prathyusha1999@gmail.com', // Comma-separated emails
  subject: 'Playwright Test Execution Report',
  html: `<p>Hello,</p><p>The test execution is completed. Please find the report link below:</p><a href="${reportLink}">${reportLink}</a>`
};

transporter.sendMail(mailOptions, function (error, info) {
  if (error) {
    console.error('Email sending failed:', error);
  } else {
    console.log('Email sent: ' + info.response);
  }
});
 