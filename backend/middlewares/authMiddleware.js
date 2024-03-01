const jwt = require('jsonwebtoken');

const requireSignIn = async(req,res,next)=>{
    try {
        const token = req.headers.authorization;
        if (!token) {
            return res.status(401).json({ message: 'No token provided' });
          }
        const decoded = jwt.verify(token, process.env.secret_key);
        req.user = decoded;
        next()
        console.log(req.user)
    } catch (error) {
        console.log(error)
    }
}

module.exports = {requireSignIn}