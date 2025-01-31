import useFetch from "../../../hooks/useFetch";
import { createContext, useContext, useState } from "react";
import axios from "axios";
import toast from "react-hot-toast";

const BookmarkContext = createContext();
const BASE_URL = "http://localhost:5000";

function BookmarkListProvider({ children }) {
  const [currentBookmark, setCurrentBookmark] = useState(null);
  const [isLoadingBookmark, setIsLoadingBookmark] = useState(false);
  const { data: bookmarks, isLoading } = useFetch(`${BASE_URL}/bookmarks`);

  async function getBookmark(id) {
    setIsLoadingBookmark(true);
    try {
      const { data } = await axios.get(`${BASE_URL}/bookmarks/${id}`);
      setCurrentBookmark(data);
      setIsLoadingBookmark(false);
    } catch (error) {
      toast.error(error.message);
      setIsLoadingBookmark(false);
    }
  }

  return (
    <BookmarkContext.Provider
      value={{
        bookmarks,
        isLoading,
        currentBookmark,
        isLoadingBookmark,
        getBookmark,
      }}
    >
      {children}
    </BookmarkContext.Provider>
  );
}

export default BookmarkListProvider;

export function useBookmark() {
  return useContext(BookmarkContext);
}
