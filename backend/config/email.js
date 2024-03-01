const nodemailer = require("nodemailer")

const sendmail  = (option)=>{
    const transporter = nodemailer.createTransport({
        service: process.env.email_host,
        port : process.env.port,
        auth: {
          user: process.env.user_email,
          pass: process.env.user_password
        }
      });

      const emailOptions = {
        from:"Cineplix support<support@cineflix.com>",
        to:option.email,
        subject:option.subject,
        text:option.text
      }
   transporter.sendMail(emailOptions)
}