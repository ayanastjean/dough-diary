const nodemailer = require('nodemailer');

const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: 'thedoughdiary@gmail.com',
      pass: 'otrt hdkn ipby jfvw'
    }
  });

  const sendEmail = async (type, to, name) => {
    let subject = '';
    let html = '';
  
    if (type === 'register') {
      subject = 'Welcome to The Dough Diary!';
      html = `
        <div style="font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; background-color: #fdf8f6; padding: 20px; border-radius: 10px;">
          <h2 style="color: #594A47;">Hey ${name},</h2>
          <p>Thanks for signing up for The Dough Diary!</p>
          <p>We can’t wait to bake up something sweet with you. Keep an eye on your inbox for your welcome kit tracking number and baking tips!</p>
          <p style="margin-top: 20px;">Happy baking,<br/><strong>The Dough Diary Team</strong></p>
          <img src="https://github.com/ayanastjean/dough-diary/blob/main/src/assets/footer-logo.png?raw=true" alt="Baking" style="max-width:100%; border-radius:8px; margin-top:20px;" />        </div>
      `;
    } else if (type === 'contact') {
      subject = ' Diary Entry Received!!';
      html = `
        <div style="font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; background-color: #fdf8f6; padding: 20px; border-radius: 10px;">
          <h2 style="color: #594A47;">Hi ${name},</h2>
          <p>Thanks for reaching out! We just wanted to let you know we received your message and will get back to you shortly.</p>
          <p>If you have more questions in the meantime, feel free to reply to this email.</p>
          <p style="margin-top: 20px;">With gratitude,<br/><strong>The Dough Diary Team</strong></p>
          <img src="https://github.com/ayanastjean/dough-diary/blob/main/src/assets/footer-logo.png?raw=true" alt="Baking" style="max-width:100%; border-radius:8px; margin-top:20px;" />
        </div>
      `;
    }
  
    const mailOptions = {
      from: 'thedoughdiary@gmail.com',
      to,
      subject,
      html
    };
  
    return transporter.sendMail(mailOptions);
  };
  
  module.exports = sendEmail;
  
