import { expressjwt } from "express-jwt";

export const authMiddleware = expressjwt({
  algorithms: ['HS256'],
  credentialsRequired: false,
  secret: process.env.JWT_ACCESS_SECRET_KEY || 'jwt-secret-key',
  getToken: function (req) {
    if (req && req.cookies) {
      return req.cookies['token'];
    }
    return null;
  }
});
