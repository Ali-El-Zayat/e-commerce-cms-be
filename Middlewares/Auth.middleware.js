const jwt = require("jsonwebtoken");
const { respondWithError } = require("../Utils/helpers");

module.exports = (req, res, next) => {
  try {
    const fullToken = req.headers.authorization;
    if (!fullToken || !req.headers.authorization.startsWith("Bearer ")) {
      return res.status(401).json({ message: "No token provided" });
    }
    const token = fullToken.split(" ")[1];
    if (!token) return res.status(403).json(respondWithError("Access denied"));
    const decodedToken = jwt.verify(token, process.env.JWT_SECRET);
    if (decodedToken.role !== "ADMIN") {
      return res
        .status(403)
        .json(respondWithError("Access denied", { role: decodedToken.role }));
    }
    return next();
  } catch (error) {
    console.log(error);
    res.status(400).json(respondWithError("Internal server error", error));
  }
};
