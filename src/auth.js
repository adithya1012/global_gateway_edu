// auth.js
// import jwt from 'jsonwebtoken';
import { jwtDecode } from 'jwt-decode';
import Cookies from 'js-cookie';

export const isAuthenticated = () => {
  const token = Cookies.get('jwt');
  if (token) {
    try {
    //   const decodedToken = jwt.verify(token, "accesstoken");
      const decodedToken = jwtDecode(token)
      console.log(decodedToken);
      return true;
    } catch (error) {
      console.error(error.message);
      // return false;
    }
  }
  // return false;
  return true;
};
