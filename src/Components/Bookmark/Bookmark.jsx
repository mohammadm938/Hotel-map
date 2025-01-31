import ReactCountryFlag from "react-country-flag";
import { useBookmark } from "../context/BookmarkListContext";
import Loader from "../Loader/Loader";
import { Link } from "react-router-dom";

function Bookmark() {
  const { isLoadingBookmark, bookmarks, currentBookmark } = useBookmark();

  if (isLoadingBookmark) return <Loader />;

  return (
    <div>
      <h2>BookmarkList</h2>
      <div className="bookmarkList">
        {bookmarks.map((item) => (
          <Link
            key={item.id}
            to={`${item.id}?lat=${item.latitude}&lng=${item.longitude}`}
          >
            <div
              className={`bookmarkItem ${
                currentBookmark?.id === item.id ? "current-bookmark" : ""
              }`}
            >
              <ReactCountryFlag svg countryCode={item.countryCode} />
              &nbsp;<strong>{item.cityName}</strong>&nbsp;
              <span>{item.country}</span>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}

export default Bookmark;
