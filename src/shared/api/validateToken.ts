import {TOKEN_KEY} from "../constants";

export const validateToken:() => Promise<boolean> = () => {
  const token = localStorage.getItem(TOKEN_KEY);
  // prefer store token in cookies(httpOnly)
  if (token) {
    // make request to /me
    return Promise.resolve(true);
  }
  return Promise.resolve(false);
};
