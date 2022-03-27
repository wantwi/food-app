import { useState, useEffect, useCallback } from "react";
import photo from "../api/config";

export default () => {
  const [results, setResults] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");
  const onTermSubmit = useCallback(async () => {
    setIsLoading(true);
    try {
      const request = await photo.get("photos", {
        params: {
          limit: 500,
        },
      });
      if (request) {
        setResults(request.data);
        setError("");

        setIsLoading(false);
      }
    } catch (error) {
      setError(error.message);
    }
  }, []);

  useEffect(() => {
    onTermSubmit();
  }, []);

  return { results, error, onTermSubmit, isLoading };
};
