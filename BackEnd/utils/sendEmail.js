const nodemailer = require('nodemailer');

// Send email utility function
const sendEmail = async (options) => {
  // Create a transporter
  const transporter = nodemailer.createTransport({
    host: process.env.EMAIL_HOST, // Use your SMTP service provider host
    port: process.env.EMAIL_PORT, // Typically 587 or 465
    auth: {
      user: process.env.EMAIL_USERNAME, // Your email username
      pass: process.env.EMAIL_PASSWORD, // Your email password
    },
  });

  // Define the email options
  const mailOptions = {
    from: 'Your App <no-reply@yourapp.com>',
    to: options.email,
    subject: options.subject,
    text: options.message,
    // You can also use HTML content here
  };

  // Send the email
  await transporter.sendMail(mailOptions);
};

module.exports = sendEmail;
