// src/utils/storage.ts

export type RecentlyViewedType = "service" | "specialty";

export interface RecentlyViewedItem {
  type: RecentlyViewedType;
  id: number;
  timestamp: number;
}

interface FormProgress<T = unknown> {
  data: T;
  timestamp: number;
}

export function setStorageItem<T>(key: string, value: T): boolean {
  try {
    const serializedValue = JSON.stringify(value);
    window.localStorage.setItem(key, serializedValue);
    return true;
  } catch (error) {
    console.error(`Error storing ${key} in localStorage:`, error);
    return false;
  }
}

export function getStorageItem<T>(key: string, defaultValue: T): T {
  try {
    const item = window.localStorage.getItem(key);
    return item ? (JSON.parse(item) as T) : defaultValue;
  } catch (error) {
    console.error(`Error retrieving ${key} from localStorage:`, error);
    return defaultValue;
  }
}

export function removeStorageItem(key: string): boolean {
  try {
    window.localStorage.removeItem(key);
    return true;
  } catch (error) {
    console.error(`Error removing ${key} from localStorage:`, error);
    return false;
  }
}

export function clearStorage(): boolean {
  try {
    window.localStorage.clear();
    return true;
  } catch (error) {
    console.error("Error clearing localStorage:", error);
    return false;
  }
}

// --- Recently viewed ---

export function addToRecentlyViewed(
  type: RecentlyViewedType,
  id: number
): void {
  const recentlyViewed = getStorageItem<RecentlyViewedItem[]>(
    "recentlyViewed",
    []
  );

  const newItem: RecentlyViewedItem = {
    type,
    id,
    timestamp: Date.now(),
  };

  const existingIndex = recentlyViewed.findIndex(
    (item) => item.type === type && item.id === id
  );

  if (existingIndex !== -1) {
    recentlyViewed.splice(existingIndex, 1);
  }

  recentlyViewed.unshift(newItem);

  const trimmedList = recentlyViewed.slice(0, 10);
  setStorageItem("recentlyViewed", trimmedList);
}

export function getRecentlyViewed(
  type: RecentlyViewedType | null = null,
  limit = 10
): RecentlyViewedItem[] {
  const recentlyViewed = getStorageItem<RecentlyViewedItem[]>(
    "recentlyViewed",
    []
  );
  const filtered = type
    ? recentlyViewed.filter((item) => item.type === type)
    : recentlyViewed;

  return filtered.slice(0, limit);
}

// --- Form progress ---

export function saveFormProgress<T = unknown>(
  formId: string,
  formData: T
): void {
  const payload: FormProgress<T> = {
    data: formData,
    timestamp: Date.now(),
  };
  setStorageItem(`formProgress_${formId}`, payload);
}

export function getFormProgress<T = unknown>(
  formId: string
): FormProgress<T> | null {
  return getStorageItem<FormProgress<T> | null>(`formProgress_${formId}`, null);
}

export function clearFormProgress(formId: string): void {
  removeStorageItem(`formProgress_${formId}`);
}
