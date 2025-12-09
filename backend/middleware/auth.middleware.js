// middleware/auth.middleware.js

import jwt from 'jsonwebtoken';

export const isAuth = (req, res, next) => {

    try {
        const token = req.cookies.token;
        if (!token) {
            return res.status(400).json({ msg: 'No token, authorization denied' });
        }
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        
        if(!decoded){
            return res.status(400).json({
                message : "token not match!"
            })
        }
        req.userId = decoded.id; 
        next(); 
    } catch (err) {
        res.status(401).json({ msg: 'Token is not valid' });
    }
};
