import { Outlet } from "react-router-dom";
import Map from "../Map/Map";
import { useBookmark } from "../context/BookmarkListContext";

const BookmarkLayout = () => {
  const { bookmarks, isLoading } = useBookmark();
  return (
    <div className="appLayout">
      <div className="sidebar">
        <Outlet />
      </div>
      <Map markerPositions={bookmarks} isLoadingPositions={isLoading} />
    </div>
  );
};

export default BookmarkLayout;
