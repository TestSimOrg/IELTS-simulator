import jwt from "jsonwebtoken";
import log from "../lib/logger.js";
import user from "../models/user.js";

const checkAuth = async (req, res, next) => {
	// Retrieve JWT token from the cookies
	const token = req.cookies.jwt;

	// Check if token exists
	if (!token) {
		return res
			.status(401)
			.json({ message: "Unauthorized: No token provided" });
	}

	try {
		// Verify the token
		const decodedToken = jwt.verify(token, process.env.SECRET);
		const userData = await user.findById(decodedToken.id).lean();
		log.info(`User Email: ${userData.email}`);

		req.user = decodedToken.id;
		next();
	} catch (error) {
		// If token verification fails, return an error response
		return res.status(401).json({ message: "Unauthorized: Invalid token" });
	}
};

export { checkAuth };
