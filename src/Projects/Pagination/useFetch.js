import { useState, useEffect, useCallback } from "react";
import paginate from "./utils";

export const useFetch = (url) => {
  const [loading, setLoading] = useState(true);
  const [list, setList] = useState([]);

  const getProducts = useCallback(async () => {
    try {
      const response = await fetch(url);
      const data = await response.json();
      setList(paginate(data));
      setLoading(false);
    } catch (err) {
      console.log(err);
    }
  }, [url]);

  useEffect(() => {
    getProducts();
  }, [getProducts]);

  return { loading, list };
};
