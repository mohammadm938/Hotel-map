import { useNavigate, useParams } from "react-router-dom";
import { useBookmark } from "../context/BookmarkListContext";
import { useEffect } from "react";
import Loader from "../Loader/Loader";
import ReactCountryFlag from "react-country-flag";

function SingleBookmark() {
  const { id } = useParams();
  const { getBookmark, isLoadingBookmark, currentBookmark } = useBookmark();
  const navigate = useNavigate();

  useEffect(() => {
    getBookmark(id);
  }, [id]);

  if (isLoadingBookmark || !currentBookmark) {
    return <Loader />;
  }

  return (
    <div>
      <button onClick={() => navigate(-1)} className="btn btn--back">
        &larr; Back
      </button>
      <div className={"bookmarkItem"}>
        <ReactCountryFlag svg countryCode={currentBookmark.countryCode} />
        &nbsp;<strong>{currentBookmark.cityName}</strong>&nbsp;
        <span>{currentBookmark.country}</span>
      </div>
    </div>
  );
}

export default SingleBookmark;
