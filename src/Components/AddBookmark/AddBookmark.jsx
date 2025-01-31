import { useNavigate } from "react-router-dom";
import useUrlLocation from "../../../hooks/useUrlLocation";
import ReactCountryFlag from "react-country-flag";
import toast from "react-hot-toast";
import { useEffect, useState } from "react";
import axios from "axios";
import Loader from "../Loader/Loader";
import { useBookmark } from "../context/BookmarkListContext";

const BASE_URL = "https://us1.api-bdc.net/data/reverse-geocode-client";

function AddBookmark() {
  const navigate = useNavigate();
  const [lat, lng] = useUrlLocation();
  const [cityName, setCityName] = useState("");
  const [countryName, setCountryName] = useState("");
  const [countryFlagCode, setCountryFlagCode] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const { createBookmark } = useBookmark();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const newBookmark = {
      cityName,
      country: countryName,
      countryCode: countryFlagCode,
      latitude: lat,
      longitude: lng,
      host_location: cityName + " " + countryName,
    };
    await createBookmark(newBookmark);
    navigate("/bookmark");
  };

  useEffect(() => {
    if (!lat || !lng) return;

    async function getLocation() {
      setIsLoading(true);
      setError(null);
      try {
        const { data } = await axios.get(
          `${BASE_URL}?latitude=${lat}&longitude=${lng}`
        );

        if (!data.countryName)
          throw new Error("Location not found, please select somewher else");

        setCityName(data.city || data.locality || "");
        setCountryName(data.countryName);
        setCountryFlagCode(data.countryCode);
      } catch (error) {
        setError(error.message);
      } finally {
        setIsLoading(false);
      }
    }

    getLocation();
  }, [lat, lng]);

  if (isLoading) return <Loader />;
  if (error) return <p>{error}</p>;

  return (
    <div>
      <h2>Bookmark New Location</h2>
      <form className="form" onSubmit={handleSubmit}>
        <div className="formControl">
          <label htmlFor="cityName">CityName</label>
          <input
            onChange={(e) => setCityName(e.target.value)}
            value={cityName}
            type="text"
            name="cityName"
            id="cityName"
          />
        </div>
        <div className="formControl">
          <label htmlFor="country">Country</label>
          <input
            onChange={(e) => setCountryName(e.target.value)}
            value={countryName}
            type="text"
            name="country"
            id="country"
          />
          <ReactCountryFlag
            className="flag"
            svg
            countryCode={countryFlagCode}
          />
        </div>
        <div className="buttons">
          <button
            className="btn btn--back"
            onClick={(e) => {
              e.preventDefault();
              navigate(-1);
            }}
          >
            &larr; Back
          </button>
          <button type="submit" className="btn btn--primary">
            Add
          </button>
        </div>
      </form>
    </div>
  );
}
export default AddBookmark;
