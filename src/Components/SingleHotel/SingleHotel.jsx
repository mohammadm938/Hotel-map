import { useParams } from "react-router-dom";
import Loader from "../Loader/Loader";
import { useHotels } from "../context/HotelProvider";
import { useEffect } from "react";

function SingleHotel() {
  const { id } = useParams();
  const { currentHotel, isLoadingCurrentHotel, getHotel } = useHotels();

  useEffect(() => {
    getHotel(id);
  }, [id]);

  if (isLoadingCurrentHotel || !currentHotel) return <Loader />;
  return (
    <div className="room">
      <div className="roomDetail">
        <h2>{currentHotel.name}</h2>
        <div>
          {currentHotel.number_of_reviews} reviews &bull;{" "}
          {currentHotel.smart_location}
        </div>
        <img src={currentHotel.xl_picture_url} alt={currentHotel.name} />
      </div>
    </div>
  );
}

export default SingleHotel;
