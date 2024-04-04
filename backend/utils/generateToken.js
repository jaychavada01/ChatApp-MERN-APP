import jwt from "jsonwebtoken";

const generateTokenandSetCookie = (userId, res) => {
  // here token is created and it will be expire in 15days
  const token = jwt.sign({ userId }, process.env.JWT_SECRET, {
    expiresIn: "15d",
  });

  res.cookie("jwt", token, {
    maxAge: 15 * 24 * 60 * 60 * 1000, //maxAge counts in milliseconds
    httpOnly: true, // prevents cross-site scripting attacks
    sameSite: "strict", // cross-site request forgery attacks
    secure: process.env.NODE_ENV !== "development",
  });
};

export default generateTokenandSetCookie;
