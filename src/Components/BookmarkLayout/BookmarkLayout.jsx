import { Outlet } from "react-router-dom";
import Map from "../Map/Map";
import { useBookmark } from "../context/BookmarkListContext";

const BookmarkLayout = () => {
  const { bookmarks } = useBookmark();
  return (
    <div className="appLayout">
      <div className="sidebar">
        <Outlet />
      </div>
      <Map markerPositions={[]} isLoadingPositions={false} />
    </div>
  );
};

export default BookmarkLayout;
