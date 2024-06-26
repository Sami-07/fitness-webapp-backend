import jwt from "jsonwebtoken";
export async function validate(req, res, next) {
    try {
        const token =  req?.cookies?.token;
   
        if (!token) {
            return res.status(401).json({ msg: "No authentication token, authorization denied" });
        }
        const verified = jwt.verify(token, process.env.JWT_SECRET);
        if (!verified) {
            return res.status(401).json({ msg: "Token verification failed, authorization denied" });
        }
        req.user = verified
        
        next();
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
}