export function setStorageItem(key: string, value: any) {
  localStorage.setItem(key, value);
}

export function getStorageItem(key: string) {
  return localStorage.getItem(key);
}

export function removeStorageItem(key: string) {
  localStorage.removeItem(key);
}
