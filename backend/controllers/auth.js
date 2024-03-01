const captcha = require('node-captcha-generator');
const db = require("../config/connection")
const bcrypt = require("bcryptjs")
const jwt = require("jsonwebtoken")
const nodemailer = require("nodemailer")
const fs = require('fs');
const path = require('path');


// const transporter = nodemailer.createTransport({
//   service: 'gmail',
//   auth: {
//     user: ,
//     pass: 'Kuldeep.123@'
//   }
// });

const transporter = nodemailer.createTransport({
  // host: process.env.email_host,
  // port : process.env.port,
  // secure:false,
  // auth: {
  //   user: process.env.user_email,
  //   pass: process.env.user_password
  // }

  host: 'sandbox.smtp.mailtrap.io',
  port: 2525,
  secure: false, // true for 465, false for other ports
  auth: {
    user: "e75c8cbb57b1b7",
    pass: "9cf268fe19d085"
  }
});

const RegisterUser = async (req, res) => {
  try {
    const { username, email, password, confirm_password, domain, package, template_name } = req.body;

    // Check if the email already exists
    const emailExistsQuery = 'SELECT COUNT(*) AS count FROM login_auth WHERE email = ?';
    db.query(emailExistsQuery, [email], async (error, results) => {
      if (error) {
        return res.status(500).json({ error: 'Internal server error' });
      }

      const emailExistsResult = results[0];
      if (emailExistsResult.count > 0) {
        return res.status(400).json({ error: 'Email already exists' });
      }
if(password !== confirm_password){
  res.status(401).send("Password must be same")
}
      const hashedPassword = await bcrypt.hash(password, 10);

      // Insert the user into the database
      const insertQuery = 'INSERT INTO login_auth (username, email, password, domain, package, template_name) VALUES (?, ?, ?, ?, ?, ?)';
      db.query(insertQuery, [username, email, hashedPassword, domain, package, template_name], (error, result) => {
        if (error) {
          return res.status(500).json({ error: 'Internal server error' });
        }

        // Send registration confirmation email
        const resetLink = `http://localhost:5173/login`;
        const mailOptions = {
          from: "your_email@example.com", // Replace with your email
          to: email,
          subject: 'Registration Successful',
          html: `<div>
                    Congratulations, you have successfully registered with the workset team.<br/>
                    Please click on the following link to log in: <a href="${resetLink}">${resetLink}</a><br/>
                    If you did not request this, please ignore this email.
                </div>`
        };
        transporter.sendMail(mailOptions, (error, info) => {
          if (error) {
            console.error('Error sending email:', error);
            return res.status(500).json({ error: 'Error sending email' });
          }
          
          res.json({ message: 'Registration successful', result });
        });
      });
    });

  } catch (error) {
    console.error('Error:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
};


const Login = async (req, res) => {
  try {
    const { username, password } = req.body
    db.query('SELECT * FROM login_auth WHERE LOWER(username) = LOWER(?)', [username], (err, results) => {
      if (err) throw err;

      if (results.length === 0) {
        return res.status(400).json({ message: 'Invalid email or password' });
      }
      const user = results[0];
      bcrypt.compare(password, user.password, (err, isMatch) => {
        if (err) throw err;
        if (isMatch) {
          const token = jwt.sign({ userId: user.userid }, process.env.secret_key);
          res.json({
            message: "login success", success: true, token, users: {
              id:user.id,
              name: user.username,
              email: user.email,
              changepass:user.changepass
            }
          });
        } else {
          res.status(400).json({ message: 'Invalid username or password' });
        }
      });
    });
  } catch (error) {
    console.log(error)
  }
}

const changePassword = async (req, res) => {
  const userId = req.user.userId;
  const { changePass } = req.body;
  try {
    const getUserQuery = 'SELECT * FROM login_auth WHERE userid = ?';
    db.query(getUserQuery, [userId], async (err, results) => {
      if (err) throw err;

      if (results.length === 0) {
        return res.status(404).json({ message: 'User not found' });
      }

      const user = results[0];
      // Hash the New Password
      const hashedPassword = await bcrypt.hash(changePass, 10);

      const updatePasswordQuery = 'UPDATE login_auth SET password = ? WHERE userid = ?';
      db.query(updatePasswordQuery, [hashedPassword, userId], (err, result) => {
        if (err) {
          return res.status(500).json({ message: 'Error updating password', success: false });
        }
        res.json({ message: 'Password updated successfully', success: true });
      });
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal server error', success: false });
  }
};

const UpdateChangePass = async (req, res) => {
  try {
    const userId = req.user.userId;
    const updatePasswordQuery = 'UPDATE login_auth SET changepass = ? WHERE userid = ? AND changepass IS NULL';
    db.query(updatePasswordQuery, ['1', userId], (err, result) => {
      if (err) {
        return res.status(500).json({ message: 'Error updating chanpass value', success: false });
      }
      if (result.affectedRows === 0) {
        return res.status(404).json({ message: 'User not found or change pass already set', success: false });
      }
      res.json({ message: 'Password updated successfully', success: true });
    });
  } catch (error) {
    res.status(500).json({ message: error.message, success: false });
  }
};

const forgetPassword = async (req, res) => {
  try {
    const { email } = req.body;
    console.log(process.env.user_email)
    // Generate a unique token
    const token = jwt.sign({ email }, process.env.secret_key, { expiresIn: '1h' });

    const sql = `UPDATE users SET reset_token = ? WHERE email = ?`;
    await db.query(sql, [token, email], (err, result) => {
      if (err) {
        console.error('Error storing reset token:', err);
        return res.status(500).send('Error storing reset token');
      }
      const resetLink = `http://localhost:5173/reset-password?token=${token}`;
      const mailOptions = {
        from: "e75c8cbb57b1b7",
        to: email,
        subject: 'Password Reset',
        html: `<div>
      You are receiving this because you (or someone else) have requested the reset of the password for your account.\n\n` +
          `Please click on the following link, or paste this into your browser to complete the process: <br/><a href="#">
    ${resetLink}</a>
    If you did not request this, please ignore this email and your password will remain unchanged.
      </div>`
      };

      transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
          console.error('Error sending email:', error);
          return res.status(500).send('Error sending email');
        }
        console.log('Email sent: ' + info.response);
        res.send({ message: 'Email sent with password reset instructions' });
      });
    });
  } catch (error) {

  }
}

const setNewPassword = async (req, res) => {
  try {
    const { token, newPassword } = req.body;

    const hashedPassword = await bcrypt.hash(newPassword, 10);

    // pdate the password in the database
    const sql = `UPDATE users SET password = ?, reset_token = NULL WHERE reset_token = ?`;
    await db.query(sql, [hashedPassword, token], (err, result) => {
      if (err) {
        console.error('Error updating password:', err);
        return res.status(500).send('Error updating password');
      }

      res.send('Password updated successfully');
    });
  } catch (error) {
    res.send('find error');
  }
}


//log data

const logData = async(req,res)=>{
  try {
    const { userId, username, timestamp,status,section,component,action } = req.body;
    const logMessage = ` Date : ${timestamp} , User ${username} (ID: ${userId}),component:${component} ,section:${section} , action:${action} status ${status} \n `;
  
    // Define the path to the log file
    const filePath = path.join(__dirname, 'logs.txt');
  
    // Append the log message to the log file
    fs.appendFile(filePath, logMessage, (err) => {
      if (err) {
        console.error('Error logging user login:', err);
        res.status(500).send('Error logging user login');
      } else {
        console.log('User login logged successfully');
        res.sendStatus(200);
      }
    });  
  } catch (error) {
    console.log(error)
  }
}
module.exports = { RegisterUser, Login, forgetPassword, setNewPassword,changePassword ,logData,UpdateChangePass}