import { authKey } from "@/constance/storageKey";
import { decodedToken } from "@/utils/jwt";
import {
  getLocalStorage,
  removeLocalStorage,
  setLocalStorage,
} from "@/utils/local.store";

export const storeUserInfo = ({ accessToken }: { accessToken: string }) => {
  if (typeof window === "undefined") {
    return "";
  }
  return setLocalStorage(authKey, accessToken);
};

export const userLogin = (): boolean => {
  if (typeof window === "undefined") {
    return false;
  }
  const token = getLocalStorage(authKey);
  return !!token;
};

export const getUserInfo = () => {
  if (typeof window === "undefined") {
    return "";
  }
  const token = getLocalStorage(authKey);
  if (token) {
    const data = decodedToken(token);
    return data;
  } else {
    return " ";
  }
};
export const userLogout = () => {
  if (typeof window === "undefined") {
    return false;
  }
  const token = removeLocalStorage(authKey);
  return token;
};
