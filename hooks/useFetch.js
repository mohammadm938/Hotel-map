import axios from "axios";
import { useEffect, useState } from "react";
import toast from "react-hot-toast";

export default function useFetch(url, query = "") {
  const [data, setDate] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    async function fetchDate() {
      try {
        setIsLoading(true);
        const { data } = await axios.get(`${url}?${query}`);
        setDate(data);
      } catch (err) {
        setDate([]);
        toast.error(err?.message);
      } finally {
        setIsLoading(false);
      }
    }
    fetchDate();
  }, [url, query]);

  return { data, isLoading };
}
