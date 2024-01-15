import {TOKEN_KEY} from "@/shared";

export const validateAuthorization = async (): Promise<boolean> => {
  const token = localStorage.getItem(TOKEN_KEY); // prefer store token in cookies
  if (token) {
    // make request to /me
    return true;
  }
  return false;
}
