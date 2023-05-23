import jwt from "jsonwebtoken";

export function isTokenExpired(token) {
  try {
    const decodedToken = jwt.decode(token);
    if (decodedToken.exp && decodedToken.exp * 1000 < Date.now()) {
      // Token has an expiration claim and it's expired
      return true;
    }
    return false; // Token is not expired
  } catch (error) {
    return true; // Token is invalid or couldn't be decoded
  }
}