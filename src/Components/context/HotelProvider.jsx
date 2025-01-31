import { useSearchParams } from "react-router-dom";
import useFetch from "../../../hooks/useFetch";
import { createContext, useContext, useState } from "react";
import axios from "axios";
import toast from "react-hot-toast";

const HotelContext = createContext();
const BASE_URL = "http://localhost:5000/hotels";

function HotelProvider({ children }) {
  const [currentHotel, setCurrentHotel] = useState(null);
  const [isLoadingCurrentHotel, setIsLoadingCurrentHotel] = useState(false);
  const [searchParams, setSearchParams] = useSearchParams();
  const destination = searchParams.get("destination");
  const room = JSON.parse(searchParams.get("options"))?.room;

  async function getHotel(id) {
    setIsLoadingCurrentHotel(true);
    try {
      const { data } = await axios.get(`${BASE_URL}/${id}`);
      setCurrentHotel(data);
      setIsLoadingCurrentHotel(false);
    } catch (error) {
      toast.error(error.message);
      setIsLoadingCurrentHotel(false);
    }
  }

  const { data: hotels, isLoading } = useFetch(
    BASE_URL,
    `q=${destination || ""}&accommodates_gte=${room || 1}`
  );

  return (
    <HotelContext.Provider
      value={{
        hotels,
        isLoading,
        currentHotel,
        isLoadingCurrentHotel,
        getHotel,
      }}
    >
      {children}
    </HotelContext.Provider>
  );
}

export default HotelProvider;

export function useHotels() {
  return useContext(HotelContext);
}
