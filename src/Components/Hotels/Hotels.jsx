import { Link } from "react-router-dom";
import Loader from "../Loader/Loader";
import { useHotels } from "../context/HotelProvider";

const Hotels = () => {
  const { hotels, isLoading, currentHotel } = useHotels();

  if (isLoading) return <Loader />;
  return (
    <div className="searchList">
      <h2>Search Results ({hotels.length})</h2>
      {hotels.map((item) => {
        return (
          <Link
            key={item.id}
            to={`/hotels/${item.id}?lat=${item.latitude}&lng=${item.longitude}`}
          >
            <div
              className={`searchItem ${
                currentHotel?.id === item.id ? "current-hotel" : ""
              }`}
            >
              <img src={item.xl_picture_url} alt={item.name} />
              <div className="searchItemDesc">
                <p className="location">{item.smart_location}</p>
                <p className="name">{item.name}</p>
                <p className="price">
                  €&nbsp;{item.price}&nbsp;
                  <span>night</span>
                </p>
              </div>
            </div>
          </Link>
        );
      })}
    </div>
  );
};

export default Hotels;
