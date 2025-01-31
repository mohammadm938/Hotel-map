import { Outlet } from "react-router-dom";
import Map from "../Map/Map";
import { useHotels } from "../context/HotelProvider";

const AppLayout = () => {
  const { hotels, isLoading } = useHotels();
  return (
    <div className="appLayout">
      <div className="sidebar">
        <Outlet />
      </div>
      <Map markerPositions={hotels} isLoadingPositions={isLoading} />
    </div>
  );
};

export default AppLayout;
