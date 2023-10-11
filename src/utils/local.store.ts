export const setLocalStorage = (key: string, token: string) => {
  if (!key || typeof window === undefined) {
    return " ";
  }
  return localStorage.setItem(key, token);
};
export const getLocalStorage = (key: string) => {
  if (!key || typeof window === undefined) {
    return " ";
  }
  return localStorage.getItem(key);
};

export const removeLocalStorage = (key: string) => {
  if (!key || typeof window === undefined) {
    return " ";
  }
  localStorage.removeItem(key);
  const isExist = getLocalStorage(key);
  return isExist ? 0 : 1;
};
