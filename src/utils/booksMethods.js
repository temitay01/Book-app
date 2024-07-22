const BOOKS_STORAGE_KEY = "StoredBooks";
export const storeBooks = (books) => {
  window.localStorage.setItem(BOOKS_STORAGE_KEY, JSON.stringify(books));
};

export const getStoredBooks = () => {
  const StoredBooks = window.localStorage.getItem(BOOKS_STORAGE_KEY);
  if (StoredBooks && StoredBooks !== "undefined") {
    return JSON.parse(StoredBooks);
  }
  return [];
};
