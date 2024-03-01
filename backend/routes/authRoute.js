const express = require("express");
const { RegisterUser, Login, forgetPassword, setNewPassword, changePassword, logData, UpdateChangePass } = require("../controllers/auth");
const { requireSignIn } = require("../middlewares/authMiddleware");

const router = express.Router();

router.post('/register',RegisterUser)
router.post('/login',Login)
router.post('/forget-password',forgetPassword)
router.post('/reset-password',setNewPassword)
router.put('/change-password',requireSignIn, changePassword)
router.post('/log-data',logData )
router.put('/changepass',requireSignIn,UpdateChangePass)
module.exports = router